import React from "react";
import { PeopleProvider } from "@/context/PeopleContext";
import { OrderProvider } from "@/context/OrderContext";
import TabContainer from "./components/TabContainer";

const ShareBillPage = () => {
  return (
    <>
      <PeopleProvider>
        <OrderProvider>
          <TabContainer />
        </OrderProvider>
      </PeopleProvider>
    </>
  );
};

export default ShareBillPage;
