/* eslint-disable @typescript-eslint/no-explicit-any */

/*
 * @Author: 李佳修
 * @Date: 2022-06-03 17:10:14
 * @LastEditTime: 2022-07-21 23:20:41
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/components/FormItems/DateTimePicker.tsx
 */

import React, { useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField } from "@mui/material";
import FieldLabel from "../FieldLabel";

interface DateTimePickerInfo {
  formSelectChoices?: string[];
  label?: string;
  isRequired?: boolean;
  description?: string;
  placeholder?: string;
  helperText?: string;
  [propName: string]: any;
}

interface DateTimePickerProp {
  item: DateTimePickerInfo;
}

const DateTimePickerItem: React.FC<DateTimePickerProp> = ({ item }) => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <>
      <FieldLabel
        name={item.question}
        isRequired={item.isRequired}
        description={item.description}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label={item.label}
          value={value}
          onChange={(e) => setValue(e)}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              fullWidth
              helperText={item.helperText}
            />
          )}
        />
      </LocalizationProvider>
    </>
  );
};

export default DateTimePickerItem;
