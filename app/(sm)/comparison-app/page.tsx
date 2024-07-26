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
      [],
  );

  const wrapperSetItem = useCallback(
    (value: any) => {
      setItems(value);
    },
    [setItems],
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
    <article className="relative mx-auto max-w-screen-xs">
      <div id="inner" className="h-3/4 overflow-clip bg-white shadow-md">
        <section className="relative h-24 w-full bg-accent">
          <div className="flex justify-end p-3">
            <ResetButton wrapper={wrapperSetItem} />
          </div>

          <div className="absolute left-1/2 top-[48px] flex -translate-x-1/2">
            <ResultCard items={items} />
          </div>
        </section>

        <section className="mt-9 h-auto min-h-[505px]">
          <div id="container" className="overflow-y-scroll">
            {items.length !== 0 ? (
              <DataList items={items} removeId={handleRemove} />
            ) : (
              <NoDataBox />
            )}
          </div>
        </section>
        <div className="w-full max-w-[425px]">
          <div className="w-full bg-primary px-2 pb-2 pt-1">
            <InputForm formData={handleForm} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ComparisonPage;
