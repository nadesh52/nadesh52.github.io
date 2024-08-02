import React from "react";
import PeopleTab from "./components/PeopleTab";
import { PeopleProvider } from "@/context/PeopleContext";
import { OrderProvider } from "@/context/OrderContext";
import OrderTab from "./components/OrderTab";
import SumTab from "./components/SumTab";
import { TabContainer, Tab } from "./components/TabContainer";

const ShareBillPage = () => {
  return (
    <>
      <PeopleProvider>
        <OrderProvider>
          <TabContainer>
            <Tab id="People">
              <PeopleTab />
            </Tab>
            <Tab id="Menu">
              <OrderTab />
            </Tab>
            <Tab id="Summary">
              <SumTab />
            </Tab>
          </TabContainer>
        </OrderProvider>
      </PeopleProvider>
    </>
  );
};

export default ShareBillPage;
