/*
 * @Author: 李佳修
 * @Date: 2022-06-03 17:02:56
 * @LastEditTime: 2022-06-04 09:41:53
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/components/FormItems/TextFieldLong.tsx
 */
import React from 'react';
import FieldLabel from '../FieldLabel';
import TextField from '@mui/material/TextField';

interface TextFieldLongInfo {
    label?: string;
    isRequired?: boolean;
    description?: string;
    placeholder?: string;
    helperText?: string;
    [propName: string]: any
}

interface TextFieldLongProp {
    item: TextFieldLongInfo;
}

const TextFieldLong: React.FC<TextFieldLongProp> = ({ item }) => {
  return (
    <>
      <FieldLabel name={item.name} isRequired={item.isRequired} description={item.description}/>
      <TextField
        label={item.label}
        placeholder={item.placeholder}
        variant="outlined"
        fullWidth
        multiline
        maxRows={4}
        size='small'
        value={''}
        helperText={item.helperText}
      />
    </>
  );
};

export default TextFieldLong;