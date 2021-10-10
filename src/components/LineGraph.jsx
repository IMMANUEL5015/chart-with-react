import React from "react";
import { Line as LineChart, defaults } from "react-chartjs-2";
import GraphUtils from "../utils/graph.utils";
import offLoadIcon from "../images/offloading.png";
import LoadIcon from "../images/loading.png";
import "../styles/line.css";

defaults.plugins.legend.display = false;

const LineGraph = ({ datasets }) => {
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          drawBorder: false,
        },
        ticks: {
          callback: function (value, index) {
            const data = GraphUtils.filterInValidWeightType(datasets);
            return `${value} KG - ${data[index].dispatchStopWeightChangeType}`;
          },
        },
      },
    },
  };

  const data = {
    labels: GraphUtils.getLabels(datasets),
    datasets: [
      {
        label: `KG`,
        data: GraphUtils.getDataInWeight(datasets),
        backgroundColor: "rgba(55, 70, 205, 0.1)",
        borderColor: "#192369",
        borderWidth: 3,
        fill: true,
      },
    ],
  };
  return (
    <div className="line-root">
      <div className="line-title">
        <h3>Weight Change History</h3>
        <div className="line-icon">
          <div>
            <img src={offLoadIcon} alt="Offloading" />
            <span>DROP</span>
          </div>
          <div>
            <img src={LoadIcon} alt="loading" />
            <span>RISE</span>
          </div>
        </div>
      </div>
      <LineChart data={data} height={200} width={400} options={options} />
    </div>
  );
};

export default LineGraph;
