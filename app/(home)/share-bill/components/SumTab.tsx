"use client";
import { useOrder } from "@/app/(home)/share-bill/context/OrderContext";
import { usePeople } from "@/app/(home)/share-bill/context/PeopleContext";
import React, { useEffect, useState } from "react";

const SumTab = () => {
  const { people } = usePeople();
  const { order } = useOrder();
  const [peopleFilter, setPeopleFilter] = useState<any>([]);

  const fp = people.map((person: any) => {
    const filteredByPeopleName = order.filter((o: any) => {
      return o.people.find((op: any) => {
        return op.name === person.name;
      });
    });

    const sum = filteredByPeopleName.reduce((prev: any, content: any) => {
      return prev + parseFloat(content.price_per_people);
    }, 0);

    const obj = {
      id: person.name,
      name: person.name,
      orders: filteredByPeopleName,
      total: sum,
    };

    return obj;
  });

  useEffect(() => {
    setPeopleFilter(fp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [people, order]);

  return (
    <article className="p-4">
      <div className="space-y-4">
        <p className="text-lg font-medium">Charges Summary</p>

        <label className="block">
          <p className="select-none">Service Charge</p>
          <input
            type="number"
            className="input input-bordered input-primary w-full"
          />
        </label>
        <label className="block">
          <p className="select-none">Tax</p>
          <input
            type="number"
            className="input input-bordered input-primary w-full"
          />
        </label>
      </div>

      <div className="divider"></div>

      <div>
        <p className="text-lg font-medium">Summary</p>
        {people.length ? (
          <ul className="space-y-6">
            {peopleFilter.map((person: any, idx: any) => (
              <li key={idx}>
                {person.orders.length ? (
                  <div className="card w-full bg-slate-200">
                    <div className="card-body p-6">
                      <div className="flex items-end justify-between">
                        <h2 className="card-title">{person.name}</h2>
                        <div>
                          <p className="text-right leading-6">Total</p>
                          <p className="text-right text-xl font-medium leading-6">
                            {person.total}
                          </p>
                        </div>
                      </div>

                      <div className="divider my-0"></div>

                      <table>
                        <thead>
                          <tr>
                            <td className="w-8/12 text-left">Menu</td>
                            <td className="w-2/12 text-right">count</td>
                            <td className="w-2/12 text-right">Price</td>
                          </tr>
                        </thead>
                        <tbody>
                          {person.orders.map((o: any) => (
                            <tr key={o.id}>
                              <td
                                className="tooltip max-w-52 text-left"
                                data-tip={o.name}
                              >
                                <p className="truncate">{o.name}</p>
                              </td>
                              <td className="text-right">{o.quantity}</td>
                              <td className="text-right text-sm font-medium">
                                {o.price_per_people}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex select-none flex-col items-center justify-center">
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
            <p className="text-red text-center text-lg">No people</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default SumTab;
