/*
 * @Author: 李佳修
 * @Date: 2022-05-20 09:30:58
 * @LastEditTime: 2022-05-21 20:57:37
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/frontend/src/views/ArticlePublish/ArticlePublish.tsx
 */

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import Main from 'layouts/Main';
import Button from '@mui/material/Button';
import AddTags from './components/AddTags';
import AddCoverPic from './components/AddCoverPic';
// import ReactHtmlParser from 'react-html-parser';
// import demoContent from './demo';

const ArticlePublish = () => {
  const [data, setData] = useState('');

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
            variant="standard"
            inputProps={{
              style: {
                fontSize: 30
              }
            }}
            InputLabelProps={{
              style: {
                fontSize: 25
              }
            }}
            sx={{
              paddingBottom: 2,
            }}
          />
          <Box
            height='calc(100% - 71px)'
            overflow-y='auto'
            overflow-x='hidden'
          >
            <CKEditor
              editor={Editor}
              data={data}
              onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setData(data);
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
          <AddTags />
          <AddCoverPic />
          <Button
            fullWidth
            variant="contained"
          >
            发布文章
          </Button>
        </Box>
      </Box>
    </Main>
  );
};

export default ArticlePublish;
