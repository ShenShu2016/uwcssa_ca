/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: 李佳修
 * @Date: 2022-06-03 17:02:56
 * @LastEditTime: 2022-07-25 22:30:52
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/components/FormItems/TextFieldShort.tsx
 */

import React, { useState } from "react";

import { TextField } from "@mui/material";
import FieldLabel from "../FieldLabel";

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

function TextFieldShort({ item }: TextFieldShortProp): JSX.Element {
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
        value={value}
        onChange={(e) => setValue(e.target.value)}
        fullWidth
        size="small"
        helperText={item.helperText}
      />
    </>
  );
}

export default TextFieldShort;
