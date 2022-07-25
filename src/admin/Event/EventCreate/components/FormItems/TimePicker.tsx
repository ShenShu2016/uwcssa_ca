/* eslint-disable @typescript-eslint/no-explicit-any */

/*
 * @Author: 李佳修
 * @Date: 2022-06-03 17:10:14
 * @LastEditTime: 2022-07-21 23:21:38
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/components/FormItems/TimePicker.tsx
 */

import React, { useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import FieldLabel from "../FieldLabel";

interface TimePickerInfo {
  formSelectChoices?: string[];
  label?: string;
  isRequired?: boolean;
  description?: string;
  placeholder?: string;
  helperText?: string;
  [propName: string]: any;
}

interface TimePickerProp {
  item: TimePickerInfo;
}

const TimePickerItem: React.FC<TimePickerProp> = ({ item }) => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <>
      <FieldLabel
        name={item.question}
        isRequired={item.isRequired}
        description={item.description}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
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

export default TimePickerItem;
