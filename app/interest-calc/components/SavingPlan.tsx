"use client";
import { getDayDiff } from "@/utils/getDayDiff";
import { interestCalculator } from "@/utils/interestCalculator";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import DatePicker from "./DatePicker";
import Input from "./Input";

const SavingPlan = ({ total }: any) => {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const dayDiff = getDayDiff(startDate, endDate);
    const res = interestCalculator(amount, rate, dayDiff);

    const sum = Number(amount) + res;

    const result = {
      amount: Number(amount),
      interest: res,
      total: sum,
      day: dayDiff,
    };

    total(result);
  };

  return (
    <section className="bg-white rounded-lg shadow-lg py-3 px-3 w-full">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-x-5 gap-y-2"
      >
        <div className="col-span-2">
          <Input
            label="Amount"
            type="number"
            min={0}
            step={0.01}
            required
            onChange={(e: any) => setAmount(e.target.value)}
          />
        </div>

        <div className="col-span-2">
          <Input
            label="Interest Rate (%)"
            type="number"
            min={0}
            step={0.01}
            required
            onChange={(e: any) => setRate(e.target.value)}
          />
        </div>

        <div className="col-span-1">
          <DatePicker
            label="Start Date"
            selectedValue={(e: any) =>
              setStartDate(new Date(e.target.value).getTime())
            }
          />
        </div>

        <div className="col-span-1">
          <DatePicker
            label="End Date"
            selectedValue={(e: any) =>
              setEndDate(new Date(e.target.value).getTime())
            }
          />
        </div>

        <div className="col-span-2 mt-4">
          <SubmitButton />
        </div>
      </form>
    </section>
  );
};

export default SavingPlan;
