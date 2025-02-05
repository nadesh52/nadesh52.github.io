"use client";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const techList = [
  {
    id: 0,
    name: "HTML",
    image: (
      <Image
        src="/assets/logos/html.png"
        height={150}
        width={150}
        alt="hmtl"
        className="mb-2 sm:mt-2 size-[30px] sm:size-16"
      />
    ),
  },
  {
    id: 1,
    name: "CSS",
    image: (
      <Image
        src="/assets/logos/css.png"
        height={150}
        width={150}
        alt="css"
        className="mb-2 sm:mt-2 size-[30px] sm:size-16"
      />
    ),
  },
  {
    id: 2,
    name: "Javascript",
    image: (
      <Image
        src="/assets/logos/javascript.png"
        height={105}
        width={105}
        alt="javascript"
        className="mb-2 sm:mt-2 size-[30px] sm:size-16"
      />
    ),
  },
  {
    id: 3,
    name: "React",
    image: (
      <Image
        src="/assets/logos/react_logo.svg"
        height={105}
        width={105}
        alt="react"
        className="sm:mt-2 size-[30px] sm:size-16"
      />
    ),
  },
  {
    id: 4,
    name: "NextJs",
    image: (
      <Image
        src="/assets/logos/next_logo.svg"
        height={105}
        width={105}
        alt="next"
        className="mb-[7px] sm:mt-2 size-[30px] sm:size-16"
      />
    ),
  },
  {
    id: 5,
    name: "TailwindCSS",
    image: (
      <Image
        src="/assets/logos/tailwind.png"
        height={175}
        width={287}
        alt="tailwind"
        className="sm:mt-5 w-[40px] sm:w-20"
      />
    ),
  },
  {
    id: 6,
    name: "ExpressJs",
    image: (
      <Image
        src="/assets/logos/expressjs.png"
        height={150}
        width={150}
        alt="express"
        className="w-[50px] sm:mt-8 sm:w-24"
      />
    ),
  },
  {
    id: 7,
    name: "MongoDB",
    image: (
      <Image
        src="/assets/logos/mongodb.png"
        height={640}
        width={480}
        alt="mongodb"
        className="mb-[7px] sm:mt-2 w-[40px] sm:w-20"
      />
    ),
  },
  {
    id: 8,
    name: "MySQL",
    image: (
      <Image
        src="/assets/logos/mysql.svg"
        height={150}
        width={150}
        alt="mysql"
        className="size-[30px] sm:size-20"
      />
    ),
  },
  {
    id: 9,
    name: "Git",
    image: (
      <Image
        src="/assets/logos/git.png"
        height={150}
        width={150}
        alt="git"
        className="mb-[7px] sm:mt-2 size-[30px] sm:size-16"
      />
    ),
  },
];

const TechList = () => {
  const [isMaximize, setIsMaximize] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState(false);

  const oRef = useRef<any>(null);

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMaximizeClick = () => {
    setIsMaximize(!isMaximize);
    if (isMaximize === false && isOpen === false) {
      setIsOpen(true);
    }
  };

  const handleCloseClick = () => {
    oRef.current.classList.add("animate-shake");

    setTimeout(() => {
      oRef.current.classList.remove("animate-shake");
    }, 1000);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDisabled(window.innerWidth < 768);
    };

    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      ref={oRef}
      className={` ${isMaximize ? "h-full w-full" : "h-full sm:w-1/2"} mt-20 select-none shadow-lg transition-all duration-500`}
    >
      <div className="relative h-12 w-full rounded-t-md bg-type-fire-light">
        <div className="absolute left-2 top-1/2 flex h-full w-fit -translate-y-1/2 items-center gap-2">
          <Cog6ToothIcon className="size-6" />
          <h4 className="font-mono text-lg">Skills_&_Techs</h4>
        </div>
        <div className="absolute right-2 top-1/2 flex h-full -translate-y-1/2 items-center space-x-2">
          <button
            onClick={handleOpenClick}
            className="flex h-7 w-fit items-center rounded-full bg-yellow-100 px-1 hover:bg-yellow-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 256 256"
              className="size-5"
            >
              <path d="M208,134.4H48c-3.534,0-6.4-2.866-6.4-6.4s2.866-6.4,6.4-6.4h160c3.534,0,6.4,2.866,6.4,6.4S211.534,134.4,208,134.4z" />
            </svg>
          </button>

          <button
            onClick={handleMaximizeClick}
            disabled={isDisabled}
            className="flex h-7 w-fit items-center rounded-full bg-green-200 px-1 hover:bg-green-300 disabled:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
              />
            </svg>
          </button>

          <button
            onClick={handleCloseClick}
            className="flex h-7 w-fit items-center rounded-full bg-red-400 px-1.5 hover:bg-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${isOpen ? "max-h-max px-4 py-8" : "max-h-0"} w-full rounded-b-md bg-white transition-all duration-300`}
      >
        <div
          className={`${isOpen ? "scale-100 opacity-100" : "opacity-0"} ${isMaximize ? "flex-row" : "flex-col"} flex flex-wrap justify-center gap-4 transition-all duration-75`}
        >
          {techList.map((item: any) => (
            <div
              key={item.id}
              className={` ${isMaximize ? "max-h-[80px] w-[80px] flex-col sm:min-h-[120px] sm:w-[120px]" : "w-full flex-row"} flex items-center justify-between rounded bg-white p-2 shadow-md`}
            >
              <div>{item.image}</div>

              <h3 className="font-mono text-sm sm:text-lg">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechList;
