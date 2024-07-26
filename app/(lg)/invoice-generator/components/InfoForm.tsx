"use client";
import React, { useState } from "react";
import Input from "./Input";

const InfoForm = ({value, onClose}:any) => {
  const [inputValue, setInputValue] = useState<any>({});

  const handleSubmit = () => {
    value(inputValue)
    onClose()
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    //   const d = new Date(value).toLocaleDateString("th-TH");
    setInputValue((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setInputValue({});
    value({})
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Invoice Info</h1>
      <div className="space-y-2">
        <p className="font-medium text-black/70">Number</p>
        <Input
          name="number"
          onChange={handleChange}
          value={inputValue?.number}
        />
      </div>
      <div className="space-y-2">
        <p className="font-medium text-black/70">Date</p>
        <input
          name="date"
          type="date"
          onChange={handleChange}
          value={inputValue?.date || ""}
          className="w-full rounded border border-black/30 p-1 outline-none focus-visible:border-secondary"
        />
      </div>
      <div className="space-y-2">
        <p className="font-medium text-black/70">Due Date</p>
        <input
          name="dueDate"
          type="date"
          onChange={handleChange}
          value={inputValue?.dueDate || ""}
          className="w-full rounded border border-black/30 p-1 outline-none focus-visible:border-secondary"
        />
      </div>
      <div className="space-y-2">
        <p className="font-medium text-black/70">Ref</p>
        <Input name="ref" onChange={handleChange} value={inputValue?.ref} />
      </div>
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

export default InfoForm;
