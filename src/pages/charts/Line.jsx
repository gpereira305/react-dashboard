import React from "react";
import { Header, LineChart } from "../../components";

export default function Line() {
  return (
    <div className="my-6 mx-auto max-w-[1200px] p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Nível Inflacionário" />

      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
}
