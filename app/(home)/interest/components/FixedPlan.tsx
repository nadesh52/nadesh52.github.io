"use client";
import { getDayDiff } from "@/app/(home)/interest/utils/getDayDiff";
import { interestCalculator } from "@/app/(home)/interest/utils/interestCalculator";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import MonthSelect from "./MonthSelect";
import DatePicker from "./DatePicker";
import Input from "./Input";
import { useResultContext } from "../contexts/ResultContext";

//ฝากประจำ

const getDay = (date: any, _month: any) => {
  const month = Number(_month);
  const currentMonth = new Date(date).getMonth();

  const startD = date.getTime();
  const endD = new Date(date).setMonth(currentMonth + month);

  const dayDiff = getDayDiff(startD, endD);

  return dayDiff;
};

const FixedPlan = () => {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const { setResult } = useResultContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const days = getDay(new Date(selectedDate), selectedMonth);

    const res = interestCalculator(amount, rate, days);

    const sum = Number(amount) + res;

    const result = {
      amount: Number(amount),
      interest: res,
      total: sum,
      day: days,
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
          selectedValue={(e: any) => setSelectedDate(e.target.value)}
        />
      </div>

      <div>
        <MonthSelect
          label="Select Month"
          selectedValue={(e: any) => setSelectedMonth(e.target.value)}
        />
      </div>

      <div>
        <SubmitButton />
      </div>
    </form>
  );
};

export default FixedPlan;
