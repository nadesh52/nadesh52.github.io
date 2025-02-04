import React from "react";

const InfoTabs = () => {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Tab 1"
      />
      <div
        role="tabpanel"
        className="tab-content rounded-box border-base-300 bg-base-100 p-6"
      >
        Tab content 1
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Tab 2"
        defaultChecked
      />
      <div
        role="tabpanel"
        className="tab-content rounded-box border-base-300 bg-base-100 p-6"
      >
        Tab content 2
      </div>
    </div>
  );
};

export default InfoTabs;
