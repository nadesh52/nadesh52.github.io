"use client";
import React, { useState } from "react";

const DatePicker = ({ selectedValue, label = "Select Date" }: any) => {
  const [type, setType] = useState("text");
  return (
    <label className="relative">
      <input
        type={type}
        autoComplete="off"
        required
        onChange={(e) => selectedValue(e)}
        onFocus={() => setType("date")}
        onBlur={() => setType("text")}
        className="peer h-12 w-full border border-primary bg-white px-3 text-secondary outline-none"
      />
      <span className="pointer-events-none absolute -top-1 left-0 ml-2 select-none bg-white px-1 text-lg text-black text-opacity-50 transition-all peer-valid:-translate-y-5 peer-valid:text-sm peer-focus-visible:-translate-y-5 peer-focus-visible:text-sm peer-focus-visible:text-opacity-100">
        {label}
      </span>
    </label>
  );
};

export default DatePicker;
