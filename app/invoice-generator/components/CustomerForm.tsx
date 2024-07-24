"use client";
import React, { useState } from "react";
import Input from "./Input";

const initState = {
  name: "Customer Name",
  address: "Sample Address",
  tel: "012345678",
  tax: "ab1234567890",
};

const CustomerForm = ({ value, onClose }: any) => {
  const [inputValue, setInputValue] = useState<any>({});

  const handleSubmit = () => {
    if (Object.values(inputValue).length === 0) {
      value(initState);
      onClose();
      return;
    }
    value(inputValue);
    onClose();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputValue((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setInputValue({});
    value(initState);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Buyer</h1>
      <div className="space-y-2">
        <p className="font-medium text-black/70">Name</p>
        <Input name="name" onChange={handleChange} value={inputValue?.name} />
      </div>
      <div className="space-y-2">
        <p className="font-medium text-black/70">Address</p>
        <textarea
          name="address"
          autoComplete="off"
          rows={3}
          onChange={handleChange}
          value={inputValue?.address || ""}
          className="w-full rounded p-1 outline-none border border-black/30 transition-colors focus-visible:border-secondary"
        />
      </div>
      <div className="space-y-2">
        <p className="font-medium text-black/70">Tel</p>
        <Input name="tel" value={inputValue?.tel} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <p className="font-medium text-black/70">Tax No</p>
        <Input name="tax" onChange={handleChange} value={inputValue?.tax} />
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

export default CustomerForm;
