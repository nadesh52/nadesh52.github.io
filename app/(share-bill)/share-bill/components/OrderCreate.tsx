"use client";
import React, { useState } from "react";
import { useOrder } from "@/context/OrderContext";
import TotalTab from "./TotalTab";
import PeopleDropdown from "./PeopleDropdown";
import { usePeople } from "@/context/PeopleContext";

const inputsInit = { price: 0, quantity: 1, people: [] };

const OrderCreate = () => {
  const { setOrder } = useOrder();
  const { people } = usePeople();
  const [inputs, setInputs] = useState<any>(inputsInit);

  const filteredPeople = people.filter((p: any) => {
    return inputs?.people?.includes(p);
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    const generatedId = Math.floor(Date.now() * Math.random())

    if (name !== "name") {
      const numValue = !isNaN(value) ? parseFloat(value) : value;
      setInputs({
        ...inputs,
        id: generatedId,
        [name]: numValue,
      });
    } else {
      setInputs({
        ...inputs,
        id: generatedId,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const total = inputs.price * inputs.quantity;
    const price = total / inputs.people.length;

    const newOrder = {
      ...inputs,
      total: total,
      price_per_people: price,
    };

    setOrder((prev: any) => [...prev, newOrder]);
    setInputs(inputsInit);
  };

  const handleCountClick = (event: any, type: any) => {
    event.preventDefault();

    if (type === "increase") {
      setInputs({ ...inputs, quantity: inputs.quantity + 1 });
    } else if (type === "decrease" && inputs.quantity > 1) {
      setInputs({ ...inputs, quantity: inputs.quantity - 1 });
    }
  };

  const handleSelectedPeople = (person: any, action: string) => {
    if (action === "add") {
      if (!inputs.people.includes(person.name)) {
        setInputs({ ...inputs, people: [...inputs.people, person] });
      }
    }
  };

  const handleRemovePeople = (person: any) => {
    setInputs({
      ...inputs,
      people: inputs.people.filter((p: any) => p.name !== person.name),
    });
  };

  const isDisable = inputs.quantity <= 1;

  return (
    <div>
      <p className="text-lg font-medium">Create New Menu</p>
      <form onSubmit={handleSubmit}>
        <section className="space-y-4">
          <label className="block">
            <p className="select-none">Menu</p>
            <input
              name="name"
              type="text"
              autoComplete="off"
              required
              onChange={(e) => handleChange(e)}
              value={inputs.name || ""}
              className="h-10 w-full rounded border border-slate-400 px-2 outline-none transition focus-visible:border-2 focus-visible:border-slate-600"
            />
          </label>

          <label className="relative block">
            <p className="select-none">Price</p>
            <input
              name="price"
              type="number"
              autoComplete="off"
              required
              onChange={(e) => handleChange(e)}
              value={inputs.price || ""}
              className="peer h-10 w-full rounded border border-slate-400 px-2 outline-none transition focus-visible:border-2 focus-visible:border-slate-600"
            />
            <p className="pointer-events-none invisible absolute bottom-2 right-1 select-none border-l border-l-slate-400 px-2 peer-valid:visible peer-focus-visible:visible">
              THB
            </p>
          </label>

          <label className="block">
            <p className="select-none">Quantity</p>
            <div className="flex gap-4">
              <input
                name="quantity"
                type="number"
                autoComplete="off"
                required
                onChange={(e) => handleChange(e)}
                value={inputs.quantity || ""}
                className="order-1 h-10 w-full rounded border border-slate-400 bg-white px-2 outline-none focus-visible:border-2 focus-visible:border-slate-600"
              />
              <button
                disabled={isDisable}
                onClick={(e) => handleCountClick(e, "decrease")}
                className={`order-2 rounded px-2 transition-all ${
                  isDisable ? "bg-slate-200 text-slate-400" : "bg-emerald-400"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </button>

              <button
                onClick={(e) => handleCountClick(e, "increase")}
                className="order-3 rounded bg-emerald-400 px-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </label>

          <div>
            <p className="select-none">Add People</p>
            <section>
              <PeopleDropdown
                selectedPeople={handleSelectedPeople}
                peopleList={filteredPeople}
              />

              <ul className="flex flex-wrap gap-2 p-2">
                {filteredPeople.map((person: any) => (
                  <li key={person.id}>
                    <button
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => handleRemovePeople(person)}
                      className="w-fit rounded-full border border-slate-400 p-2"
                    >
                      {person.name}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>

        <button
          type="submit"
          className="h-10 w-full rounded bg-emerald-400 font-medium text-white"
        >
          Create Order
        </button>
      </form>
    </div>
  );
};

export default OrderCreate;
