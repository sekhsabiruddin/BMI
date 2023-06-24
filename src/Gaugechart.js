import React from "react";
import GaugeChart from "react-gauge-chart";

const Gaugechart = ({ bmiper }) => {
  console.log("chart bmi is ", bmiper);
  const gaugeValue = bmiper; // Set the value for the gauge meter (between 0 and 1)

  const textStyle = {
    fontSize: "100px",
    fontWeight: "bold",
    color: "black",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={100}
        arcsLength={[0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12]}
        percent={gaugeValue}
        arcPadding={0.02}
        hideText={false}
        textColor={"black"}
        colors={[
          "#F1E709",
          "#C2BA05",
          "#1B8416",
          "#50C008",
          "#DE300B",
          "#DE300B",
          "#DE300B",
        ]}
        style={{ width: "200px", height: "150px", textAlign: "center" }}
        textStyle={textStyle} // Added textStyle prop to apply the custom text style
      />
    </div>
  );
};

export default Gaugechart;
