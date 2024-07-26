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
        className="bg-white border border-grey rounded-md h-10 w-full mt-3 px-3 outline-none focus-visible:border-secondary text-secondary peer"
      />
      <span className="absolute bg-white left-0 -top-1 ml-2 px-1 text-black text-lg text-opacity-50 transition-all pointer-events-none select-none peer-valid:text-sm peer-valid:-translate-y-4 peer-focus-visible:text-sm peer-focus-visible:-translate-y-4 peer-focus-visible:text-secondary peer-focus-visible:text-opacity-100">
        {label}
      </span>
    </label>
  );
};

export default DatePicker;
