// import { useEffect, useState } from "react";
// import "../Rohitdev.css";
// import { Pg1 } from "./p1";
// import { Pg2 } from "./p2";
// import { StepContext } from "./context";

// const StepPage = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const [pageMetaData, setPageMetaData] = useState([
//     {
//       id: "10",
//       title: "title",
//       page: <Pg1 />,
//       website: "abc.com",
//       description: "description",
//       status: "",
//     },
//     {
//       id: "15",
//       title: "title",
//       page: <Pg2 />,
//       website: "xyz.com",
//       description: "description",
//       status: "",
//     },
//     {
//       id: "1534",
//       title: "title",
//       page: <Pg2 />,
//       description: "description",
//       status: "",
//     },
//     {
//       id: "1534",
//       title: "title",
//       page: <Pg2 />,
//       description: "description",
//       status: "",
//     },
//     {
//       id: "1534",
//       title: "title",
//       page: <Pg2 />,
//       description: "description",
//       status: "",
//     },
//   ]);

//   const handleNext = () => {
//     setPageMetaData((prev) => {
//       const updated = [...prev];
//       updated[currentPage] = {
//         ...updated[currentPage],
//         status: "completed",
//       };
//       return updated;
//     });

//     setCurrentPage((prev) => Math.min(prev + 1, pageMetaData.length - 1));
//   };

//   const handleSkip = () => {
//     setPageMetaData((prev) => {
//       const updated = [...prev];
//       updated[currentPage] = {
//         ...updated[currentPage],
//         status: "skipped",
//       };
//       return updated;
//     });

//     setCurrentPage((prev) => Math.min(prev + 1, pageMetaData.length - 1));
//   };

//   const bubbleColor = (status) => {
//     if (status === "completed") return "bg-green-500";
//     if (status === "skipped") return "bg-red-500";
//     if (status === "inprogress") return "bg-blue-500";
//     return "bg-gray-300";
//   };

//   return (
//     <StepContext>
//       <div className="w-full h-[90vh] bg-gray-100">
//         <div className="max-w-[90%] mx-auto">
//           {/* Progress Top Navigation */}
//           <div id="progresssection" className="w-full py-6">
//             <div className="flex items-center justify-between relative">
//               {pageMetaData.map((step, index) => (
//                 <div key={index} className="flex-1 flex items-center">
//                   {/* Circle */}
//                   <div
//                     className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white 
//           ${bubbleColor(step.status)}`}
//                   >
//                     {index + 1}
//                   </div>

//                   {/* Line (hide after last circle) */}
//                   {index < pageMetaData.length - 1 && (
//                     <div className="flex-1 h-[4px] mx-2 bg-gray-300"></div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Buttons */}
//           <div
//             id="submitsection"
//             className="p-4 rounded-[8px] flex justify-end gap-4 mt-4"
//           >
//             <button onClick={handleSkip}>Skip</button>
//             <button onClick={handleNext}>Next</button>
//           </div>

//           {/* Page Content */}
//           <div
//             id="pagesection"
//             className="min-h-[500px] border-gray-400 p-4 rounded-[8px] mt-4"
//           >
//             {pageMetaData[currentPage].page}
//           </div>
//         </div>
//       </div>
//     </StepContext>
//   );
// };

// export default StepPage;
