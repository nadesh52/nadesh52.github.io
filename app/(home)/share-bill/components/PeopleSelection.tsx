"use client";

import { usePeople } from "@/app/(home)/share-bill/context/PeopleContext";
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
              className="btn btn-outline"
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
