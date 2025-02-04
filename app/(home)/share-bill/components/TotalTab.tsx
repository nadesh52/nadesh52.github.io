"use client";
import React, { useEffect, useState } from "react";
import { useOrder } from "@/app/(home)/share-bill/context/OrderContext";
import PeopleSelection from "./PeopleSelection";
import { Modal } from "./Modal";
import { usePeople } from "@/app/(home)/share-bill/context/PeopleContext";

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
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-lg font-medium">Edit Menu</h3>

        <label className="block">
          <p className="select-none">Menu</p>
          <input
            name="name"
            type="text"
            autoComplete="off"
            required
            value={editValue?.name || ""}
            onChange={handleChange}
            className="input input-bordered input-primary w-full"
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
            className="peer input input-bordered input-primary w-full"
          />
          <p className="pointer-events-none invisible absolute bottom-0 right-1 select-none border-l border-l-slate-400 px-2 peer-valid:visible peer-focus-visible:visible">
            THB
          </p>
        </label>

        <label className="block">
          <p className="text-black/70">Quantity</p>
          <div className="flex gap-4">
            <input
              name="quantity"
              type="number"
              autoComplete="off"
              required
              value={editValue?.quantity || ""}
              onChange={handleChange}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
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
          <p className="select-none">People</p>
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
          {!filteredPeople.length ? (
            <>
              <p>removed</p>
              <PeopleSelection
                selectedPeople={handleSelectedPeople}
                peopleList={filteredPeople}
              />
            </>
          ) : null}
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <button
            type="submit"
            onClick={() => setOpen(false)}
            className="btn btn-success w-full"
          >
            Save
          </button>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={(e: any) => {
                setOpen(false);
                handleDelete(e, editValue);
              }}
              className="btn btn-outline btn-error w-52"
            >
              Delete Menu
            </button>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="btn btn-outline w-52"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  };

  useEffect(() => {
    const updatedArr = order.map((item: any) => {
      const total = item.price * item.quantity;
      const price =
        total /
        item.people.filter((person: any) =>
          people.some((p: any) => p.id === person.id),
        ).length;

      return {
        ...item,
        people: item.people.filter((person: any) =>
          people.some((p: any) => p.id === person.id),
        ),
        total: total,
        price_per_people: price,
      };
    });
    setOrder(updatedArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <p>
                      <span className="text-lg font-medium">{o.name}</span>
                      <span className="text-sm text-slate-400">
                        {" "}
                        x {o.quantity}
                      </span>
                    </p>

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

                  <div className="col-span-2 flex flex-col items-end justify-center">
                    <button
                      onClick={(e: any) => {
                        setOpen(true);
                        handleEdit(e, o);
                      }}
                      className="btn btn-circle btn-success"
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
