/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { FiEye, FiEyeOff } from "react-icons/fi";

type VariantType = "outlined" | "filled" | "standard";

interface Props {
  label: string | null;
  error?: any;
  placeholder?: string;
  className?: any;
  type: "text" | "password" | "number";
  password?: boolean;
  value?: any;
  width: string;
  height: string;
  multiline: boolean;
  row: number;
  variant?: VariantType;
  hidePassword?: () => void;
  showPassword?: () => void;
  disabled: boolean;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      error,
      password,
      multiline,
      row,
      showPassword,
      type,
      variant = "outlined",
      hidePassword,
      disabled,
      placeholder,
      value,
      className,
      ...props
    },
    ref
  ) => {
    const [showPasswordState, setShowPasswordState] = useState(false);

    const handleTogglePasswordVisibility = () => {
      setShowPasswordState(!showPasswordState);
      if (showPasswordState) {
        hidePassword?.();
      } else {
        showPassword?.();
      }
    };

    return (
      <div className="flex flex-col">
        <h4 className="text-[#060606] mt-2 text-[16px] font-[500px] mb-2">
          {label}
        </h4>
        <TextField
          className={className}
          disabled={disabled}
          multiline={multiline}
          value={value}
          rows={row}
          {...props}
          placeholder={placeholder}
          sx={{ bgcolor: "#F2F2F2", borderColor: "#E8EAED" }}
          type={
            type === "password" && !showPasswordState
              ? "password"
              : type === "number"
              ? "number"
              : "text"
          }
          error={Boolean(error)}
          helperText={error ? error.message : ""}
          variant={variant}
          InputProps={{
            inputRef: ref as React.Ref<HTMLInputElement>,
            onWheel: (e) => e.target instanceof HTMLElement && e.target.blur(), // Prevents mouse scroll changing number input
            inputMode: "decimal", // Allows decimal input
            endAdornment: password ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {showPasswordState ? <FiEye /> : <FiEyeOff />}
                </IconButton>
              </InputAdornment>
            ) : undefined,
          }}
          inputProps={{
            step: "any", // Allow decimals and whole numbers
          }}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
