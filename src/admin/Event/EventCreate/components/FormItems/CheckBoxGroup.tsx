/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: 李佳修
 * @Date: 2022-06-03 17:10:14
 * @LastEditTime: 2022-07-21 23:20:16
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/components/FormItems/CheckBoxGroup.tsx
 */

import { Checkbox, FormControlLabel, RadioGroup } from "@mui/material";
import React, { useState } from "react";

import { FormType } from "redux/form/formSlice";
import FieldLabel from "../FieldLabel";

interface CheckBoxGroupInfo {
  formSelectChoices?: string[];
  label?: string;
  isRequired?: boolean;
  description?: string;
  placeholder?: string;
  helperText?: string;
  [propName: string]: any;
}

interface CheckBoxGroupProp {
  item: CheckBoxGroupInfo;
}

const CheckBoxGroupItem: React.FC<CheckBoxGroupProp> = ({ item }) => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <FieldLabel
        name={item.question}
        isRequired={item.isRequired}
        description={item.description}
      />
      <RadioGroup
        row={item.formType === FormType.Checkbox}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <FormControlLabel
          value={value}
          control={<Checkbox size="small" />}
          label={item.label}
        />
      </RadioGroup>
    </>
  );
};

export default CheckBoxGroupItem;
