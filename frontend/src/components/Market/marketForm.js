import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import React from "react";
import { makeStyles } from "@mui/styles";

const MarketForm = ({
  title,
  value,
  onChange,
  options,
  required = false,
  error = false,
  disabled = false,
}) => {
  const useStyles = makeStyles((theme) => ({
    menuPaper: {
      maxHeight: 100,
    },
  }));
  const classes = useStyles();

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
          disabled={disabled}
          value={value}
          MenuProps={{ classes: { paper: classes.menuPaper } }}
          onChange={onChange}
          label={title} //title
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
