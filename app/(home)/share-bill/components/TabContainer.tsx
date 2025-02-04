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
    <>
      <section className="relative mx-auto min-h-[calc(100svh-56px)] max-w-screen-md">
        <div>
          {activeTab === 1 ? (
            <>
              <div className="flex h-20 w-full items-center bg-primary px-4 text-xl font-medium tracking-widest text-primary-content">
                People
              </div>
              <PeopleTab />
            </>
          ) : activeTab === 2 ? (
            <>
              <div className="flex h-20 w-full items-center bg-primary px-4 text-xl font-medium tracking-widest text-primary-content">
                Menu
              </div>
              <OrderTab />
            </>
          ) : (
            activeTab === 3 && (
              <>
                <div className="flex h-20 w-full items-center bg-primary px-4 text-xl font-medium tracking-widest text-primary-content">
                  Summary
                </div>
                <SumTab />
              </>
            )
          )}
        </div>
      </section>

      <div className="btm-nav mx-auto max-w-screen-md">
        <button
          onClick={() => setActiveTab(1)}
          className={`${activeTab === 1 ? "active bg-primary text-primary-content" : "text-pretty bg-primary-content"}`}
        >
          <UserIcon strokeWidth={1} className="size-8" />
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`${activeTab === 2 ? "active bg-primary text-primary-content" : "text-pretty bg-primary-content"}`}
        >
          <QueueListIcon strokeWidth={1} className="size-7" />
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`${activeTab === 3 ? "active bg-primary text-primary-content" : "text-pretty bg-primary-content"}`}
        >
          <BanknotesIcon strokeWidth={1} className="size-8" />
        </button>
      </div>
    </>
  );
};

export default TabContainer;
