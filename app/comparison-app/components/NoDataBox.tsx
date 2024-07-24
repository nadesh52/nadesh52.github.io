import React from "react";

const NoDataBox = () => {
  return (
    <div className="flex justify-center items-center h-[500px] mt-2">
      <div className="border border-secondary border-dashed rounded-md p-10">
        <span className="text-center text-lg font-medium">No data to show</span>
      </div>
    </div>
  );
};

export default NoDataBox;
