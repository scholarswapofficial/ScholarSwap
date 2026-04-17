"use client";

import "./LibTabs.scss";
import { LIB_TABS } from "@/constant/library/library";

type Props = {
  activeTab: string;
  setActiveTab: (val: string) => void;
};

const LibTabs = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div className="lib-tabs">
      {LIB_TABS.map((tab) => (
        <button
          key={tab}
          className={`lib-tabs__item ${
            activeTab === tab ? "lib-tabs__item--active" : ""
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default LibTabs;