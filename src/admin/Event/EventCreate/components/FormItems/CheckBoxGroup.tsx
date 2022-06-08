/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: 李佳修
 * @Date: 2022-06-03 17:10:14
 * @LastEditTime: 2022-06-07 17:13:35
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/components/FormItems/CheckBoxGroup.tsx
 */
import React, { useState } from 'react';
import FieldLabel from '../FieldLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormType } from 'redux/form/formSlice';
import Checkbox from '@mui/material/Checkbox';

interface CheckBoxGroupInfo {
    formSelectChoices?: string[];
    label?: string;
    isRequired?: boolean;
    description?: string;
    placeholder?: string;
    helperText?: string;
    [propName: string]: any
}

interface CheckBoxGroupProp {
    item: CheckBoxGroupInfo;
}

const CheckBoxGroupItem: React.FC<CheckBoxGroupProp> = ({ item }) => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <FieldLabel name={item.question} isRequired={item.isRequired} description={item.description}/>
      <RadioGroup
        row={item.formType === FormType.Checkbox}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {
          item.formSelectChoices?.map(choice => (
            <FormControlLabel
              key={choice}
              value={choice}
              control={<Checkbox size='small'/>}
              label={choice}
            />
          ))
        }
      </RadioGroup>
    </>
  );
};

export default CheckBoxGroupItem;