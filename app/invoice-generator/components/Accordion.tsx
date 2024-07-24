"use client";
import React, { useState } from "react";

type OrderListType = {
  title?: string;
  children: React.ReactNode;
};

const Accordion = ({ children, title = "" }: OrderListType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full select-none justify-between gap-2 rounded bg-grey px-2 py-1`}
      >
        <span className="font-medium">{title}</span>
        <div className={`${isOpen ? "rotate-180" : "rotate-0"} duration-300`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className='overflow-hidden p-2'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
