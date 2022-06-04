/*
 * @Author: 李佳修
 * @Date: 2022-06-03 17:10:14
 * @LastEditTime: 2022-06-04 09:41:49
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/components/FormItems/Select.tsx
 */
import React from 'react';
import TextField from '@mui/material/TextField';
import FieldLabel from '../FieldLabel';
import MenuItem from '@mui/material/MenuItem';

interface SelectInfo {
    formSelectChoices?: string[];
    label?: string;
    isRequired?: boolean;
    description?: string;
    placeholder?: string;
    helperText?: string;
    [propName: string]: any
}

interface SelectProp {
    item: SelectInfo;
}

const Select: React.FC<SelectProp> = ({ item }) => {
  return (
    <>
      <FieldLabel name={item.name} isRequired={item.isRequired} description={item.description}/>
      <TextField
        label={item.label}
        select
        placeholder={item.placeholder}
        variant="outlined"
        fullWidth
        size='small'
        value={''}
        helperText={item.helperText}
      >
        {
          item.formSelectChoices?.map(choice => (
            <MenuItem value={choice} key={choice}>{choice}</MenuItem>
          ))
        }
      </TextField>
    </>
  );
};

export default Select;