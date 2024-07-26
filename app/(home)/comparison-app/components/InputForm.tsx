"use client";
import React, { useState } from "react";

const inputInit = {
  id: 0,
  quantity: 0,
  price: 0,
  count: 1,
  average: 0,
};

const sumAvg = (qty: number, price: number, count: number) => {
  const newVal = (qty * count) / price;
  if (Number.isInteger(newVal)) {
    return newVal;
  } else {
    return newVal.toFixed(2);
  }
};

const InputForm = ({ formData }: any) => {
  const [inputs, setInputs] = useState(inputInit);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    const d = Date.now();
    const genId = d.toString().slice(-5);
    setInputs((values: any) => ({ ...values, [name]: value, id: genId }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const avgPrice = sumAvg(inputs.quantity, inputs.price, inputs.count);

    const newItem = {
      id: inputs.id,
      quantity: inputs.quantity,
      price: inputs.price,
      count: inputs.count,
      average: avgPrice,
    };

    formData(newItem);
    setInputs(inputInit);
  };

  return (
    <form
      className="flex justify-center items-end gap-2"
      onSubmit={handleSubmit}
    >
      <label>
        <p className="text-sm text-center text-white font-medium mb-0.5">
          Quantity
        </p>

        <input
          type="number"
          name="quantity"
          value={inputs.quantity || ""}
          onChange={handleChange}
          required
          placeholder="quantity"
          className="h-10 w-full text-center outline-none rounded focus-within:ring-2 focus-within:ring-accent"
        />
      </label>

      <label>
        <p className="text-sm text-center text-white font-medium mb-0.5">
          Count
        </p>

        <input
          type="number"
          name="count"
          value={inputs.count || ""}
          onChange={handleChange}
          required
          placeholder="count"
          className="h-10 w-full text-center outline-none rounded focus-within:ring-2 focus-within:ring-accent"
        />
      </label>

      <label>
        <p className="text-sm text-center text-white font-medium mb-0.5">
          Price
        </p>

        <input
          type="number"
          name="price"
          value={inputs.price || ""}
          onChange={handleChange}
          required
          placeholder="price"
          className="h-10 w-full text-center outline-none rounded focus-within:ring-2 focus-within:ring-accent"
        />
      </label>

      <label>
        <button
          type="submit"
          className="bg-accent h-14 w-16 rounded text-white"
        >
          <p className="text-lg font-medium">Add</p>
        </button>
      </label>
    </form>
  );
};

export default InputForm;
