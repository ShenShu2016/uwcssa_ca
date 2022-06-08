/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: 李佳修
 * @Date: 2022-06-03 17:10:14
 * @LastEditTime: 2022-06-07 17:13:15
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/components/FormItems/RadioGroup.tsx
 */
import React, { useState } from 'react';
import FieldLabel from '../FieldLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormType } from 'redux/form/formSlice';

interface RadioGroupInfo {
    formSelectChoices?: string[];
    label?: string;
    isRequired?: boolean;
    description?: string;
    placeholder?: string;
    helperText?: string;
    [propName: string]: any
}

interface RadioGroupProp {
    item: RadioGroupInfo;
}

const RadioGroupItem: React.FC<RadioGroupProp> = ({ item }) => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <FieldLabel name={item.question} isRequired={item.isRequired} description={item.description}/>
      <RadioGroup
        row={item.formType !== FormType.RadioGroupV }
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {
          !item.isBoolean && item.formSelectChoices?.map(choice => (
            <FormControlLabel
              key={choice}
              value={choice}
              control={<Radio size='small'/>}
              label={choice}
            />
          ))
        }
        {
          item.isBoolean ?
            <>
              <FormControlLabel
                value={true}
                control={<Radio size='small'/>}
                label={'是'}
              />
              <FormControlLabel
                value={false}
                control={<Radio size='small'/>}
                label={'否'}
              />
            </> : null
        }
      </RadioGroup>
    </>
  );
};

export default RadioGroupItem;