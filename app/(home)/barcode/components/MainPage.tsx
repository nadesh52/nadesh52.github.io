"use client";
import React, { useState, useRef } from "react";
import ItemBarcode from "./ItemBarcode";
import CreateForm from "./CreateForm";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import Label from "./Label";
import PageSetup from "./PageSetup";
import { useBarcodeContext } from "../contexts/BarcodeContext";
import { usePageSetupContext } from "../contexts/SetupContext";
import PaperLayout from "./PaperLayout";

const mergeArrays = (placeholders: any, barcodes: any) => {
  return placeholders.map((placeholder: any, idx: any) => {
    // Find if there’s a barcode at this index
    const barcodeItem = barcodes.find((item: any) => item.index === idx);

    return barcodeItem ? { ...barcodeItem, index: idx } : placeholder;
  });
};

const MainPage = () => {
  const [isCapture, setIsCapture] = useState<boolean>(false);
  const { barcodes } = useBarcodeContext();
  const { pageSetup } = usePageSetupContext();
  const a4Ref = useRef<HTMLDivElement | any>(null);
  const labelRef = useRef<HTMLDivElement | any>(null);

  const placeholders = Array(pageSetup.labelCount)
    .fill(null)
    .map((_, index) => ({ id: index }));

  const mergedArray = mergeArrays(placeholders, barcodes);

  console.log(mergedArray);

  const downloadPDF = async () => {
    setIsCapture(true);
    const targetCanvas = a4Ref.current;
    const pdf = new jsPDF({ format: "a4" });

    setTimeout(async () => {
      const canvas = await html2canvas(targetCanvas, { scale: 2 });
      const imgData = await canvas.toDataURL("image/png");
      pdf.addImage(
        imgData,
        "PNG",
        pageSetup.marginX,
        pageSetup.marginY,
        pageSetup.width,
        pageSetup.height,
      );
      pdf.save("barcode.pdf");
      setIsCapture(false);
    }, 100);
  };

  return (
    <section className="bg-base-300 p-10">
      <div className="flex flex-col items-center justify-around gap-2 xl:flex-row xl:items-start">
        <article className="flex w-full flex-col gap-2 md:w-[600px]">
          <PageSetup />
          <CreateForm />
          <button
            onClick={downloadPDF}
            className="btn btn-primary btn-lg w-full italic tracking-widest shadow-lg"
          >
            Save to PDF
          </button>
        </article>

        <div className={`h-fit w-fit bg-white px-[4mm] py-[17mm]`}>
          <div id="canvas" ref={a4Ref} className="a4">
            <PaperLayout>
              {mergedArray.map((item: any, idx: any) =>
                item.barcode ? (
                  <ItemBarcode
                    key={idx}
                    barcode={item.barcode}
                    text={item.text}
                  />
                ) : (
                  <Label
                    ref={labelRef}
                    key={idx}
                    className={`${isCapture ? "invisible" : "visible"}`}
                  >
                    {idx + 1}
                  </Label>
                ),
              )}
            </PaperLayout>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
