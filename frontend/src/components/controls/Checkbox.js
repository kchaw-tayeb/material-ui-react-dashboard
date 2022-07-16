import React from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";

export default function Checkbox(props) {
  const { name, label, value, onChange } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl size="small">
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="default"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefEventPara(name, e.target.checked))
            }
            size="small"
          />
        }
        label={label}
      />
    </FormControl>
  );
}
