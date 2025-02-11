"use client";
import { useState } from "react";
import PeopleTab from "./PeopleTab";
import OrderTab from "./OrderTab";
import SumTab from "./SumTab";
import {
  UserIcon,
  QueueListIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

// const menuItems = [
//   {
//     id: 1,
//     component: <PeopleTab />,
//     icon: <UserIcon className="size-8" />,
//   },
//   {
//     id: 2,
//     component: <OrderTab />,
//     icon: <QueueListIcon className="size-8" />,
//   },
//   {
//     id: 3,
//     component: <SumTab />,
//     icon: <BanknotesIcon className="size-8" />,
//   },
// ];

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState<number>(2);

  return (
    <section>
      <div
        id="container"
        className="relative mx-auto h-[calc(100svh-42px)] max-w-screen-md"
      >
        <div>
          {activeTab === 1 ? (
            <>
              <div className="flex h-16 w-full items-center bg-primary px-4 text-xl font-medium tracking-widest text-primary-content">
                People
              </div>
              <PeopleTab />
            </>
          ) : activeTab === 2 ? (
            <>
              <div className="flex h-16 w-full items-center bg-primary px-4 text-xl font-medium tracking-widest text-primary-content">
                Menu
              </div>
              <OrderTab />
            </>
          ) : (
            activeTab === 3 && (
              <>
                <div className="flex h-16 w-full items-center bg-primary px-4 text-xl font-medium tracking-widest text-primary-content">
                  Summary
                </div>
                <SumTab />
              </>
            )
          )}
        </div>
      </div>

      <div className="justify-centerx fixed left-1/2 mx-auto flex h-14 w-full max-w-screen-md -translate-x-1/2 items-center">
        <button
          onClick={() => setActiveTab(1)}
          className={`flex h-full w-full items-center justify-center ${activeTab === 1 ? "active bg-primary text-primary-content" : "text-pretty bg-primary-content"}`}
        >
          <UserIcon strokeWidth={1} className="size-8" />
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`flex h-full w-full items-center justify-center ${activeTab === 2 ? "active bg-primary text-primary-content" : "text-pretty bg-primary-content"}`}
        >
          <QueueListIcon strokeWidth={1} className="size-8" />
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`flex h-full w-full items-center justify-center ${activeTab === 3 ? "active bg-primary text-primary-content" : "text-pretty bg-primary-content"}`}
        >
          <BanknotesIcon strokeWidth={1} className="size-8" />
        </button>
      </div>
    </section>
  );
};

export default TabContainer;
