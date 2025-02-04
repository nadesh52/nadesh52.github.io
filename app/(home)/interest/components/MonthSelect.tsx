"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const months = [3, 6, 9, 12, 24, 36];

const MonthSelect = ({ selectedValue, label }: any) => {
  const [isHidden, setIsHidden] = useState(true);
  const [value, setValue] = useState(0);

  const listRef = useRef(null);
  const menuRef = useRef(null);

  const handleClick = (e: any) => {
    e.preventDefault();

    setValue(e.target.value);
    selectedValue(e);
  };

  useEffect(() => {
    window.addEventListener("click", (e: any) => {
      if (e.target !== listRef.current) {
        setIsHidden(true);
      }
    });
  }, []);

  return (
    <label className="relative">
      <button
        ref={listRef}
        onClick={(e) => {
          e.preventDefault();
          setIsHidden(!isHidden);
        }}
        className="peer relative flex h-12 w-full items-center justify-between border border-primary bg-white px-3 focus:outline-none"
      >
        {value !== 0 ? (
          <>
            <span className="pointer-events-none">{value} month</span>

            <span className="absolute -top-2.5 left-2 bg-white px-1 text-sm text-opacity-30">
              {label}
            </span>
          </>
        ) : (
          <span className="pointer-events-none text-lg text-gray-500">
            Select Month
          </span>
        )}

        <ChevronDownIcon className="pointer-events-none size-6" />
      </button>

      {!isHidden && (
        <div
          ref={menuRef}
          className="absolute left-0 top-full z-50 mt-0.5 w-max min-w-full"
        >
          <ul className="border-grey rounded-sm border bg-white p-2 text-left shadow-md">
            {months.map((m: any, idx: number) => (
              <li
                key={idx}
                value={m}
                onClick={handleClick}
                className="cursor-default select-none rounded-sm bg-white px-4 py-2 text-primary hover:bg-primary hover:text-white"
              >
                <span className="pointer-events-none">{`${m} month`}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </label>
  );
};

export default MonthSelect;
