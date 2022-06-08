/* eslint-disable @typescript-eslint/no-explicit-any */

/*
 * @Author: 李佳修
 * @Date: 2022-06-03 17:10:14
 * @LastEditTime: 2022-06-07 17:11:45
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/components/FormItems/TimePicker.tsx
 */
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FieldLabel from '../FieldLabel';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

interface TimePickerInfo {
    formSelectChoices?: string[];
    label?: string;
    isRequired?: boolean;
    description?: string;
    placeholder?: string;
    helperText?: string;
    [propName: string]: any
}

interface TimePickerProp {
    item: TimePickerInfo;
}

const TimePickerItem: React.FC<TimePickerProp> = ({ item }) => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <>
      <FieldLabel name={item.question} isRequired={item.isRequired} description={item.description}/>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label={item.label}
          value={value}
          onChange={(e) => setValue(e)}
          renderInput={(params) => 
            <TextField
              {...params} 
              size='small'
              fullWidth
              helperText={item.helperText}
            />}
        /> 
      </LocalizationProvider>
    </>
  );
};

export default TimePickerItem;