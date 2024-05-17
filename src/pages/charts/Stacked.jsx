import React from "react";
import { Header, Stacked as StackedChart } from "../../components";

export default function Stacked() {
  return (
    <div className="my-6 mx-auto max-w-[1200px] bg-white p-10 rounded-3xl">
      <Header category="Chart" title="Stacked" />

      <div className="w-full">
        <StackedChart />
      </div>
    </div>
  );
}
