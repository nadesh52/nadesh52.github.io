"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

export const PeopleContext = createContext<any | undefined>(undefined);

export const PeopleProvider = ({ children }: { children: ReactNode }) => {
  const [people, setPeople] = useState<any[]>([]);
  return (
    <PeopleContext.Provider value={{ people, setPeople }}>
      {children}
    </PeopleContext.Provider>
  );
};

export const usePeople = () => {
  const context = useContext(PeopleContext);

  if (!context) {
    console.log("no usePeople");
  }

  return context;
};
