import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ className = "", label, ...props }: InputProps) => {
  return (
    <label className="relative">
      <input
        className={`peer input input-bordered input-primary w-full ${className}`}
        {...props}
      />
      <span className="pointer-events-none absolute -top-1 left-0 ml-2 cursor-text select-none px-1 text-lg text-black text-opacity-50 transition-all peer-valid:-translate-y-8 peer-valid:text-md peer-valid:text-opacity-100 peer-focus-visible:-translate-y-9 peer-focus-visible:text-md peer-focus-visible:text-opacity-100">
        {label}
      </span>
    </label>
  );
};

export default Input;
