"use client";
import { useOrder } from "@/context/OrderContext";
import { usePeople } from "@/context/PeopleContext";
import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";

const SumTab = () => {
  const { people } = usePeople();
  const { order } = useOrder();

  const [peopleFilter, setPeopleFilter] = useState<any>([]);
  const [paid, setPaid] = useState<any>({});

  const fp = people.map((pp: any) => {
    const filteredByPeopleName = order.filter((od: any) => {
      return od.people.find((op: any) => {
        return op.name === pp.name;
      });
    });

    const sum = filteredByPeopleName.reduce((prev: any, content: any) => {
      return prev + parseFloat(content.price_per_people);
    }, 0);

    const obj = {
      id: pp.name,
      name: pp.name,
      orders: filteredByPeopleName,
      total: sum,
    };

    return obj;
  });

  const togglePaidState = (item: any) => {
    setPaid({ ...paid, [item]: !paid[item] });
  };

  useEffect(() => {
    setPeopleFilter(fp);
  }, [people, order]);

  return (
    <article className="p-8">
      <p className="text-lg font-medium">Summary</p>
      {people.length ? (
        <ul>
          {peopleFilter.map((person: any, idx: any) => (
            <li key={person.name} className="my-4">
              {person.orders.length ? (
                <Accordion person={person}>
                  <div className="grid grid-cols-12 gap-4 rounded-b border-x-2 border-b-2 border-accent p-2">
                    <div className="col-span-5">
                      <p className="text-sm text-black/70">Orders Summary</p>
                      <table className="w-full table-fixed">
                        <tbody>
                          {person.orders.map((o: any) => (
                            <tr key={o.id}>
                              <td>{o.name}</td>
                              <td className="ml-2 text-lg font-medium">
                                {o.price_per_people}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="col-span-4">
                      <div className="items-centerr flex flex-col">
                        <p className="text-sm text-black/70">Amount Due</p>
                        <p className="text-2xl font-medium text-primary">
                          {person.total}
                        </p>
                      </div>
                    </div>

                    <div className="col-span-3 justify-self-center">
                      <button
                        onClick={() => togglePaidState(person.id)}
                        className={`w-fit cursor-pointer rounded px-4 py-2 shadow-md transition-all ${
                          paid[person.id]
                            ? "bg-emerald-400 text-white"
                            : "bg-rose-400 text-white"
                        }`}
                      >
                        {paid[person.id] ? "Paid" : "Unpaid"}
                      </button>
                    </div>
                  </div>
                </Accordion>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex select-none flex-col items-center justify-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-red size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <p className="text-red text-center text-lg">No people</p>
        </div>
      )}
    </article>
  );
};

export default SumTab;
