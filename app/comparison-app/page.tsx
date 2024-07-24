"use client";
import DataList from "./components/DataList";
import InputForm from "./components/InputForm";
import NoDataBox from "./components/NoDataBox";
import ResetButton from "./components/ResetButton";
import ResultCard from "./components/ResultCard";
import React, { useCallback, useEffect, useState } from "react";

const ComparisonPage = () => {
  const [items, setItems] = useState<any>(
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("items")!)) ||
      []
  );

  const wrapperSetItem = useCallback(
    (value: any) => {
      setItems(value);
    },
    [setItems]
  );

  const handleForm = (value: any) => {
    setItems((prev: any) => [...prev, value]);
  };

  const handleRemove = (e: any) => {
    setItems((prev: any) => prev.filter((data: any) => data.id !== e.id));
  };

  useEffect(() => {
    const data = localStorage.getItem("items");
    if (data !== null) {
      setItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <article className="relative max-w-screen-xs min-h-[calc(100svh-52px)] mx-auto">
      <div
        id="inner"
        className="bg-white absolute w-full h-svh sm:h-3/4 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-xl overflow-clip shadow-md"
      >
        <section className="bg-accent w-full h-24 relative">
          <div className="flex justify-end p-3">
            <ResetButton wrapper={wrapperSetItem} />
          </div>

          <div className="absolute top-[48px] left-1/2 -translate-x-1/2 flex">
            <ResultCard items={items} />
          </div>
        </section>

        <section className="mt-9 h-full">
          <div id="container" className="h-3/4 sm:pb-7 overflow-y-scroll">
            {items.length !== 0 ? (
              <DataList items={items} removeId={handleRemove} />
            ) : (
              <NoDataBox />
            )}
          </div>

          <div className="absolute bottom-0 w-full max-w-[425px]">
            <div className="bg-primary pt-1 pb-2 px-2 w-full">
              <InputForm formData={handleForm} />
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default ComparisonPage;
