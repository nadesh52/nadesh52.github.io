import React from "react";

type InputProps = {
  value?: any;
  name?: string;
  type?: "text" | "number";
  required?: boolean;
  min?: number;
  step?: 0.1 | 0.01 | 0.001;
  onChange: (value: any) => void;
  label?: string;
};

const Input = ({
  name,
  type = "text",
  required = false,
  min = 0,
  step,
  value,
  label,
  onChange,
}: InputProps) => {
  return (
    <label className="relative">
      <input
        name={name}
        type={type}
        min={min}
        step={step}
        required={required}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e)}
        className="peer border border-grey rounded-md w-full h-10 px-3 mt-3 outline-none transition-all focus-visible:border-secondary text-secondary"
      />
      <span className="absolute bg-white left-0 -top-1 ml-2 px-1 text-lg text-black text-opacity-50 pointer-events-none select-none cursor-text transition-all peer-valid:text-sm peer-valid:-translate-y-4 peer-focus-visible:text-sm peer-focus-visible:-translate-y-4 peer-focus-visible:text-secondary peer-focus-visible:text-opacity-100">
        {label}
      </span>
    </label>
  );
};

export default Input;
