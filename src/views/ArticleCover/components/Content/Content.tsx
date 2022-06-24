/*
 * @Author: Shen Shu
 * @Date: 2022-05-25 19:05:54
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-08 18:10:29
 * @FilePath: /uwcssa_ca/src/views/ArticleCover/components/Content/Content.tsx
 * @Description:
 *
 */

import { Avatar, Box, Divider, IconButton, Typography } from '@mui/material';

import { Article } from 'redux/article/articleSlice';
import CommentGroupButton from 'components/Comment/CommentOverview/components/CommentGroupButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import TwitterIcon from '@mui/icons-material/Twitter';
import moment from 'moment';
import { stringAvatar } from 'components/Avatar/AvatarFunction';

// import { CKEditor } from '@ckeditor/ckeditor5-react';

// import Editor from 'ckeditor5-custom-build/build/ckeditor';

/* eslint-disable react/no-unescaped-entities */

const Content = ({ article }: { article: Article }): JSX.Element => {
  // editor ready之后去掉border
  // const handleEditorReady = () => {
  //   const editor = document.querySelector('.ck-read-only');
  //   const focused = document.querySelector('.ck-focused');
  //   const line = document.querySelector('.ck-toolbar_grouping');
  //   editor.setAttribute('style', 'border: none');
  //   focused.setAttribute('style', 'border: none');
  //   line.setAttribute('style', 'display: none');
  // };
  return (
    <>
      <Box>
        <Box>
          {/* <Typography variant={'subtitle1'}>
            {article.coverPageDescription}
          </Typography> */}
          {/* 必须加className='ck-content' 否则parse出的html没有样式 */}
          {/* 大图片这里会出毛病 */}
          <Box className="ck-content">{ReactHtmlParser(article.content)}</Box>
          {/* <Box sx={{ maxWidth: '100%' }}>
            {ReactHtmlParser(article.content)}
          </Box> */}
          {/* 这个东西真难搞，靠你了 */}
          {/* <Box className="ck-content">
            <CKEditor
              config={{
                toolbar: [],
              }}
              onReady={handleEditorReady}
              editor={Editor}
              disabled={true}
              data={article.content}

              disabled={true}
            /> */}
          {/* </Box> */}
        </Box>

        <Box paddingY={4}>
          <Divider />
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          flexWrap={'wrap'}
        >
          {
            article && article.user ?
              <Box display={'flex'} alignItems={'center'}>
                <Avatar
                  style={{ width: 50, height: 50, marginRight: '1rem' }}
                  src={article.user.avatarURL?.objectThumbnailURL}
                  {...stringAvatar(article.user.name)}
                />
                <Box>
                  <Typography fontWeight={600}>{article.user.name}</Typography>
                  <Typography color={'text.secondary'}>
                    {moment(article.createdAt).format(
                      'dddd, MMMM Do YYYY, h:mm:ss a',
                    )}
                  </Typography>
                </Box>
              </Box>
              : null
          }
          
          {article.likes?.items && article.count && (
            <CommentGroupButton likes={article.likes} count={article.count} />
          )}
          <Box display={'flex'} alignItems={'center'}>
            <Typography color={'text.secondary'}>Share:</Typography>
            <Box marginLeft={0.5}>
              <IconButton aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Content;
