/*
 * @Author: 李佳修
 * @Date: 2022-05-31 13:20:05
 * @LastEditTime: 2022-05-31 13:26:56
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/components/RichTextEditor/RichTextEditor.tsx
 */
import React from 'react';
import Box from '@mui/material/Box';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import CkeditorS3UploadAdapter from 'components/CkeditorS3UploadAdapter';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useTheme } from '@mui/material/styles';
import './editor.css';

interface RichTextEditorProp {
    content: string;
    setContent: (content: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProp> = ({ content, setContent }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const authUser = useAppSelector((state) => state.auth.user);

  function MyCustomUploadAdapterPlugin (editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new CkeditorS3UploadAdapter(loader, dispatch, {
        authUser,
        targetTable: 'Article',
      });
    };
  }

  return (
    <Box
      height="calc(100% - 180px)"
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
  );
};

export default RichTextEditor;