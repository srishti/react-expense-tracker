import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  console.log("[Chart] rendered");

  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // converting dataPoints (array of objects) to dataPointValues (array of numeric values)
  const totalMaximumExpense = Math.max(...dataPointValues); // totalMaximumExpense is maximum expense (=value) amongst all months

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximumExpense}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
