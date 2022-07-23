/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: 李佳修
 * @Date: 2022-06-03 17:02:56
 * @LastEditTime: 2022-07-21 23:21:20
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/components/FormItems/TextFieldLong.tsx
 */

import React, { useState } from "react";

import { TextField } from "@mui/material";
import FieldLabel from "../FieldLabel";

interface TextFieldLongInfo {
  label?: string;
  isRequired?: boolean;
  description?: string;
  placeholder?: string;
  helperText?: string;
  [propName: string]: any;
}

interface TextFieldLongProp {
  item: TextFieldLongInfo;
}

const TextFieldLong: React.FC<TextFieldLongProp> = ({ item }) => {
  const [value, setValue] = useState<string>("");

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
        fullWidth
        multiline
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={4}
        size="small"
        helperText={item.helperText}
      />
    </>
  );
};

export default TextFieldLong;
