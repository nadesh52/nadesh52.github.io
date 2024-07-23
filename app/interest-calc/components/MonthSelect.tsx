"use client";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";

const months = [3, 6, 12, 24, 36];

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
        className="relative border border-grey rounded-md focus:outline-none bg-white flex items-center justify-between w-full h-10 mt-3 peer"
      >
        {value !== 0 ? (
          <>
            <span className="pointer-events-none ml-3 text-secondary">
              {value} month
            </span>

            <span className="absolute left-2 -top-2.5 bg-white text-black text-opacity-30 px-1 text-sm">
              {label}
            </span>
          </>
        ) : (
          <span className="pointer-events-none ml-3 text-lg text-black text-opacity-50">
            Select Month
          </span>
        )}

        <ChevronUpDownIcon className="size-7 stroke-secondary stroke-1 pointer-events-none" />

        {!isHidden && (
          <div
            ref={menuRef}
            className="absolute left-0 top-full min-w-full w-max mt-0.5 z-50"
          >
            <ul className="bg-white p-2 rounded-lg shadow-md border border-grey text-left">
              {months.map((m: any, idx: number) => (
                <li
                  key={idx}
                  value={m}
                  onClick={handleClick}
                  className="px-4 py-2 bg-white text-secondary rounded-md hover:bg-secondary hover:text-white cursor-default select-none"
                >
                  <span className="pointer-events-none">{`${m} month`}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </button>
    </label>
  );
};

export default MonthSelect;
