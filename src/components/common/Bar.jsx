// import React, { useEffect, useState } from "react";

// const Bar = ({ value, label, barColor, barFillColor }) => {
//   const [barFill, setBarFill] = useState(0);

//   useEffect(() => {
//     if (value >= 0 && value <= 100) {
//       setBarFill(value);
//     } else {
//       console.log("Please enter a value between 0 to 100");
//     }
//   }, [value]);

//   return (
//     <>
//       <div className="bar-wrapper">
//         <p className=""> {barFill}%</p>

//         <div
//           className="bar-container"
//           style={{ backgroundColor: `${barColor}` }}
//         >
//           <div
//             className="bar-fill"
//             style={{
//               height: `${barFill}%`,
//               backgroundColor: `${barFillColor}`,
//             }}
//           ></div>
//         </div>

//         <p className="bar-label">{label}</p>
//       </div>
//     </>
//   );
// };

// export default Bar;
