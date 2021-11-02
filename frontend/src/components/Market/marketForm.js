import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import React from "react";
import { makeStyles } from "@mui/styles";

const MarketForm = ({ title, value, onChange, options, required }) => {
  const useStyles = makeStyles((theme) => ({
    menuPaper: {
      maxHeight: 100,
    },
  }));
  const classes = useStyles();

  return (
    <div className="newTopic">
      <FormControl variant="outlined" fullWidth required={required}>
        <InputLabel id="demo-simple-select-outlined-label2">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label2"
          id="demo-simple-select-outlined2"
          value={value}
          MenuProps={{ classes: { paper: classes.menuPaper } }}
          onChange={onChange}
          label={title} //title
        >
          {options.map((category) => {
            return (
              <MenuItem value={category.value} key={category.value}>
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
