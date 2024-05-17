import React from "react";
import { pieChartData } from "../../data/dummy";
import { Header, Pie as PieChart } from "../../components";

export default function Pie() {
  return (
    <div className="my-6 mx-auto max-w-[1200px] bg-white p-10 rounded-3xl">
      <Header category="Pizza" title="Preços dos produtos" />
      <div className="w-full">
        <PieChart
          id="pie-chart"
          data={pieChartData}
          lengendVisibility
          height="full"
        />
      </div>
    </div>
  );
}
