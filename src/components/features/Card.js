// import React from 'react'
// import { HiArrowRight } from "react-icons/hi";

// const Card = ({title,des,icon}) => {
//   return (
//     <div className="w-full px-12 h-85 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
//       <div className="h-72 overflow-y-hidden">
//         <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
//           <div className="w-10 h-8 flex flex-col justify-between">
        
//             {icon ? (
//               <span className="text-5xl text-designColor">{icon}</span>
//             ) : (
//               <>
//                 <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
//                 <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
//                 <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
//                 <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
//               </>
//             )}
//           </div>
//           <div className="flex flex-col gap-6">
//             <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
//               {title}
//             </h2>
//             <p className="base">{des}</p>
//             <span className="text-2xl text-designColor">
//               <HiArrowRight />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card

import React from 'react';
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
    <div className="w-full px-12 h-85 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-all duration-500 relative overflow-hidden">
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-designColor/10 via-designColor/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-designColor/30 rounded-lg transition-all duration-500 pointer-events-none"></div>

      {/* Content */}
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          {/* Icon or Lines */}
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                {icon}
              </span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex transform group-hover:translate-x-2 transition-transform duration-500"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex transform group-hover:translate-x-4 transition-transform duration-500"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex transform group-hover:translate-x-6 transition-transform duration-500"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex transform group-hover:translate-x-8 transition-transform duration-500"></span>
              </>
            )}
          </div>

          {/* Text Content */}
          <div className="flex overflow-hidden flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300 transform group-hover:translate-x-2 group-hover:text-designColor transition-all duration-500">
              {title}
            </h2>
            <p className="text-base text-gray-400 transform group-hover:translate-x-2 group-hover:text-gray-300 transition-all duration-500">
              {des}
            </p>
            <span className="text-2xl text-designColor transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 transition-opacity duration-700 pointer-events-none"></div>
    </div>
  );
};

export default Card;