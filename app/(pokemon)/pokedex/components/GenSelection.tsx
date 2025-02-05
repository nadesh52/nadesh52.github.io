"use client";
import { Generation, generations } from "@/app/(pokemon)/types/Generation";
import { capitalize } from "@/app/(home)/interest/utils/capitalize";
import { useEffect, useRef, useState } from "react";

const GenSelection = ({ selectedGen }: any) => {
  const [isHidden, setIsHidden] = useState(true);

  const listRef = useRef(null);
  const menuRef = useRef(null);

  const handleClick = (event: any, gen: any) => {
    event.preventDefault();
    selectedGen(gen);
  };

  useEffect(() => {
    const handleClick = (e: any) => {
      if (e.target !== listRef.current || e.target === menuRef.current) {
        setIsHidden(true);
      }
    };
    window.addEventListener("click", handleClick);
  
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="relative flex justify-center">
      <button
        ref={listRef}
        onClick={() => setIsHidden(!isHidden)}
        className="h-10 rounded-md bg-white shadow-md hover:shadow-lg"
      >
        <div className="pointer-events-none flex items-center px-2 justify-between">
          <p className="font-josefin select-none text-lg font-medium">
            Select Generation
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </div>
      </button>

      {!isHidden && (
        <div
          ref={menuRef}
          className="bg-white absolute top-full z-50 rounded-lg"
        >
          <ul className="p-2 text-left shadow-md w-fit">
            {generations.map((gen: Generation, idx: number) => (
              <li
                key={idx}
                className="bg-white text-skin-type hover:bg-skin-fill hover:text-skin-base cursor-pointer select-none rounded-md p-2"
                onClick={(e: any) => handleClick(e, gen)}
              >
                <p className="pointer-events-none">
                  {capitalize(gen.region)} ({capitalize(gen.name)})
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GenSelection;
