import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import React from "react";

const MarketForm = ({
  title,
  options,
  required = false,
  error = false,
  ...rest
}) => {
  return (
    <div className="newTopic">
      <FormControl
        variant="outlined"
        fullWidth
        required={required}
        error={error}
      >
        <InputLabel id="demo-simple-select-outlined-label2">{`${title} ${
          error ? "is required!" : ""
        }`}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label2"
          id="demo-simple-select-outlined2"
          MenuProps={{ PaperProps: { style: { maxHeight: 300 } } }}
          label={title}
          {...rest}
        >
          {options.map((category, categoryIdx) => {
            return (
              <MenuItem value={category.value} key={categoryIdx}>
                {category.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default MarketForm;
