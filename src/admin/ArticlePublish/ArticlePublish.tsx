/*
 * @Author: 李佳修
 * @Date: 2022-05-20 09:30:58
 * @LastEditTime: 2022-05-29 13:27:58
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/ArticlePublish/ArticlePublish.tsx
 */

import './editor.css';

import React, { useState } from 'react';
import { createArticleTag, createNewTag } from 'redux/tag/tagSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import AddCoverPic from './components/AddCoverPic';
import AddTags from './components/AddTags';
import { AdminLayout } from 'layouts';
import Box from '@mui/material/Box';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import LoadingButton from '@mui/lab/LoadingButton';
import MyImageList from './components/MyImageList';
import TextField from '@mui/material/TextField';
import { getOwnerUserName } from 'redux/auth/authSlice';
import { postArticle } from 'redux/article/articleSlice';
import useMessage from 'hooks/useMessage';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import FullScreenLoading from 'components/FullScreenLoading';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Image from '@ckeditor/ckeditor5-image/src/image';
interface Tag {
  tagID: string;
}


const ArticlePublish = () => {
  const dispatch = useAppDispatch();
  const message = useMessage();
  const navigate = useNavigate();
  const username = useAppSelector(getOwnerUserName);

  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [coverPageDescription, setCoverPageDescription] = useState<string>('');
  const [tags, setTags] = useState<Array<Tag>>([]);
  const [imgFile, setImgFile] = useState('');
  const [inputStatus, setInputStatus] = useState({
    title: false,
    desc: false
  });
  const [fullScreenLoading, setFullScreenLoading] = useState({
    loading: false,
    message: ''
  });
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);

  const handleTagsChange = (tagList) => {
    setTags(tagList);
  };

  const handleFocus = (key) => {
    setInputStatus((prev) => ({
      ...prev,
      [key]: false
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
        desc: !coverPageDescription
      }));
      setSubmitLoading(false);
      message.open({
        type: 'error',
        message: !content ? '请填写文章内容' : '文章信息不全，无法发布'
      });
      return;
    }
    setFullScreenLoading({
      loading: true,
      message: '正在创建标签和文章'
    });
    // 创建tag 和 创建文章异步进行 因为此时tag和文章之间没有依赖关系
    const [tagCreate, articleCreate] = await Promise.all([
      createTags(currentTags),
      createArticle(currentTitle, currentContent, currentCoverPageDescription),
    ]);
    setFullScreenLoading({
      loading: true,
      message: '正在关联文章和标签'
    });
    // 都完成后进行tag与文章的关联
    if (tagCreate.status && articleCreate.status) {
      const isConnected = await connectTagsAndArticle(
        articleCreate.articleID,
        tagCreate.tags,
      );
      if (isConnected) {
        message.open({
          type: 'success',
          message: '文章发布完成',
        });
        setFullScreenLoading({
          loading: true,
          message: '发布完成，即将跳转'
        });
        setTimeout(() => {
          setFullScreenLoading({
            loading: false,
            message: ''
          });
          setSubmitLoading(false);
          navigate('/dashboard', { replace: true });
        }, 1000);
      } else {
        message.open({
          type: 'warning',
          message: '文章发布有误',
        });
      }
    } else {
      console.error('文章上传或标签上传出现错误');
    }
    setSubmitLoading(false);
  };

  const createArticle = async (
    currentTitle,
    currentContent,
    currentCoverPageDescription,
  ) => {
    const articleID = uuidv4();
    const articlePostRes = await dispatch(
      postArticle({
        createArticleInput: {
          id: articleID,
          title: currentTitle,
          content: currentContent,
          active: 'T',
          coverPageImgURL: imgFile || undefined,
          coverPageDescription: currentCoverPageDescription,
          owner: username,
        },
      }),
    );
    const isPosted = articlePostRes.meta.requestStatus === 'fulfilled';
    if (isPosted) {
      message.open({
        type: 'success',
        message: '文章已创建',
      });
    } else {
      message.open({
        type: 'warning',
        message: '文章创建错误',
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

  return (
    <AdminLayout>
      <FullScreenLoading
        message={fullScreenLoading.message}
        loading={fullScreenLoading.loading}
      />
      <Box display={'flex'} paddingX="5%">
        <Box width="70%">
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
                fontSize: 20,
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
          <Box height="calc(100% - 180px)" overflow-x="hidden">
            <CKEditor
              editor={Editor}
              data={content}
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
          <AddTags tagListChange={(tags) => handleTagsChange(tags)} />
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
              发布文章
            </LoadingButton>
          </Box>
        </Box>
      </Box>
    </AdminLayout>
  );
};


export default ArticlePublish;
