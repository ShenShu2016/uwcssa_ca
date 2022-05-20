/*
 * @Author: 李佳修
 * @Date: 2022-05-20 09:30:58
 * @LastEditTime: 2022-05-20 15:03:39
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/frontend/src/views/ArticlePublish/ArticlePublish.tsx
 */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ReactHtmlParser from 'react-html-parser';
import demoContent from './demo';

const ArticlePublish = () => {
  const [data, setData] = useState(demoContent);

  return (
    <Main>
      <Box
        display={'flex'}
        justifyContent='space-between'
      >
        <div style={{ width: '45%' }}>
          <CKEditor
            editor={ Editor }
            data={data}
            onReady={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
              const data = editor.getData();
              setData(data);
              // console.log( { event, editor, data } );
              // console.log(data);
            } }
            // onBlur={ ( event, editor ) => {
            //   console.log( 'Blur.', editor );
            // } }
            // onFocus={ ( event, editor ) => {
            //   console.log( 'Focus.', editor );
            // } }
          />
        </div>
        {/* 必须加className='ck-content' 否则parse出的html没有样式 */}
        <div
          style={{ width: '45%' }}
          className='ck-content'
        >
          { ReactHtmlParser(data) }
        </div>
      </Box>
    </Main>
  );
};

export default ArticlePublish;