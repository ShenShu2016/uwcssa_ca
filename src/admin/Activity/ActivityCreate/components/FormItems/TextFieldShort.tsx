/*
 * @Author: 李佳修
 * @Date: 2022-06-03 17:02:56
 * @LastEditTime: 2022-06-03 17:09:45
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/components/FormItems/TextFieldShort.tsx
 */
import React from 'react';
import FieldLabel from '../FieldLabel';
import TextField from '@mui/material/TextField';

interface TextFieldShortInfo {
    label?: string;
    isRequired?: boolean;
    description?: string;
    placeholder?: string;
    helperText?: string;
    [propName: string]: any
}

interface TextFieldShortProp {
    item: TextFieldShortInfo;
}

const TextFieldShort: React.FC<TextFieldShortProp> = ({ item }) => {
  return (
    <>
      <FieldLabel name={item.label} isRequired={item.isRequired} description={item.description}/>
      <TextField
        label={item.label}
        placeholder={item.placeholder}
        variant="outlined"
        fullWidth
        size='small'
        value={''}
        helperText={item.helperText}
      />
    </>
  );
};

export default TextFieldShort;