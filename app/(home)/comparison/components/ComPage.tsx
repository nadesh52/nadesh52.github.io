"use client";
import DataList from "./DataList";
import InputForm from "./InputForm";
import ResetButton from "./ResetButton";
import ResultCard from "./ResultCard";
import React, { useCallback, useEffect, useState } from "react";

const ComPage = () => {
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
    <>
      <article className="fixed top-0 h-[80px] w-full bg-base-content sm:h-[72px]">
        <div className="flex justify-end p-3">
          <ResetButton wrapper={wrapperSetItem} />
        </div>
        <div className="absolute left-1/2 top-14 -translate-x-1/2 sm:top-10">
          <ResultCard items={items} />
        </div>
      </article>

      <article className="mx-auto mb-3  max-w-screen-sm pt-[106px]">
        <div id="container" className="h-[calc(100svh-185px)] py-4">
          {items.length && <DataList items={items} removeId={handleRemove} />}
        </div>
      </article>

      <div className="w-full fixed bottom-0 bg-base-content px-4 pb-4 pt-2">
        <InputForm formData={handleForm} />
      </div>
    </>
  );
};

export default ComPage;
