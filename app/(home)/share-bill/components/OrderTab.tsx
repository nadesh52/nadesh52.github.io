"use client";
import React from "react";
import OrderCreate from "./OrderCreate";
import TotalTab from "./TotalTab";

const OrderTab = () => {
  return (
    <article className="p-4 space-y-4">
      <OrderCreate />
      <TotalTab />
    </article>
  );
};

export default OrderTab;
