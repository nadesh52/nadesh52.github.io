"use client";
import React, { useState } from "react";
import PeopleSelection from "./PeopleSelection";
import { useOrder } from "@/app/(home)/share-bill/context/OrderContext";
import { usePeople } from "@/app/(home)/share-bill/context/PeopleContext";

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

    const generatedId = Math.floor(Date.now() * Math.random());

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
      people: inputs.people.filter((p: any) => p.id !== person.id),
    });
  };

  const isDisable = inputs.quantity <= 1;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-medium">Create</h2>
      <label className="block">
        <p className="select-none">Menu</p>
        <input
          name="name"
          type="text"
          autoComplete="off"
          required
          onChange={(e) => handleChange(e)}
          value={inputs.name || ""}
          className="input input-bordered input-primary w-full"
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
          className="peer input input-bordered input-primary w-full"
        />
        <p className="pointer-events-none invisible absolute bottom-0 right-1 select-none border-l border-l-slate-400 px-2 peer-valid:visible peer-focus-visible:visible">
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
            className="input input-bordered input-primary order-1 w-full"
          />
          <button
            disabled={isDisable}
            onClick={(e) => handleCountClick(e, "decrease")}
            className={`btn btn-primary order-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>

          <button
            onClick={(e) => handleCountClick(e, "increase")}
            className="btn btn-primary order-3"
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
        <p className="select-none">People in Order</p>
        <section>
          <PeopleSelection
            selectedPeople={handleSelectedPeople}
            peopleList={filteredPeople}
          />
          {filteredPeople.length ? (
            <>
              <p>Selected</p>
              <ul className="flex flex-wrap gap-2 p-2">
                {filteredPeople.map((person: any) => (
                  <li key={person.id}>
                    <button
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => handleRemovePeople(person)}
                      className="btn btn-success hover:btn-error"
                    >
                      {person.name}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </section>
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Create Order
      </button>
    </form>
  );
};

export default OrderCreate;
