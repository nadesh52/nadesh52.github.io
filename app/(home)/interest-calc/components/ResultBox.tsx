import React, { FC } from "react";

type ResultProps = {
  amount: number;
  interest: number;
  total: number;
  day: number;
};

const ResultBox: FC<ResultProps> = (result: ResultProps) => {
  return (
    <section className="bg-gradient-to-b from-40% from-secondary to-indigo-700 p-4">
      <div className="border-b border-white pb-4">
        <p className="text-white">Total Value</p>
        <span className="text-white text-5xl font-medium">{result.total}</span>
        <span className="text-white ml-4">Baht</span>
      </div>

      <div className="flex gap-4 items-center justify-evenly mt-4">
        <div className="text-center">
          <span className="text-white text-xl font-medium">
            {result.interest}
          </span>
          <p className="text-white text-sm">APR</p>
        </div>
        <div className="text-center">
          <span className="text-white text-xl font-medium">{result.day}</span>
          <p className="text-white text-sm">Days</p>
        </div>
        <div className="text-center">
          <span className="text-white text-xl font-medium">
            {result.amount}
          </span>
          <p className="text-white text-sm">Initial Deposite</p>
        </div>
      </div>
    </section>
  );
};

export default ResultBox;
