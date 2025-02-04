"use client";
import React from "react";
import { useResultContext } from "../contexts/ResultContext";

const interestDif = (total: any, deposite: any) => {
  const res = total - deposite;
  return Number(res.toFixed(2));
};

const ResultBox = () => {
  const { result } = useResultContext();

  return (
    <section className="mt-8 w-full space-y-6 border border-primary p-4">
      <h2 className="text-2xl font-semibold">Summary</h2>
      <div className="divider"></div>
      <div className="flex flex-col">
        <div className="flex w-full items-end justify-between">
          <p className="text-primary">Initial Deposite</p>
          <p className="text-lg text-primary">{result.amount}</p>
        </div>
        <div className="flex w-full items-end justify-between">
          <p className="text-primary">Interest</p>
          <p className="text-lg text-primary">{result.interest}</p>
        </div>
        <div className="flex w-full items-end justify-between">
          <p className="text-primary">Days</p>
          <p className="text-lg text-primary">{result.day}</p>
        </div>
      </div>

      <div className="divider"></div>
      <div className="flex w-full items-end justify-between">
        <p className="text-primary">Total Value</p>
        <p className="text-3xl font-medium text-primary">{result.total}</p>
      </div>

      <div
        role="alert"
        className="flex justify-between rounded-sm bg-base-300 p-3"
      >
        <span>Interest Earned</span>
        <span>{interestDif(result.total, result.amount)}</span>
      </div>
    </section>
  );
};

export default ResultBox;
