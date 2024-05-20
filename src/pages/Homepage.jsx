import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import Sidebar from "../components/Sidebar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Homepage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className=" p-10 gap-7">
          <div className="text-3xl font-semibold mb-7">Dashboard</div>

          <div className="flex gap-5">
            <div className="flex flex-wrap w-[28vw] gap-4 ">
              {/* Sale per mounth */}
              <div className="flex flex-col p-4 rounded-xl shadow-md w-[28vw]">
                <div className="flex justify-between">
                  <div className="">
                    <h2 className="text-xl font-semibold">Sale</h2>
                    <div>January - July</div>
                  </div>

                  <div className="text-xl font-semibold">Rp. 200000</div>
                </div>
                <Line options={options} data={lineData} />
              </div>
              {/*  */}
              <div className="flex justify-between w-full">
                <div className="card w bg-base-100 shadow-lg">
                  <div className="card-body">
                    <h2 className="text-xl font-semibold">Total Product</h2>
                    <div className="">23</div>
                  </div>
                </div>
                {/*  */}
                <div className="card w bg-base-100 shadow-lg">
                  <div className="card-body">
                    <h2 className="text-xl font-semibold">Total Order</h2>
                    <div className="">23</div>
                  </div>
                </div>
              </div>
            </div>

            {/* best Seller */}
            <div className="p-4 rounded-md shadow-md h-fit">
              <div className="flex justify-between mb-3">
                <div className="font-semibold">Best Seller Recommendation</div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Product Name</th>
                      <th>Variant</th>
                      <th>Category</th>
                      <th>Total Sales</th>
                      <th>Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className="bg-base-200">
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Blue</td>
                      <td>Specialist</td>
                      <td>112</td>
                      <td>30%</td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                      <td>Technician</td>
                      <td>100</td>
                      <td>28%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const pieData = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const lineData = {
  labels,
  datasets: [
    {
      label: "sale",
      data: labels.map(() => faker.number.int({ min: 1, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      // display: true,
      // text: "Chart.js Line Chart",
    },
  },
};

export default Homepage;
