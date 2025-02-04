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
      className="flex items-end justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <label>
        <h6 className="text-center text-sm text-white">
          Count
        </h6>

        <input
          type="number"
          name="count"
          value={inputs.count || ""}
          onChange={handleChange}
          required
          placeholder="2"
          className="input h-12 w-full text-center"
        />
      </label>

      <label>
        <h6 className="text-center text-sm text-white">
          Quantity
        </h6>

        <input
          type="number"
          name="quantity"
          value={inputs.quantity || ""}
          onChange={handleChange}
          required
          placeholder="1950"
          className="input h-12 w-full text-center"
        />
      </label>

      <label>
        <h6 className="text-center text-sm text-white">
          Price
        </h6>

        <input
          type="number"
          name="price"
          value={inputs.price || ""}
          onChange={handleChange}
          required
          placeholder="37"
          className="input h-12 w-full text-center"
        />
      </label>

      <button type="submit" className="btn">
        <p className="text-lg font-medium">Add</p>
      </button>
    </form>
  );
};

export default InputForm;
