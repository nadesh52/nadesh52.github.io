"use client";
import React, { useState } from "react";
import { getDayDiff } from "@/app/(home)/interest/utils/getDayDiff";
import { interestCalculator } from "@/app/(home)/interest/utils/interestCalculator";
import SubmitButton from "./SubmitButton";
import DatePicker from "./DatePicker";
import Input from "./Input";
import { useResultContext } from "../contexts/ResultContext";

const SavingPlan = () => {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);
  const {setResult} = useResultContext();

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

    setResult(result);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
      <div>
        <Input
          label="Amount"
          type="number"
          min={0}
          required
          onChange={(e: any) => setAmount(e.target.value)}
        />
      </div>

      <div>
        <Input
          label="Interest Rate (%)"
          type="number"
          min={0}
          required
          onChange={(e: any) => setRate(e.target.value)}
        />
      </div>

      <div>
        <DatePicker
          label="Start Date"
          selectedValue={(e: any) =>
            setStartDate(new Date(e.target.value).getTime())
          }
        />
      </div>

      <div>
        <DatePicker
          label="End Date"
          selectedValue={(e: any) =>
            setEndDate(new Date(e.target.value).getTime())
          }
        />
      </div>

      <div>
        <SubmitButton />
      </div>
    </form>
  );
};

export default SavingPlan;
