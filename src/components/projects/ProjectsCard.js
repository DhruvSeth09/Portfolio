// import React from 'react'
// import { BsGithub } from "react-icons/bs";
// import { FaGlobe } from "react-icons/fa";

// const ProjectsCard = ({ title, des, src ,link}) => {
//   return (
//     <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
//       <div className="w-full h-[80%] overflow-hidden rounded-lg">
//         <img
//           className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
//           src={src}
//           alt="src"
//         />
//       </div>
//       <div className="w-full mt-6 flex flex-col  gap-6">
//         <div>
//           <div className="flex items-center justify-between">
//             <h3 className="text-base uppercase text-designColor font-normal">
//               {title}
//             </h3>
//             <div className="flex mb-2 gap-2">
//               <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
//                 <a className="bannerIcon" href="https://github.com/DhruvSeth09">
//                 <BsGithub />
//                 </a>
//               </span>
//               <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
//               <a className="bannerIcon" href={link}>
//                 <FaGlobe />
//               </a>
//               </span>
//             </div>
//           </div>
//           <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
//             {des}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectsCard

import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, link, githubLink }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      
      {/* Image container with shine effect */}
      <div className="w-full h-[80%] overflow-hidden rounded-lg relative">
        <img
          className="w-full h-60 object-cover group-hover:scale-105 duration-500 cursor-pointer transform-gpu"
          src={src}
          alt={title}
        />
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="w-full mt-6 flex flex-col gap-6 relative z-20">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl uppercase text-designColor font-bold tracking-wider group-hover:text-white transition-colors duration-300">
              {title}
              <span className="block w-0 group-hover:w-full h-[2px] bg-designColor transition-all duration-300 mt-1" />
            </h3>
            <div className="flex mb-2 gap-2">
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor hover:scale-110 duration-300 cursor-pointer transform-gpu hover:shadow-glow"
              >
                <BsGithub />
              </a>
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor hover:scale-110 duration-300 cursor-pointer transform-gpu hover:shadow-glow"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
          <p className="text-base tracking-wide mt-3 text-gray-400 group-hover:text-gray-100 duration-300 leading-relaxed">
            {des}
          </p>
        </div>
      </div>

      {/* Hover border effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-designColor/30 rounded-lg transition-all duration-500 pointer-events-none" />
    </div>
  );
}

export default ProjectsCard;