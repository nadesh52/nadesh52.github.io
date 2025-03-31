import React from "react";

const LoadingBlock = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <span className="loading loading-spinner text-primary"></span>
      <span className="font-josefin text-2xl font-medium text-secondary">
        ...fetching pokemon
      </span>
    </div>
  );
};

export default LoadingBlock;
