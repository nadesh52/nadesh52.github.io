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
    <article className="max-w-screen-xs min-h-dvh mx-auto">
      <ResultBox {...result} />

      <section
        id="tab"
        className="bg-white border border-base rounded-md mt-5 max-w-[425px] mx-auto"
      >
        <div className="grid grid-cols-2">
          <button
            className={` 
            ${
              toggleTab === 1
                ? "border-b-2 border-opacity-100 border-secondary text-lg font-medium text-secondary"
                : "font-normal text-md text-black text-opacity-60"
            }  my-1 mx-3 py-4`}
            onClick={() => setToggleTab(1)}
          >
            <span>Saving Rate</span>
          </button>

          <button
            className={` 
            ${
              toggleTab === 2
                ? "border-b-2 border-opacity-100 border-secondary text-lg font-medium text-secondary"
                : "font-normal text-md text-black text-opacity-60"
            }  my-1 mx-3 py-4`}
            onClick={() => setToggleTab(2)}
          >
            <span>Fixed Rate</span>
          </button>
        </div>
        <div id="tab1" className={`${toggleTab === 1 ? "block" : "hidden"}`}>
          <SavingPlan total={(e: any) => setResult(e)} />
        </div>

        <div id="tab2" className={`${toggleTab === 2 ? "block" : "hidden"}`}>
          <FixedPlan total={(e: any) => setResult(e)} />
        </div>
      </section>
    </article>
  );
};

export default InterestCalcPage;
