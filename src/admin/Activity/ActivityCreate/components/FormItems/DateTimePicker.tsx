
/*
 * @Author: 李佳修
 * @Date: 2022-06-03 17:10:14
 * @LastEditTime: 2022-06-04 10:40:45
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/components/FormItems/DateTimePicker.tsx
 */
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FieldLabel from '../FieldLabel';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

interface DateTimePickerInfo {
    formSelectChoices?: string[];
    label?: string;
    isRequired?: boolean;
    description?: string;
    placeholder?: string;
    helperText?: string;
    [propName: string]: any
}

interface DateTimePickerProp {
    item: DateTimePickerInfo;
}

const DateTimePickerItem: React.FC<DateTimePickerProp> = ({ item }) => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <>
      <FieldLabel name={item.name} isRequired={item.isRequired} description={item.description}/>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
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

export default DateTimePickerItem;