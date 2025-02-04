import React from "react";

const NoDataBox = () => {
  return (
    <div className="flex justify-center items-center h-[505px]">
      <div className="border-primary border-dashed border-2 p-10">
        <span className="text-center text-lg italic select-none">No data to show</span>
      </div>
    </div>
  );
};

export default NoDataBox;
