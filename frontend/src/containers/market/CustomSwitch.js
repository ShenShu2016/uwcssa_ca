import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React from "react";
import Switch from "@mui/material/Switch";

export default function CustomSwitch({ label, checked, onChange }) {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="start"
          control={
            <Switch color="primary" checked={checked} onChange={onChange} />
          }
          label={label}
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
  );
}
