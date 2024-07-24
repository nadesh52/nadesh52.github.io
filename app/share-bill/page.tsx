import React from "react";
import PeopleTab from "./components/PeopleTab";
import { PeopleProvider } from "@/context/PeopleContext";
import { OrderProvider } from "@/context/OrderContext";
import OrderTab from "./components/OrderTab";
import SumTab from "./components/SumTab";
import { TabContainer, Tab } from "./components/TabContainer";

const ShareBillPage = () => {
  return (
    <main className="max-w-screen-sm w-[425px] content-center justify-self-center p-4 mt-14 mx-auto bg-white shadow-md rounded-lg">
      <PeopleProvider>
        <OrderProvider>
          <TabContainer>
            <Tab id="Summary">
              <SumTab />
            </Tab>
            <Tab id="Menu">
              <OrderTab />
            </Tab>
            <Tab id="People">
              <PeopleTab />
            </Tab>
          </TabContainer>
        </OrderProvider>
      </PeopleProvider>
    </main>
  );
};

export default ShareBillPage;
