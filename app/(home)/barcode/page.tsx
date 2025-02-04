import React from "react";
import { BarcodeProvider } from "./contexts/BarcodeContext";
import { PageSetupProvider } from "./contexts/SetupContext";
import "@/styles/barcode.css";
import MainPage from "./components/MainPage";

const BarcodePage = () => {
  return (
    <>
      <PageSetupProvider>
        <BarcodeProvider>
          <MainPage />
        </BarcodeProvider>
      </PageSetupProvider>
    </>
  );
};

export default BarcodePage;
