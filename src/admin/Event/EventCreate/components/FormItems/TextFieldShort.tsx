/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: 李佳修
 * @Date: 2022-06-03 17:02:56
 * @LastEditTime: 2022-07-21 23:21:26
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/components/FormItems/TextFieldShort.tsx
 */

import React, { useState } from 'react';

import FieldLabel from '../FieldLabel';
import { TextField } from '@mui/material';

interface TextFieldShortInfo {
  label?: string;
  isRequired?: boolean;
  description?: string;
  placeholder?: string;
  helperText?: string;
  [propName: string]: any;
}

interface TextFieldShortProp {
  item: TextFieldShortInfo;
}

const TextFieldShort: React.FC<TextFieldShortProp> = ({ item }) => {
  const [value, setValue] = useState<string>('');
  return (
    <>
      <FieldLabel
        name={item.question}
        isRequired={item.isRequired}
        description={item.description}
      />
      <TextField
        label={item.label}
        placeholder={item.placeholder}
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        fullWidth
        size="small"
        helperText={item.helperText}
      />
    </>
  );
};

export default TextFieldShort;
