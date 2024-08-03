import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const ApexChart = () => {
  const data = useSelector((store) => store.server.chartData);
  const dark = useSelector((store) => store.server.dark);
  if (!data) return;

  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: data?.map((data) => data * 2),
        labels: {
          style: {
            // fontSize: "14px",
            colors: dark ? "white" : "black",
            // backgroundColor: "#ff0000",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            // fontSize: "14px",
            colors: dark ? "white" : "black",
            // backgroundColor: "#ff0000",
          },
        },
      },
      dataLabels: {
        style: {
          colors: ["black", "maroon"],
        },
      },
      legend: {
        show: true,
        labels: {
          colors: [dark ? "white" : "black", dark ? "white" : "black"],
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: data?.map((data) => data * 3),
      },
      {
        name: "series-2",
        data: data?.map((data) => data),
      },
    ],
  };

  const state2 = {
    options: {
      labels: ["Hindi", "English", "Math", "Science", "Social Science"],
    },
    series: {
      marks: data,
    },
  };

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2  gap-3`}>
        <div
          className={` ${
            dark ? "border-2 border-white" : "border-2 border-black"
          } px-4 md:px-8`}
        >
          <Chart options={state.options} series={state.series} type="bar" />
        </div>
        <div
          className={` ${
            dark ? "border-2 border-white" : "border-2 border-black"
          } px-4 md:px-8`}
        >
          <Chart options={state.options} series={state.series} type="line" />
        </div>
        <div
          className={` ${
            dark ? "border-2 border-white" : "border-2 border-black"
          } px-4 md:px-8`}
        >
          <Chart options={state.options} series={state.series} type="area" />
        </div>
        <div
          className={` ${
            dark ? "border-2 border-white" : "border-2 border-black"
          } px-4 md:px-8`}
        >
          <Chart options={state.options} series={state.series} type="radar" />
        </div>
        <div
          className={` ${
            dark ? "border-2 border-white" : "border-2 border-black"
          } px-4 md:px-8`}
        >
          <Chart options={state.options} series={state.series} type="scatter" />
        </div>
        <div
          className={` ${
            dark ? "border-2 border-white" : "border-2 border-black"
          } px-4 md:px-8`}
        >
          <Chart
            options={state.options}
            series={state.series}
            type="heatmap"
            dataLabels={state.dataLabels}
          />
        </div>
      </div>
      <div className="text-black grid md:grid-col-1  gap-3 mt-1 ">
        <div
          className={` ${
            dark ? "border-2 border-white" : "border-2 border-black"
          } flex justify-center`}
        >
          <Chart
            options={state2.options}
            series={state2.series.marks}
            type="pie"
            width={450}
            height={450}
          />
        </div>
        <div
          className={` ${
            dark ? "border-2 border-white" : "border-2 border-black"
          } flex justify-center`}
        >
          <Chart
            options={state2.options}
            series={state2.series.marks}
            type="pie"
            width={450}
            height={450}
          />
        </div>
      </div>
    </>
  );
};
export default ApexChart;
