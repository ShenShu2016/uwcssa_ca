/*
 * @Author: 李佳修
 * @Date: 2022-05-20 09:30:58
 * @LastEditTime: 2022-05-23 13:57:02
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/frontend/src/views/ArticlePublish/ArticlePublish.tsx
 */

import React, { useState } from 'react';
import { createArticleTag, createNewTag } from 'redux/tag/tagSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import AddCoverPic from './components/AddCoverPic';
import AddTags from './components/AddTags';
import Box from '@mui/material/Box';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import LoadingButton from '@mui/lab/LoadingButton';
import Main from 'layouts/Main';
import MyImageList from './components/MyImageList';
import TextField from '@mui/material/TextField';
import { getOwnerUserName } from 'redux/auth/authSlice';
import { postArticle } from 'redux/article/articleSlice';
import useMessage from 'hooks/useMessage';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

// import ReactHtmlParser from 'react-html-parser';
// import demoContent from './demo';

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
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);

  const handleTagsChange = (tagList) => {
    setTags(tagList);
  };

  const handleSubmitArticle = async () => {
    setSubmitLoading(true);
    const currentTitle = title;
    const currentContent = content;
    const currentTags = tags;
    const currentCoverPageDescription = coverPageDescription;
    // 创建tag 和 创建文章异步进行 因为此时tag和文章之间没有依赖关系
    const [tagCreate, articleCreate] = await Promise.all([
      createTags(currentTags),
      createArticle(currentTitle, currentContent, currentCoverPageDescription),
    ]);
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
        setTimeout(() => {
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

  return (
    <Main>
      <Box display={'flex'} height={'80vh'}>
        <Box width="70%" height="100%">
          <TextField
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
          />
          <TextField
            id="standard-textarea"
            fullWidth
            label="coverPageDescription"
            multiline
            value={coverPageDescription}
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
            onChange={(e) => setCoverPageDescription(e.target.value)}
          />
          <Box height="calc(100% - 64px)" overflow-y="auto" overflow-x="hidden">
            <CKEditor
              editor={Editor}
              data={content}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
            />
          </Box>
          {/* 必须加className='ck-content' 否则parse出的html没有样式 */}
          {/* <div style={{ width: '45%' }} className="ck-content">
            {ReactHtmlParser(data)}
          </div> */}
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
          <MyImageList />
          <AddCoverPic imgFile={imgFile} setImgFile={setImgFile} />
          <LoadingButton
            loading={submitLoading}
            fullWidth
            variant="contained"
            onClick={handleSubmitArticle}
          >
            发布文章
          </LoadingButton>
        </Box>
      </Box>
    </Main>
  );
};

export default ArticlePublish;
