/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TextField } from "@mui/material";

interface DateInputProps {
  field: {
    onChange: (value: string) => void;
    value: string;
  };
  label: string;
  error?: any;
  width: string;
}

const DateInput: React.FC<DateInputProps> = ({
  field,
  label,
  error,
  width,
}) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-[#060606] mt-2 text-[16px] font-[500px] mb-2">
        {label}
      </h4>
      <TextField
        type="date"
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
        InputLabelProps={{ shrink: true }}
        error={!!error}
        helperText={error ? error.message : ""}
        variant="outlined"
        sx={{ width }}
      />
    </div>
  );
};

export default DateInput;
