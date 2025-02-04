"use client";
import React, { createContext, useContext, useState } from "react";

const BarcodeContext = createContext<any>(null);

export const useBarcodeContext = () => {
  return useContext(BarcodeContext);
};

export const BarcodeProvider = ({ children }: any) => {
  const [barcodes, setBarcodes] = useState<any>([]);

  return (
    <BarcodeContext.Provider value={{ barcodes, setBarcodes }}>
      {children}
    </BarcodeContext.Provider>
  );
};
