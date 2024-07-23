"use client";
import { getDayDiff } from "@/utils/getDayDiff";
import { interestCalculator } from "@/utils/interestCalculator";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import MonthSelect from "./MonthSelect";
import DatePicker from "./DatePicker";
import Input from "./Input";

//ฝากประจำ

const getDay = (date: any, _month: any) => {
  const month = Number(_month);
  const currentMonth = new Date(date).getMonth();

  const startD = date.getTime();
  const endD = new Date(date).setMonth(currentMonth + month);

  const dayDiff = getDayDiff(startD, endD);

  return dayDiff;
};

const FixedPlan = ({ total }: any) => {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");

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

        <div>
          <Input
            label="Interest Rate (%)"
            type="number"
            min={0}
            step={0.01}
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

        <div className="col-span-2">
          <MonthSelect
            label="Select Month"
            selectedValue={(e: any) => setSelectedMonth(e.target.value)}
          />
        </div>

        <div className="col-span-2 mt-4">
          <SubmitButton />
        </div>
      </form>
    </section>
  );
};

export default FixedPlan;
