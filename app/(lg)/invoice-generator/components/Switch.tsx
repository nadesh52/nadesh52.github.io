"use client";
import React, { useState } from "react";

const Switch = () => {
  const [percentage, setPercentage] = useState({
    tax: true,
    discount: true,
  });

  return (
    <div>
      <label
        htmlFor="check"
        className={`relative inline-block h-6 w-11 cursor-pointer rounded-md transition-all duration-700 ${
          percentage.discount ? "bg-white" : "bg-white"
        }`}
      >
        <input
          type="checkbox"
          id="check"
          onChange={() =>
            setPercentage((prev) => ({
              ...prev,
              discount: !percentage.discount,
            }))
          }
          className="peer sr-only"
        />
        <span className="absolute left-0.5 top-1/2 size-5 -translate-y-1/2 select-none rounded-md bg-base text-center leading-[16px] transition-all duration-300 ease-in-out peer-checked:left-[19px]">
          {percentage.discount ? "%" : "฿"}
        </span>
      </label>
    </div>
  );
};

export default Switch;
