// import React from 'react'
// import { motion } from 'framer-motion';

// const Skills = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
//     >
//       <div className="w-full lgl:w-1/2">
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px] uppercase">
//             Features
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
//         </div>
//         <div className="flex flex-col gap-6">
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">React</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Node.js</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">80%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">HTML 5</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">CSS3</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">80%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">JAVASCRIPT</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">AGILE SOFTWARE DEVELOPMENT</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>
          
//         </div>
//       </div>
//       <div className="w-full lgl:w-1/2">
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px] uppercase">
             
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold"></h2>
//         </div>
//         <div className="py-12 font-titleFont flex flex-col gap-4">
          
//           <h2 className="text-3xl md:text-4xl font-bold"></h2>
//         </div>
//         <div className='className="mt-14 w-full flex flex-col gap-6'>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">My SQL</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">MongoDB</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
            
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">AWS </p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">70%</span>
//               </motion.span>
//             </span>
//           </div>
          
//         </div>
//       </div>

      
//     </motion.div>
//   );
// }

// export default Skills


import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Left Column */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { skill: "React", percentage: 90 },
            { skill: "Node.js", percentage: 80 },
            { skill: "HTML 5", percentage: 90 },
            { skill: "CSS3", percentage: 80 },
            { skill: "JavaScript", percentage: 85 },
            { skill: "Agile Software Development", percentage: 90 },
          ].map((item, index) => (
            <div key={index} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{item.skill}</p>
              <span className="w-full h-2 bg-gray-800 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: `${item.percentage}%` }}
                >
                  <span className="absolute -top-7 right-0 text-sm text-gray-400">
                    {item.percentage}%
                  </span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Database & Cloud
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { skill: "MySQL", percentage: 90 },
            { skill: "MongoDB", percentage: 90 },
            { skill: "AWS", percentage: 70 },
          ].map((item, index) => (
            <div key={index} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{item.skill}</p>
              <span className="w-full h-2 bg-gray-800 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: `${item.percentage}%` }}
                >
                  <span className="absolute -top-7 right-0 text-sm text-gray-400">
                    {item.percentage}%
                  </span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;