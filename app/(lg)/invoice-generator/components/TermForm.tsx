"use client";
import React, { useState } from "react";

const TermForm = ({ value, onClose }: any) => {
  const [inputValue, setInputValue] = useState<any>("");

  const handleSubmit = () => {
    value(inputValue);
    onClose();
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleReset = () => {
    setInputValue("");
    value("");
  };

  return (
    <div className="space-y-2">
      <h1 className="text-lg font-semibold">Term & Conditions</h1>
      <textarea
        name="term"
        autoComplete="off"
        rows={3}
        onChange={handleChange}
        value={inputValue}
        className="w-full rounded border border-black/30 p-1 outline-none transition-colors focus-visible:border-secondary"
      />
      <div className="mt-4 flex items-center justify-end gap-4">
        <button
          onClick={handleReset}
          className="w-fit rounded px-12 py-2 text-lg text-red ring-1 ring-inset ring-red transition-all hover:bg-red/70 hover:text-white hover:shadow-lg hover:ring-0"
        >
          reset
        </button>
        <button
          onClick={handleSubmit}
          className="w-fit rounded bg-green/90 px-12 py-2 text-lg text-white transition-all hover:bg-green hover:shadow-lg"
        >
          apply
        </button>
      </div>
    </div>
  );
};

export default TermForm;
