import React, { useEffect, useState } from "react";

const DataList = ({ items, removeId }: any) => {
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);

  const handleRemove = (e: any) => {
    removeId(e);
  };

  useEffect(() => {
    if (items) {
      const max = items.reduce(function (prev: any, current: any) {
        return prev.average > current.average ? prev : current;
      });

      const min = items.reduce(function (prev: any, current: any) {
        return prev.average < current.average ? prev : current;
      });
      setMax(max.average);
      setMin(min.average);
    }
  }, [items, max, min]);

  return (
    <div className="min-h-[500px] mt-2">
      <p className="font-medium text-lg px-2 mb-2">Item list</p>
      <ul>
        {items.map((item: any, idx: number) => (
          <li key={idx} className="mx-4">
            <div
              className={`${
                (item.average === max &&
                  "bg-success-primary border-l-success-primary bg-opacity-10") ||
                (item.average === min &&
                  "bg-error border-l-error bg-opacity-10") ||
                "bg-white"
              } rounded-md border-l-2 p-3 shadow-md transition-all hover:shadow-md`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-center">
                  <p className="text-lg font-medium">{item.quantity}</p>
                  <p className="text-xs text-secondary">Quantity</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium">{item.count}</p>
                  <p className="text-xs text-secondary">Count</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium">{item.price}</p>
                  <p className="text-xs text-secondary">Price</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium">{item.average}</p>
                  <p className="text-xs text-secondary">Average</p>
                </div>
                <div>
                  <button
                    className="text-error p-2"
                    onClick={() => handleRemove(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
