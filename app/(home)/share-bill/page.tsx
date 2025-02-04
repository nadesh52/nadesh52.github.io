import React from "react";
import { PeopleProvider } from "@/app/(home)/share-bill/context/PeopleContext";
import { OrderProvider } from "@/app/(home)/share-bill/context/OrderContext";
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
