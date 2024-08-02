"use client";
import { useState } from "react";

const TabContainer = ({ children }: any) => {
  const [activeTab, setActiveTab] = useState(children[1].props.id);

  const handleClick = (event: any, newActiveTab: any) => {
    event.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <>
      <article>
        {children.map((child: any) => {
          if (child.props.id === activeTab) {
            return (
              <section key={child.props.id}>{child.props.children}</section>
            );
          }
          return null;
        })}
      </article>

      <section className="sticky bottom-0 bg-slate-100">
        <div className="flex justify-between">
          {children.map((child: any) => (
            <button
              key={child.props.id}
              className={`${
                activeTab === child.props.id ? "bg-slate-400 text-white" : ""
              } flex-1 select-none py-2 font-medium text-primary`}
              onClick={(e) => handleClick(e, child.props.id)}
            >
              {child.props.id}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

const Tab = ({ Children }: any) => {
  return <div id="tab-c">{Children}</div>;
};

export { TabContainer, Tab };
