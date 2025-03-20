import React from 'react'

const Graph = ({ classname1 }) => {
  return (
    <div className={classname1} >
      <img src="/image.png" alt="img" style={{width: "1017px", height: "343px"}} />
    </div>
  )
}

export default Graph

// import { Chart as defaults } from "chart.js/auto";
// import React, { useState } from "react";
// import { Bar } from "react-chartjs-2";
// import "./bar.css";

// defaults.maintainAspectRatio = false;
// defaults.responsive = true;

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// function Graph({ classname1 }) {
//   const [chartData, setChartData] = useState(null);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     let accesstoken = localStorage.getItem('access_token');
//   //     if (!accesstoken) {
//   //       console.log('No access token present in local storage');
//   //       return;
//   //     }

//   //     try {
//   //       const response = await axiosInstance.get('/monthwisecoinsearned', {
//   //         headers: {
//   //           'Authorization': `Bearer ${accesstoken}`,
//   //         },
//   //       });
//   //       setChartData(response.data);
//   //     } catch (error) {
//   //       console.error('Error fetching data', error);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);

//   // if (!chartData) {
//   //   return <h3>Loading...</h3>;
//   // }

//   const currentDate = new Date();
//   const currentMonthIndex = currentDate.getMonth();
//   const includedMonths = [currentMonthIndex];
//   for (let i = 1; i < 5; i++) {
//     const previousMonthIndex = (currentMonthIndex - i + 12) % 12;
//     includedMonths.push(previousMonthIndex);
//   }

//   includedMonths.reverse();

//   const barData = includedMonths.map((monthIndex) => ({
//     label: months[monthIndex],
//     value: chartData[monthIndex + 1] || 0,
//   }));

//   return (
//     <div className={classname1}>
//       <div className="title">Monthly Coins Earned!</div>
//       <div className="card">
//         <Bar
//           data={{
//             labels: barData.map((item) => item.label),
//             datasets: [
//               {
//                 label: "Coins",
//                 data: barData.map((item) => item.value),
//                 backgroundColor: ["#35bd7a"],
//               },
//             ],
//           }}
//           options={{
//             plugins: {
//               legend: {
//                 display: false,
//               },
//             },
//             scales: {
//               y: {
//                 min: 0,
//               },
//             },
//           }}
//         />
//       </div>
//       <div className="totalcoincont">
//         <div>
//           <div className={`${"green"} ${"fonttype"}`}>
//             Total Positive Coins
//           </div>
//           <div className={fontstyle}>{100}</div>
//         </div>
//         <div>
//           <div className={`${red} ${fonttype}`}>
//             Total Negative Coins
//           </div>
//           <div className={fontstyle}>{100}</div>
//         </div>
//       </div>
//       <div className={disclaimer}>
//         *Values displayed are from data since joining Spotknack!
//       </div>
//     </div>
//   );
// }

// export default Graph;

// import React, { useState } from "react";
// import { Bar } from "react-chartjs-2";
// import "./Bar.css";

// const Graph = ({ classname1 }) => {
//   return (
//     <div className={classname1}>
//       <div className="title">Monthly Coins Earned!</div>
//       <div className="card">
//         <Bar
//           data={{
//             labels: ["January", "February", "March"],
//             datasets: [
//               {
//                 label: "Coins",
//                 data: [50, 75, 100],
//                 backgroundColor: ["#35bd7a"],
//               },
//             ],
//           }}
//           options={{
//             plugins: {
//               legend: { display: false },
//             },
//             scales: { y: { min: 0 } },
//           }}
//         />
//       </div>
//       <div className="totalcoincont">
//         <div>
//           <div className="green fonttype">Total Positive Coins</div>
//           <div className="fontstyle">{100}</div>
//         </div>
//         <div>
//           <div className="red fonttype">Total Negative Coins</div>
//           <div className="fontstyle">{100}</div>
//         </div>
//       </div>
//       <div className="disclaimer">
//         *Values displayed are from data since joining Spotknack!
//       </div>
//     </div>
//   );
// };

// export default Graph;
