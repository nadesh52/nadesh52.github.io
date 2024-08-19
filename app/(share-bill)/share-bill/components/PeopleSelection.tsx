"use client";

import { usePeople } from "@/context/PeopleContext";
import React from "react";

const PeopleSelection = ({ selectedPeople, peopleList }: any) => {
  const { people } = usePeople();

  const filteredPeople = people.filter((p: any) => {
    return !peopleList?.includes(p);
  });

  const handleSelect = (event: any, person: any) => {
    event.preventDefault();
    selectedPeople(person, "add");
  };

  return (
    <div>
      <ul className="flex flex-wrap gap-4 p-2">
        {filteredPeople?.map((person: any) => (
          <li key={person.id}>
            <button
              className="w-fit rounded border border-slate-400 bg-slate-50 p-2"
              onClick={(e) => handleSelect(e, person)}
            >
              {person.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleSelection;
