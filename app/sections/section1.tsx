// "use client";
// import React, { useState } from "react";

// export default function Section1() {
//   const [hoveredTier, setHoveredTier] = useState(null);

//   const renderFlowers = (tier) => {
//     const flowers = [];
//     const flowerCount = tier === "top" ? 3 : tier === "middle" ? 5 : 7;
//     const colors = [
//       "text-pink-400",
//       "text-rose-300",
//       "text-white",
//       "text-pink-200",
//     ];

//     for (let i = 0; i < flowerCount; i++) {
//       flowers.push(
//         <div
//           key={`flower-${i}`}
//           className={`absolute ${colors[i % colors.length]} opacity-80`}
//           style={{
//             left: `${Math.random() * 80}%`,
//             top: `${Math.random() * 80}%`,
//             transform: `rotate(${Math.random() * 360}deg)`,
//           }}
//         >
//           <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
//           </svg>
//         </div>
//       );
//     }
//     return flowers;
//   };

//   return (
//     <div className="relative w-full max-w-md mx-auto h-screen perspective-1000 py-12">
//       <div className="cake-container relative h-[500px]">
//         {/* Top Tier */}
//         <div
//           className={`absolute w-48 h-32 bg-white border-4 border-pink-100 rounded-lg 
//           shadow-xl top-0 left-1/2 transform -translate-x-1/2 
//           transition-all duration-300 ${
//             hoveredTier === "top" ? "scale-110" : "hover:scale-105"
//           }`}
//           onMouseEnter={() => setHoveredTier("top")}
//           onMouseLeave={() => setHoveredTier(null)}
//         >
//           {renderFlowers("top")}
//         </div>

//         {/* Middle Tier */}
//         <div
//           className={`absolute w-64 h-40 bg-white border-4 border-pink-200 rounded-lg 
//           shadow-xl top-32 left-1/2 transform -translate-x-1/2
//           transition-all duration-300 ${
//             hoveredTier === "middle" ? "scale-110" : "hover:scale-105"
//           }`}
//           onMouseEnter={() => setHoveredTier("middle")}
//           onMouseLeave={() => setHoveredTier(null)}
//         >
//           {renderFlowers("middle")}
//         </div>

//         {/* Bottom Tier */}
//         <div
//           className={`absolute w-80 h-48 bg-white border-4 border-pink-300 rounded-lg 
//           shadow-xl top-64 left-1/2 transform -translate-x-1/2
//           transition-all duration-300 ${
//             hoveredTier === "bottom" ? "scale-110" : "hover:scale-105"
//           }`}
//           onMouseEnter={() => setHoveredTier("bottom")}
//           onMouseLeave={() => setHoveredTier(null)}
//         >
//           {renderFlowers("bottom")}
//         </div>

//         {/* Decorative Separator Lines */}
//         <div
//           className="absolute top-24 left-1/2 transform -translate-x-1/2 
//           w-64 h-1 bg-pink-200 opacity-50"
//         ></div>
//         <div
//           className="absolute top-56 left-1/2 transform -translate-x-1/2 
//           w-80 h-1 bg-pink-300 opacity-50"
//         ></div>

//         {/* Cake Stand */}
//         <div
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
//           w-96 h-8 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full 
//           shadow-md"
//         ></div>
//       </div>
//     </div>
//   );
// }
