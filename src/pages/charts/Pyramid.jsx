import React from "react";
import { Header } from "../../components";
import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationSelection,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  Inject,
  PyramidSeries,
} from "@syncfusion/ej2-react-charts";
import { PyramidData } from "../../data/dummy";

export default function Pyramid() {
  return (
    <div className="my-6 mx-auto max-w-[1200px] bg-white p-10 rounded-3xl">
      <Header
        category="Pyramid"
        title="Nível compárative de preço de alimento"
      />

      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={{ background: "#fff" }}
          tooltip={{ enable: true }}
        >
          <Inject
            services={[
              AccumulationDataLabel,
              PyramidSeries,
              AccumulationTooltip,
              AccumulationLegend,
              AccumulationSelection,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: "Drop", fill: "red" }}
              dataLabel={{ visible: true, position: "Inside", name: "text" }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
}
