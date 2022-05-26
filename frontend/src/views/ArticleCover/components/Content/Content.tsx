/*
 * @Author: Shen Shu
 * @Date: 2022-05-25 19:05:54
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-25 23:00:58
 * @FilePath: /uwcssa_ca/frontend/src/views/ArticleCover/components/Content/Content.tsx
 * @Description:
 *
 */

import { Article } from 'redux/article/articleSlice';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Divider from '@mui/material/Divider';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import TwitterIcon from '@mui/icons-material/Twitter';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import { stringAvatar } from 'components/Avatar/AvatarFunction';

const Content = ({ article }: { article: Article }): JSX.Element => {
  return (
    <>
      <Box>
        <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
          <Typography variant={'subtitle1'}>
            {article.coverPageDescription}
          </Typography>
          {/* 必须加className='ck-content' 否则parse出的html没有样式 */}
          {/* 大图片这里会出毛病 */}
          <Box sx={{ maxWidth: '300px' }}>
            {ReactHtmlParser(article.content)}
          </Box>
          {/* <Box sx={{ maxWidth: '100%' }}>
            {ReactHtmlParser(article.content)}
          </Box> */}
          {/* 这个东西真难搞，靠你了 */}
          <Box className="ck-content">
            <CKEditor
              config={{
                toolbar: [],
              }}
              editor={Editor}
              disabled={true}
              data={article.content}

              // disabled={true}
            />
          </Box>
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
          <Box display={'flex'} alignItems={'center'}>
            <Avatar
              style={{ width: 50, height: 50, marginRight: '1rem' }}
              src={article.user.avatarURL}
              {...stringAvatar(article.user.name.toUpperCase())}
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
