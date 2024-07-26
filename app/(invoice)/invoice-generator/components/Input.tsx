"use client";
import React, { useState } from "react";

const Input = ({ name, value = "", onChange }: any) => {

  return (
    <input
      autoComplete="off"
      type="text"
      name={name}
      onChange={onChange}
      value={value}
      className="bg-white rounded w-full outline-none p-1 border border-black/30 transition-all focus-visible:border-secondary"
    />
  );
};

export default Input;
