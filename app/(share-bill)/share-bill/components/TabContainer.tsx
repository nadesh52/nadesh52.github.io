"use client";
import { useState } from "react";
import PeopleTab from "./PeopleTab";
import OrderTab from "./OrderTab";
import SumTab from "./SumTab";
import {
  UserIcon,
  DocumentCurrencyDollarIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

const menuItems = [
  {
    id: 1,
    component: <PeopleTab />,
    icon: <UserIcon className="size-8" />,
  },
  {
    id: 2,
    component: <OrderTab />,
    icon: <DocumentCurrencyDollarIcon className="size-8" />,
  },
  {
    id: 3,
    component: <SumTab />,
    icon: <BanknotesIcon className="size-8" />,
  },
];

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState(menuItems[1].id);

  const handleClick = (event: any, newActiveTab: any) => {
    event.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <>
      <section className="relative min-h-[calc(100svh-101px)]">
        {menuItems.map((item: any) => {
          if (item.id === activeTab) {
            return <section key={item.id}>{item.component}</section>;
          }
          return null;
        })}
      </section>

      <section className="sticky bottom-0 bg-indigo-400">
        <div className="flex h-14 items-center justify-between divide-x">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => handleClick(e, item.id)}
              className={`${
                activeTab === item.id
                  ? "text-white"
                  : "text-black hover:text-white"
              } flex w-full select-none justify-center`}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default TabContainer
