import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

export default class SparkLineChart extends React.PureComponent {
  render() {
    const { id, type, height, width, data, currentColor, color } = this.props;

    return (
      <SparklineComponent
        currentColor={currentColor}
        fill={color}
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        dataSource={data}
        xName="x"
        yName="yval"
        type="Line"
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          format: "Orçamento ${x}°/mês : Despesas ${yval}%",
          trackLineSettings: {
            visible: true,
          },
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}
