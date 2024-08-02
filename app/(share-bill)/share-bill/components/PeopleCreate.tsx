"use client";
import React, { useRef, useState } from "react";
import { usePeople } from "@/context/PeopleContext";

const PeopleCreate = () => {
  const { people, setPeople } = usePeople();
  const [query, setQuery] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = (e: any) => {
    e.preventDefault();
    if (isDisable) return;

    const newP = {
      id: query,
      name: query,
    };

    setPeople((prev: any) => [...prev, newP]);
    setQuery("");
    inputRef.current?.focus();
  };

  const isDisable =
    !query?.trim() ||
    people.filter((p: any) => {
      return (
        p?.name.toLocaleLowerCase()?.trim() ===
        query?.toLocaleLowerCase()?.trim()
      );
    })?.length !== 0;

  return (
    <article className="space-y-4 p-8">
      <p className="text-lg font-medium">Create new People</p>
      <div className="flex justify-center gap-2">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value.trimStart())}
          placeholder="enter name"
          className="h-10 w-full select-none rounded border border-slate-400 bg-white px-2 outline-none focus-visible:ring-1 focus-visible:ring-slate-400"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !isDisable) {
              handleAdd(e);
            }
          }}
        />
        <button
          disabled={isDisable}
          onClick={handleAdd}
          className="disabled:bg-grey rounded bg-emerald-400 px-10 py-1 text-white disabled:cursor-not-allowed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">People</p>
        <div className="flex select-none items-center justify-end gap-2">
          <span
            className="cursor-pointer text-rose-400"
            onClick={() => {
              setPeople([]);
              inputRef.current?.focus();
            }}
          >
            Clear
          </span>
        </div>
      </div>

      {people?.length ? (
        <div className="space-y-2 divide-y">
          {people.map((p: any) => {
            return (
              <div
                key={p.id}
                className="flex w-full justify-between bg-white pt-2"
              >
                <p className="select-none">{p.name}</p>
                <button
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    setPeople(people.filter((i: any) => i.name !== p.name));
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="size-4 text-rose-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      ) : null}
    </article>
  );
};

export default PeopleCreate;
