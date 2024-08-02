"use client";
import FixedPlan from "./components/FixedPlan";
import ResultBox from "./components/ResultBox";
import SavingPlan from "./components/SavingPlan";
import React, { useState } from "react";

const InterestCalcPage = () => {
  const [result, setResult] = useState({
    amount: 0,
    interest: 0,
    total: 0,
    day: 0,
  });
  const [toggleTab, setToggleTab] = useState(1);

  return (
    <article>
      <ResultBox {...result} />

      <section
        id="tab"
        className="bg-white"
      >
        <div className="grid grid-cols-2 my-4">
          <button
            className={` ${
              toggleTab === 1
                ? "border-b-2 border-secondary border-opacity-100 text-lg font-medium text-secondary bg-secondary/10"
                : "text-md font-normal text-black text-opacity-50"
            } mx-4 py-4 transition-all hover:bg-slate-100`}
            onClick={() => setToggleTab(1)}
          >
            <span>Saving Rate</span>
          </button>

          <button
            className={` ${
              toggleTab === 2
                ? "border-b-2 border-secondary border-opacity-100 text-lg font-medium text-secondary bg-secondary/10"
                : "text-md font-normal text-black text-opacity-50"
            } mx-4 py-4 transition-all hover:bg-secondary/5`}
            onClick={() => setToggleTab(2)}
          >
            <span>Fixed Rate</span>
          </button>
        </div>

        <div id="tab1" className={`${toggleTab === 1 ? "block p-4" : "hidden"}`}>
          <SavingPlan total={(e: any) => setResult(e)} />
        </div>

        <div id="tab2" className={`${toggleTab === 2 ? "block p-4" : "hidden"}`}>
          <FixedPlan total={(e: any) => setResult(e)} />
        </div>
      </section>
    </article>
  );
};

export default InterestCalcPage;
