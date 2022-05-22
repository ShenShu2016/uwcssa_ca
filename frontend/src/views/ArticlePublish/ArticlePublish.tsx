/*
 * @Author: 李佳修
 * @Date: 2022-05-20 09:30:58
 * @LastEditTime: 2022-05-22 17:47:52
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/frontend/src/views/ArticlePublish/ArticlePublish.tsx
 */

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import Main from 'layouts/Main';
import LoadingButton from '@mui/lab/LoadingButton';
import AddTags from './components/AddTags';
import AddCoverPic from './components/AddCoverPic';
import { createNewTag, createArticleTag } from 'redux/tag/tagSlice';
import { postArticle } from 'redux/article/articleSlice';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { getOwnerUserName } from 'redux/auth/authSlice';
import useMessage from 'hooks/useMessage';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router';

// import ReactHtmlParser from 'react-html-parser';
// import demoContent from './demo';

interface Tag {
  tagID: string;
  label: string;
}

const ArticlePublish = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState<Array<Tag>>([]);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const username = useAppSelector(getOwnerUserName);
  const dispatch = useAppDispatch();
  const message = useMessage();
  const navigate = useNavigate();

  const handleTagsChange = (tagList) => {
    setTags(tagList);
  };

  const handleSubmitArticle = async () => {
    setSubmitLoading(true);
    const currentTitle = title;
    const currentContent = content;
    const currentTags = tags;
    // 创建tag 和 创建文章异步进行 因为此时tag和文章之间没有依赖关系
    const [tagCreate, articleCreate] = await Promise.all([
      createTags(currentTags),
      createArticle(currentTitle, currentContent)
    ]);
    // 都完成后进行tag与文章的关联
    if (tagCreate.status && articleCreate.status) {
      const isConnected = await connectTagsAndArticle(articleCreate.articleID, tagCreate.tags);
      if (isConnected) {
        message.open({
          type: 'success',
          message: '文章发布完成'
        });
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        message.open({
          type: 'warning',
          message: '文章发布有误'
        });
      }
    } else {
      console.error('文章上传或标签上传出现错误');
    }
    setSubmitLoading(false);
  };

  const createArticle = async (currentTitle, currentContent) => {
    const articleID = uuidv4();
    const articlePostRes = await dispatch(postArticle({
      createArticleInput: {
        id: articleID,
        title: currentTitle,
        content: currentContent,
        active: 'T',
        owner: username
      }
    }));
    const isPosted = articlePostRes.meta.requestStatus === 'fulfilled';
    return {
      articleID,
      status: isPosted
    };
  };

  const createTags = async (currentTags) => {
    const tagsPromises = currentTags.map((item) => dispatch(createNewTag({
      createTagInput: {
        id: item.tagID,
        owner: username
      }
    })));
    const tagUploadRes = await Promise.all(tagsPromises);
    const isAllTagCreated = tagUploadRes.every((res) => res.meta.requestStatus === 'fulfilled');
    if (isAllTagCreated) {
      message.open({
        type: 'success',
        message: '标签已创建'
      });
    } else {
      message.open({
        type: 'warning',
        message: '标签创建错误'
      });
    }
    return {
      tags: tagUploadRes.map(tag => tag.meta.arg.createTagInput.id),
      status: isAllTagCreated
    };
  };

  const connectTagsAndArticle = async (articleID, tags) => {
    const connectReqs = tags.map(tagID => dispatch(createArticleTag({
      createArticleTagInput: {
        tagID,
        articleID
      }
    })));
    const resList = await Promise.all(connectReqs);
    return resList.every(res => res.meta.requestStatus === 'fulfilled');
  };

  return (
    <Main>
      <Box display={'flex'} height={'80vh'}>
        <Box 
          width='70%'
          height='100%'
        >
          <TextField
            id="standard-textarea"
            fullWidth
            label="Title"
            multiline
            value={title}
            variant="standard"
            inputProps={{
              style: {
                fontSize: 20
              }
            }}
            InputLabelProps={{
              style: {
                fontSize: 18
              }
            }}
            sx={{
              paddingBottom: 2,
            }}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Box
            height='calc(100% - 64px)'
            overflow-y='auto'
            overflow-x='hidden'
          >
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
          width='30%'
          ml='30px'
          height='100%'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
        >
          <AddTags tagListChange={(tags) => handleTagsChange(tags)}/>
          <AddCoverPic />
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
