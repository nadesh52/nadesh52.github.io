"use client";
import { usePeople } from "@/context/PeopleContext";
import React, { useEffect, useRef, useState } from "react";

const PeopleDropdown = ({ selectedPeople, peopleList }: any) => {
  const { people } = usePeople();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const filteredPeople = people.filter((p: any) => {
    return !peopleList?.includes(p);
  });

  const handleSelect = (event: any, person: any) => {
    event.preventDefault();
    selectedPeople(person, "add");
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== buttonRef.current) {
        if (e.target !== menuRef.current) {
          setMenuOpen(false);
        }
      }
    });
  }, []);

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen(!menuOpen);
        }}
        ref={buttonRef}
        className="peer flex h-10 w-full select-none items-center justify-between rounded border border-slate-400 bg-white px-4"
      >
        <p className="pointer-events-none">Select People</p>
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
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {menuOpen ? (
        <div
          ref={menuRef}
          className="scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200 absolute z-50 max-h-48 w-full overflow-y-scroll rounded-md bg-white p-1 shadow"
        >
          <ul>
            {filteredPeople.length ? (
              filteredPeople?.map((person: any) => (
                <li
                  key={person.id}
                  onClick={(e) => handleSelect(e, person)}
                  className="cursor-pointer select-none rounded p-1 text-primary hover:bg-accent"
                >
                  <p>{person.name}</p>
                </li>
              ))
            ) : (
              <li className="select-none text-sm text-black/40">
                <p>People list is empty</p>
              </li>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default PeopleDropdown;
