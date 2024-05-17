import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  Inject,
  PieSeries,
} from "@syncfusion/ej2-react-charts";
import React from "react";

export default function Pie({ id, data, legendVisibility, height }) {
  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisibility, background: "#fff" }}
      height={height}
      tooltip={{ enable: true }}
    >
      <Inject
        services={[
          AccumulationDataLabel,
          PieSeries,
          AccumulationDataLabel,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Vendas"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="60%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="20%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: { fontWeight: "600", color: "#fff" },
          }}
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}
