import React, { FC } from "react";

type ResultProps = {
  amount: number;
  interest: number;
  total: number;
  day: number;
};

const ResultBox: FC<ResultProps> = (result: ResultProps) => {
  return (
    <section className="bg-gradient-to-br from-40% from-secondary to-accent border border-grey rounded-lg p-4 max-w-[425px] mx-auto shadow-md">
      <div className="border-b border-white pb-3">
        <p className="text-white">Total Value</p>
        <span className="text-white text-5xl font-medium">{result.total}</span>
        <span className="text-white ml-3">Baht</span>
      </div>

      <div className="flex gap-3 items-center justify-evenly mt-3">
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
