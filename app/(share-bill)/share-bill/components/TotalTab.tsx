"use client";
import React, { useEffect, useState } from "react";
import { useOrder } from "@/context/OrderContext";
import PeopleDropdown from "./PeopleDropdown";
import { Modal } from "./Modal";
import { usePeople } from "@/context/PeopleContext";

const TotalTab = () => {
  const { order, setOrder } = useOrder();
  const { people } = usePeople();
  const [editValue, setEditValue] = useState<any | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const filteredPeople = people.filter((p: any) => {
    return editValue?.people?.includes(p);
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const total = editValue.price * editValue.quantity;
    const price = total / editValue.people.length;

    const newO = {
      ...editValue,
      total: total,
      price_per_people: price,
    };

    setOrder((prevOrder: any) => {
      return prevOrder.map((o: any) => {
        if (o.id !== newO.id) return o;
        return newO;
      });
    });
  };

  const handleEdit = (event: any, order: any) => {
    event.preventDefault();

    const editOrder = {
      ...order,
    };

    setEditValue(editOrder);
  };

  const handleDelete = (event: any, _order: any) => {
    event.preventDefault();
    setOrder(order.filter((item: any) => item.id !== _order.id));
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    if (name !== "name") {
      const numValue = !isNaN(value) ? parseFloat(value) : value;
      setEditValue((prev: any) => {
        return { ...prev, [name]: numValue };
      });
    } else {
      setEditValue((prev: any) => {
        return { ...prev, [name]: value };
      });
    }
  };

  const handleCountClick = (event: any, type: any) => {
    event.preventDefault();

    if (type === "increase") {
      setEditValue({ ...editValue, quantity: editValue.quantity + 1 });
    } else if (type === "decrease" && editValue.quantity > 1) {
      setEditValue({ ...editValue, quantity: editValue.quantity - 1 });
    }
  };

  const handleSelectedPeople = (person: any, action: string) => {
    if (action === "add") {
      if (!editValue.people.includes(person.name)) {
        setEditValue({ ...editValue, people: [...editValue.people, person] });
      }
    } else if (action === "remove") {
      setEditValue({
        ...editValue,
        people: editValue.people.filter((p: any) => p.name !== person.name),
      });
    }
  };

  const handleRemovePeople = (person: any) => {
    setEditValue({
      ...editValue,
      people: editValue.people.filter((p: any) => p.name !== person.name),
    });
  };

  const isDisable = editValue?.quantity <= 1;

  const editForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-lg font-medium">Edit Menu</p>

          <label className="block">
            <p className="select-none">Menu</p>
            <input
              name="name"
              type="text"
              autoComplete="off"
              required
              value={editValue?.name || ""}
              onChange={handleChange}
              className="h-10 w-full rounded border border-slate-400 px-2 outline-none transition focus-visible:border-2 focus-visible:border-slate-600"
            />
          </label>

          <label className="relative block">
            <p className="select-none">Price</p>
            <input
              name="price"
              type="text"
              autoComplete="off"
              required
              value={editValue?.price || ""}
              onChange={handleChange}
              className="peer h-10 w-full rounded border border-slate-400 px-2 outline-none transition focus-visible:border-2 focus-visible:border-slate-600"
            />
            <p className="pointer-events-none invisible absolute bottom-2 right-1 select-none border-l border-l-slate-400 px-2 peer-valid:visible peer-focus-visible:visible">
              THB
            </p>
          </label>

          <label>
            <p className="text-black/70">Quantity</p>
            <div className="flex gap-4">
              <input
                name="quantity"
                type="number"
                autoComplete="off"
                required
                value={editValue?.quantity || ""}
                onChange={handleChange}
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

          <section>
            <p className="select-none">Add People</p>
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

          <div className="mt-4 flex flex-col gap-4">
            <button
              type="submit"
              onClick={() => setOpen(false)}
              className="h-10 w-full rounded bg-emerald-400 font-medium text-white hover:bg-emerald-600"
            >
              Save
            </button>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={(e: any) => {
                  setOpen(false);
                  handleDelete(e, editValue);
                }}
                className="h-10 w-full rounded border border-rose-400 text-rose-400 transition-all hover:border-rose-600 hover:bg-rose-600 hover:text-white"
              >
                Delete Menu
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="h-10 w-full rounded border border-slate-600 transition-all hover:bg-slate-600 hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </>
    );
  };

  useEffect(() => {    
    const updatedArr = order.map((item:any) => {

      const total = item.price * item.quantity;
      const price = total / item.people.filter((person:any) => people.some((p:any)=> p.id === person.id)).length

      return {
        ...item,
        people: item.people.filter((person:any) => people.some((p:any)=> p.id === person.id)),
        total: total,
        price_per_people: price,
      }
    })
    setOrder(updatedArr)
  }, [people]);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        {editForm()}
      </Modal>

      <p className="text-lg font-medium">Created Menu</p>
      <ul>
        {order?.length
          ? order.map((o: any, i: any) => (
              <li
                key={i}
                className="group border-b border-slate-200 bg-white py-4"
              >
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-6">
                    <p className="text-lg font-medium">{o.name}</p>

                    <p className="text-sm">x {o.quantity}</p>

                    <ul className="mt-2 flex flex-wrap items-center gap-2">
                      {o.people?.map((person: any, i: any) => (
                        <li key={i}>
                          <p className="w-fit rounded bg-slate-300 px-1">
                            {person?.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-4 flex flex-col justify-center text-right">
                    <p className="text-lg font-medium">{o.total}</p>
                    {o.people.length ? (
                      <p className="text-sm">{o.price_per_people} each</p>
                    ) : null}
                  </div>

                  <div className="col-span-2 flex flex-col items-end justify-center gap-4">
                    <button
                      onClick={(e: any) => {
                        setOpen(true);
                        handleEdit(e, o);
                      }}
                      className="w-fit rounded-full bg-teal-100 p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="pointer-events-none size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default TotalTab;
