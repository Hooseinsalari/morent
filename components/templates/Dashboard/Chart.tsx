import ReactEcharts from "echarts-for-react";

const option = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "0%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 17493, name: "Sport Car" },
        { value: 9475, name: "SUV" },
        { value: 18198, name: "Coupe" },
        { value: 12510, name: "Hatchback" },
        { value: 14406, name: "MPV" },
      ],
    },
  ],
};

const Chart = () => {
  return <ReactEcharts option={option} />;
};

export default Chart;
