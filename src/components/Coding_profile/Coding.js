// import React from 'react';
// import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
// import { SiLeetcode, SiHackerrank, SiCodeforces, SiCodechef } from "react-icons/si";
// import Title from '../layouts/Title';

// const codingProfiles = [
//   { name: "LeetCode", link: "https://leetcode.com/u/Dhruv_Seth_09/", icon: <SiLeetcode className="text-yellow-400 text-2xl" /> },
//   { name: "HackerRank", link: "https://www.hackerrank.com/profile/dhruvseth247", icon: <SiHackerrank className="text-green-500 text-2xl" /> },
//   { name: "Codeforces", link: "https://codeforces.com/profile/dhruv_seth", icon: <SiCodeforces className="text-blue-500 text-2xl" /> },
//   { name: "CodeChef", link: "https://www.codechef.com/users/dhruv_seth247", icon: <SiCodechef className="text-orange-500 text-2xl" /> },
// ];

// const CodingProfiles = () => {
//   return (
//     <section id="coding-profiles" className="w-full py-20 border-b-[1px] border-b-black">
//       <Title title="Coding Profiles" des="Where I Code" />
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20">
//         {codingProfiles.map((profile, index) => (
//           <a
//             key={index}
//             href={profile.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-between px-6 py-4 bg-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-2xl"
//           >
//             <div className="flex items-center gap-4">
//               {profile.icon}
//               <span className="text-xl text-white font-semibold">{profile.name}</span>
//             </div>
//             <FaExternalLinkAlt className="text-designColor text-lg" />
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CodingProfiles;


import React from 'react';
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodeforces, SiCodechef } from "react-icons/si";
import Title from '../layouts/Title';
import { motion } from 'framer-motion';

const codingProfiles = [
  { name: "LeetCode", link: "https://leetcode.com/u/Dhruv_Seth_09/", icon: <SiLeetcode className="text-yellow-400 text-2xl" /> },
  { name: "HackerRank", link: "https://www.hackerrank.com/profile/dhruvseth247", icon: <SiHackerrank className="text-green-500 text-2xl" /> },
  { name: "Codeforces", link: "https://codeforces.com/profile/dhruv_seth", icon: <SiCodeforces className="text-blue-500 text-2xl" /> },
  { name: "CodeChef", link: "https://www.codechef.com/users/dhruv_seth247", icon: <SiCodechef className="text-orange-500 text-2xl" /> },
];

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Coding Profiles" des="Where I Code" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20">
        {codingProfiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-6 py-4 bg-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              {profile.icon}
              <span className="text-xl text-white font-semibold">{profile.name}</span>
            </div>
            <FaExternalLinkAlt className="text-designColor text-lg" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;