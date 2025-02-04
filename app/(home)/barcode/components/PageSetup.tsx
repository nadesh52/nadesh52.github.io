"use client";
import { usePageSetupContext } from "../contexts/SetupContext";
import React from "react";

const paperList = [{
  name: 'clicklabel_e060',
  column: 5,
  row: 12,
  labelCount: 60,
  labelWidth: "38mm",
  labelHeight: "22mm",
  labelSpaceX: "5mm",
  labelSpaceY: "0.7mm",
  marginX: 4,
  marginY: 17,
  width: 200,
  height: 285,
}];

const PageSetup = () => {
  const { setPageSetup } = usePageSetupContext();

  const handleChange = (e: any) => {
    const { value } = e.target;
setPageSetup(paperList[value])
  };

  return (
    <div className="bg-base-100 p-2 shadow">
      <h4 className="text-lg font-medium">Choose Product</h4>
      <select
        defaultValue="default"
        className="select select-bordered select-sm w-full"
        onChange={handleChange}
      >
        <option disabled value="default">
          Paper Templete
        </option>
        <option value="0">Click Label E0600</option>
      </select>
    </div>
  );
};

export default PageSetup;
