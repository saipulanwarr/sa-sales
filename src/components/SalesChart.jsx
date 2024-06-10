/* eslint-disable react/prop-types */
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const SalesChart = ({ line, bar }) => {
  return (
    <div className="row">
      <div className="col">
        <LineChart line={line} />
      </div>
      <div className="col">
        <BarChart bar={bar} />
      </div>
    </div>
  );
};

export default SalesChart;
