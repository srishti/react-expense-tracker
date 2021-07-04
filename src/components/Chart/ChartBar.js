import "./ChartBar.css";

const ChartBar = (props) => {
  console.log("[ChartBar] rendered");

  let barFillHeight = "0%"; // default height of bar is "0%"
  if (props.maxValue > 0 && props.value > 0) {
    barFillHeight = `${Math.round((props.value / props.maxValue) * 100)}%`; // bar's height is relative to the maximum value (height of bar with maximum value = 100%)
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
