"use client";
import DataList from "./DataList";
import InputForm from "./InputForm";
import NoDataBox from "./NoDataBox";
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
          <article className="fixed w-full top-0 bg-base-content h-[72px]">
            <div className="flex justify-end p-3">
              <ResetButton wrapper={wrapperSetItem} />
            </div>
    
            {/* <div className="absolute top-10 left-1/2 -translate-x-1/2">
              <ResultCard items={items} />
            </div> */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2">
              <ResultCard items={items} />
            </div>
          </article>
    
          <article className="mt-[120px] mb-3 min-h-[calc(100svh-231px)] max-w-screen-sm mx-auto">
            <div id="container" className="overflow-y-scroll">
              {items.length !== 0 ? (
                <DataList items={items} removeId={handleRemove} />
              ) : (
                <NoDataBox />
              )}
            </div>
          </article>
    
          <div className="w-full h-[100px] bg-base-content p-2">
            <InputForm formData={handleForm} />
          </div>
        </>
      );
}

export default ComPage