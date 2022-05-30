/*
 * @Author: 李佳修
 * @Date: 2022-05-20 09:30:58
 * @LastEditTime: 2022-05-30 16:39:56
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/ArticlePublish/ArticlePublish.tsx
 */

import './editor.css';

import React, { useEffect, useState } from 'react';
import { createArticleTag, createNewTag } from 'redux/tag/tagSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import AddCoverPic from './components/AddCoverPic';
import AddTags from './components/AddTags';
import Box from '@mui/material/Box';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import CkeditorS3UploadAdapter from 'components/CkeditorS3UploadAdapter';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import FullScreenLoading from 'components/FullScreenLoading';
import LoadingButton from '@mui/lab/LoadingButton';
import MyImageList from './components/MyImageList';
import TextField from '@mui/material/TextField';
import { getOwnerUserName } from 'redux/auth/authSlice';
import {
  Article,
  postArticle,
  fetchArticle,
  updateArticleDetail
} from 'redux/article/articleSlice';
import useMessage from 'hooks/useMessage';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';

export interface Tag {
  tagID: string;
}

enum ActionType {
  create = '发布文章',
  edit = '编辑文章'
}

const ArticlePublish = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const authUser = useAppSelector((state) => state.auth.user);
  
  const message = useMessage();
  const navigate = useNavigate();
  const username = useAppSelector(getOwnerUserName);
  // 获取url中的文章id参数 如果有说明是编辑文章 没有说明是新建
  const { id: editArticleId } = useParams();
  const actionType = editArticleId ? ActionType.edit : ActionType.create;

  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [coverPageDescription, setCoverPageDescription] = useState<string>('');
  const [tags, setTags] = useState<Array<Tag>>([]);
  const [imgFile, setImgFile] = useState('');
  const [inputStatus, setInputStatus] = useState({
    title: false,
    desc: false,
  });
  const [fullScreenLoading, setFullScreenLoading] = useState({
    loading: false,
    message: '',
  });
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCurrentArticle = async () => {
      setFullScreenLoading({
        loading: true,
        message: '正在获取文章信息',
      });
      const res = await dispatch(fetchArticle({
        articleId: editArticleId,
        isAuth: true
      }));
      if (res.meta.requestStatus === 'fulfilled') {
        const articleInfo = res.payload;
        setTitle(articleInfo.title);
        setContent(articleInfo.content);
        setCoverPageDescription(articleInfo.coverPageDescription);
        setTags(() => articleInfo.tags.items);
        setImgFile(articleInfo.coverPageImgURL);
      } else {
        message.open({
          type: 'error',
          message: '获取文章失败'
        });
      }
      setFullScreenLoading({
        loading: false,
        message: '',
      });
      console.log(res);
    };
    if (editArticleId && actionType === ActionType.edit) {
      getCurrentArticle();
    } else {
      setTitle('');
      setContent('');
      setCoverPageDescription('');
      setTags([]);
      setImgFile('');
    }
  }, [editArticleId, actionType]);

  const handleFocus = (key) => {
    setInputStatus((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  const handleSubmitArticle = async () => {
    setSubmitLoading(true);
    const currentTitle = title;
    const currentContent = content;
    const currentTags = tags;
    const currentCoverPageDescription = coverPageDescription;
    // 校验
    if (!title || !coverPageDescription || !content) {
      setInputStatus(() => ({
        title: !title,
        desc: !coverPageDescription,
      }));
      setSubmitLoading(false);
      message.open({
        type: 'error',
        message: !content ? '请填写文章内容' : '文章信息不全，无法发布',
      });
      return;
    }
    setFullScreenLoading({
      loading: true,
      message: actionType === ActionType.create ? '正在创建标签和文章' : '正在更新标签和文章信息',
    });
    // 创建tag 和 创建文章异步进行 因为此时tag和文章之间没有依赖关系
    const [tagCreate, articleCommit] = await Promise.all([
      createTags(currentTags),
      commitArticle(currentTitle, currentContent, currentCoverPageDescription),
    ]);
    setFullScreenLoading({
      loading: true,
      message: '正在关联文章和标签',
    });
    // 都完成后进行tag与文章的关联
    if (tagCreate.status && articleCommit.status) {
      const isConnected = await connectTagsAndArticle(
        articleCommit.articleID,
        tagCreate.tags,
      );
      if (isConnected) {
        message.open({
          type: 'success',
          message: `文章${actionType === ActionType.create ? '发布' : '更新'}完成`,
        });
        setFullScreenLoading({
          loading: true,
          message: '操作成功，即将跳转',
        });
        setTimeout(() => {
          setFullScreenLoading({
            loading: false,
            message: '',
          });
          setSubmitLoading(false);
          navigate('/dashboard', { replace: true });
        }, 1000);
      } else {
        message.open({
          type: 'warning',
          message: '文章操作有误',
        });
      }
    } else {
      console.error('文章上传或标签上传出现错误');
    }
    setSubmitLoading(false);
  };

  const commitArticle = async (
    currentTitle,
    currentContent,
    currentCoverPageDescription,
  ) => {
    const articleID = actionType === ActionType.create ? uuidv4() : editArticleId;
    const params: Article = {
      id: articleID,
      title: currentTitle,
      content: currentContent,
      active: 'T',
      coverPageImgURL: imgFile || undefined,
      coverPageDescription: currentCoverPageDescription,
      owner: username,
    };
    const articlePostRes = actionType === ActionType.create ?
      await dispatch(postArticle({ createArticleInput: params })) :
      await dispatch(updateArticleDetail({ updateArticleInput: params }));
    const isPosted = articlePostRes.meta.requestStatus === 'fulfilled';
    if (isPosted) {
      message.open({
        type: 'success',
        message: `文章已${actionType === ActionType.create ? '创建' : '更新'}`,
      });
    } else {
      message.open({
        type: 'warning',
        message: `文章${actionType === ActionType.create ? '创建' : '更新'}错误`,
      });
    }
    return {
      articleID,
      status: isPosted,
    };
  };

  const createTags = async (currentTags) => {
    const tagsPromises = currentTags.map((item) =>
      dispatch(
        createNewTag({
          createTagInput: {
            id: item.tagID,
            owner: username,
          },
        }),
      ),
    );
    const tagUploadRes = await Promise.all(tagsPromises);
    const isAllTagCreated = tagUploadRes.every(
      (res) => res.meta.requestStatus === 'fulfilled',
    );
    if (isAllTagCreated) {
      message.open({
        type: 'success',
        message: '标签已创建',
      });
    } else {
      message.open({
        type: 'warning',
        message: '标签创建错误',
      });
    }
    return {
      tags: tagUploadRes.map((tag) => tag.meta.arg.createTagInput.id),
      status: isAllTagCreated,
    };
  };

  const connectTagsAndArticle = async (articleID, tags) => {
    const connectTaqs = tags.map((tagID) =>
      dispatch(
        createArticleTag({
          createArticleTagInput: {
            tagID,
            articleID,
          },
        }),
      ),
    );
    const resList = await Promise.all(connectTaqs);
    return resList.every((res) => res.meta.requestStatus === 'fulfilled');
  };

  const useImgFromRecent = (item) => {
    setImgFile(item.objectCompressedURL || item.objectURL);
  };

  const addTag = (tag: string) => {
    // 判断当前的tag列表里是否有这个tag
    const find = tags.findIndex((item) => item.tagID === tag);
    if (find !== -1) {
      message.open({
        type: 'warning',
        message: `标签【${tag}】已存在`
      });
      return;
    }
    // 如果没有
    setTags((prev) => {
      prev.push({
        tagID: tag,
      });
      return [...prev];
    });
  };

  const removeTag = (tag: string) => {
    setTags((chips) => chips.filter((chip) => chip.tagID !== tag));
  };

  function MyCustomUploadAdapterPlugin (editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new CkeditorS3UploadAdapter(loader, dispatch, {
        authUser,
        targetTable: 'Article',
      });
    };
  }

  return (
    <>
      <FullScreenLoading
        message={fullScreenLoading.message}
        loading={fullScreenLoading.loading}
      />
      <Box display={'flex'} paddingX="5%" paddingY={4}>
        <Box width="70%">
          <Typography variant="h6" gutterBottom component="div">
            {actionType}
          </Typography>
          <TextField
            error={inputStatus.title}
            id="standard-textarea"
            fullWidth
            label="Title"
            multiline
            value={title}
            variant="standard"
            inputProps={{
              style: {
                fontSize: 20,
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: 18,
              },
            }}
            sx={{
              paddingBottom: 2,
            }}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => handleFocus('title')}
          />
          <TextField
            error={inputStatus.desc}
            id="standard-textarea"
            fullWidth
            label={'description & preview'}
            multiline
            rows={3}
            value={coverPageDescription}
            inputProps={{
              style: {
                fontSize: 14,
                color: '#616161'
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: 16,
              },
            }}
            sx={{
              paddingBottom: 2,
            }}
            onChange={(e) => setCoverPageDescription(e.target.value)}
            onFocus={() => handleFocus('desc')}
          />
          <Box
            height="calc(100% - 220px)"
            overflow-x="hidden"
            sx={{
              '& .ck.ck-editor__main>.ck-editor__editable': {
                backgroundColor: theme.palette.background.paper,
              },
              '& .ck.ck-toolbar': {
                backgroundColor: theme.palette.background.paper,
              },
              '& .ck-reset_all :not(.ck-reset_all-excluded *), .ck.ck-reset_all':
                {
                  color: theme.palette.text.primary,
                },
              '& .ck.ck-list': {
                backgroundColor: theme.palette.background.paper,
              },
              '& .ck.ck-list__item .ck-button:hover:not(.ck-disabled)': {
                backgroundColor: theme.palette.primary.light,
              },
              '& .ck.ck-button.ck-on, a.ck.ck-button.ck-on': {
                backgroundColor: theme.palette.background.paper,
              },
            }}
          >
            <CKEditor
              editor={Editor}
              data={content}
              config={{
                extraPlugins: [MyCustomUploadAdapterPlugin],
              }}
              onReady={(editor) => {
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
            />
          </Box>
        </Box>
        <Box
          width="30%"
          ml="30px"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <AddTags
            addTag={addTag}
            tags={tags}
            removeTag={removeTag}
          />
          <MyImageList useImgFromRecent={useImgFromRecent} />
          <Box>
            <AddCoverPic setImgFile={setImgFile} imgFile={imgFile} />
            <LoadingButton
              loading={submitLoading}
              fullWidth
              variant="contained"
              onClick={handleSubmitArticle}
              sx={{
                marginTop: '8px',
              }}
            >
              {actionType === ActionType.edit ? '更新文章' : '发布文章'}
            </LoadingButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ArticlePublish;
