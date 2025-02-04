"use client";
import { useBarcodeContext } from "../contexts/BarcodeContext";
import { usePageSetupContext } from "../contexts/SetupContext";
import React, { useEffect, useState } from "react";

const CreateForm = () => {
  const [barcodeList, setBarcodeList] = useState<any>([]);
  const { setBarcodes } = useBarcodeContext();
  const { pageSetup } = usePageSetupContext();

  const handleChange = (e: any, index: any) => {
    const { name, value } = e.target;
    const maxLength = 12;
    const newValue = name === "barcode" ? value.slice(0, maxLength) : value;

    setBarcodeList((prev: any) => {
      const newList = [...prev];
      newList[index] = {
        ...newList[index],
        [name]: newValue,
        index,
      };
      return newList;
    });
  };

  useEffect(() => {
    const generatedBarcodes = Array.from(
      { length: pageSetup.labelCount },
      (_, index) => ({
        index: index,
      }),
    );
    setBarcodeList(generatedBarcodes);
  }, [pageSetup.labelCount]);

  return (
    <div className="bg-base-100 p-2 space-y-2 shadow">
      <div className="max-h-[590px] overflow-y-scroll scrollbar-thin">
        <table className="table table-sm text-center table-pin-rows">
          <thead>
            <tr>
              <th>Label</th>
              <th>Barcode Number</th>
              <th>Product Name</th>
            </tr>
          </thead>

          <tbody>
            {pageSetup.labelCount &&
              Array.from({ length: pageSetup.labelCount }).map(
                (_, idx: any) => (
                  <tr key={idx}>
                    <th className="text-center">{idx + 1}</th>
                    <th>
                      <input
                        type="number"
                        name="barcode"
                        maxLength={12}
                        onFocus={(e) => e.target.select()}
                        className="input input-bordered h-8 w-[120px] text-sm leading-8"
                        onChange={(e) => handleChange(e, idx)}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        name="text"
                        className="input input-bordered h-8 w-full text-sm leading-8"
                        onChange={(e) => handleChange(e, idx)}
                      />
                    </th>
                  </tr>
                ),
              )}
          </tbody>
        </table>
      </div>

      <div className="flex w-full flex-col gap-2">
        <button
          onClick={() => setBarcodes(barcodeList)}
          className="btn btn-outline"
        >
          Preview
        </button>
      </div>
    </div>
  );
};

export default CreateForm;
