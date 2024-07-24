"use client";

import React, { useEffect, useState } from "react";

const inputRes = {
  id: 0,
  name: "-",
  quantity: 0,
  price: 0,
  count: 0,
  average: 0,
};

const sumResult = (data: any) => {
  const max = data.reduce(function (prev: any, current: any) {
    return prev && prev.average > current.average ? prev : current;
  });
  return max;
};

const ResultCard = ({ items }: any) => {
  const [result, setResult] = useState(inputRes);

  useEffect(() => {
    if (items.length !== 0) {
      setResult(sumResult(items));
    } else {
      setResult(inputRes);
    }
  }, [items]);

  return (
    <div className="relative bg-white rounded-md shadow-lg p-3">
      <div className="flex-grow flex gap-8 items-center justify-between min-[425px]:w-[350px] min-w-[250px]">
        <div className="text-center">
          <p className="sm:text-2xl font-medium">{result.quantity}</p>
          <p className="text-xs text-accent">Quantity</p>
        </div>
        <div className="text-center">
          <p className="sm:text-2xl font-medium">{result.price}</p>
          <p className="text-xs text-accent">Price</p>
        </div>
        <div className="text-center">
          <p className="sm:text-2xl font-medium">{result.count}</p>
          <p className="text-xs text-accent">Count</p>
        </div>
        <div className="text-center">
          <p className="sm:text-2xl font-semibold">{result.average}</p>
          <p className="text-xs text-accent">Average</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
