// import React from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
// import {
//   FaLinkedinIn,
//   FaReact,
//   FaGithub,
//   FaInstagram,
//   FaNode,
// } from "react-icons/fa";

// import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// const LeftBanner = () => {
//   const [text] = useTypewriter({
//     words: ["Professional Coder.", "Full Stack Software Developer.", "MERN Stack Developer."],
//     loop: true,
//     typeSpeed: 20,
//     deleteSpeed: 10,
//     delaySpeed: 2000,
//   });
//   return (
//     <div className="w-full  flex flex-col gap-20 ">
//       <div className="flex flex-col gap-5 items-center">
//         <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
//         <h1 className="text-6xl font-bold text-white">
//           Hi, I'm <span className="text-designColor capitalize">Dhruv Seth</span>
//         </h1>
//         <h2 className="text-4xl font-bold text-white">
//           a <span>{text}</span>
//           <Cursor
//             cursorBlinking="false"
//             cursorStyle="|"
//             cursorColor="#ff014f"
//           />
//         </h2>
//         <p className="text-base font-bodyFont leading-6 tracking-wide">
//         I am a full-stack developer proficient in JavaScript, React.js, Node.js, Express.js, and MongoDB, with a strong foundation in data structures,
//          algorithms, and software development. Passionate about building responsive and scalable web applications.
//         </p>
//       </div>
//       <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
//         <div>
//           <h2 className="text-base uppercase font-titleFont mb-4">
//             Find me on
//           </h2>
//           <div className="flex gap-4">
//                       <a className="bannerIcon" href="https://www.instagram.com/dhruvseth_09/">
//                         <FaInstagram />
//                       </a>
//                       <a className="bannerIcon" href="https://github.com/DhruvSeth09">
//                         <FaGithub />

//                       </a>
//                       <a className="bannerIcon" href="https://www.linkedin.com/in/dhruv-seth-002601288/">
//                         <FaLinkedinIn />
//                       </a>
//           </div>
//         </div>
//         <div>
//           <h2 className="text-base uppercase font-titleFont mb-4">
//             BEST SKILLS
//           </h2>
//           <div className="flex gap-4">
//             <span className="bannerIcon">
//               <FaReact />
//             </span>
//             <span className="bannerIcon">
//               <SiNextdotjs />
//             </span>
//             <span className="bannerIcon">
//               <FaNode />
//             </span>
//             <span className="bannerIcon">
//               <SiTailwindcss />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeftBanner;



import React, { useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaInstagram,
  FaNode,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "MERN Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  // Parallax Scroll Effect
  const ref = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // 3D Tilt Effect
  const handleMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    target.style.setProperty("--mouse-x", x);
    target.style.setProperty("--mouse-y", y);
  };

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="w-full flex flex-col gap-20 relative overflow-hidden"
    >
      {/* 3D Background Layer */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-bodyColor to-[#202327] opacity-50 transform-gpu rotate-x-6 rotate-y-6 scale-105"
        style={{
          transform: "perspective(1000px) rotateX(6deg) rotateY(6deg)",
        }}
      />

      {/* Introduction Section */}
      <div
        className="flex flex-col gap-5 items-center relative z-10"
        onMouseMove={handleMouseMove}
        style={{
          transform: "perspective(1000px) rotateX(var(--rotate-x)) rotateY(var(--rotate-y))",
          transition: "transform 0.2s ease-out",
        }}
      >
        <motion.h4
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-normal text-gray-400"
        >
          WELCOME TO MY WORLD
        </motion.h4>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl font-bold text-white text-center"
        >
          Hi, I'm <span className="text-designColor capitalize">Dhruv Seth</span>
        </motion.h1>
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl font-bold text-white text-center"
        >
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </motion.h2>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base font-bodyFont leading-6 tracking-wide text-gray-400 text-center max-w-2xl"
        >
          I am a full-stack developer proficient in JavaScript, React.js, Node.js, Express.js, and MongoDB, with a strong foundation in data structures, algorithms, and software development. Passionate about building responsive and scalable web applications.
        </motion.p>
      </div>

      {/* Social Links and Skills Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between relative z-10"
      >
        {/* Social Links */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-gray-400">
            Find me on
          </h2>
          <div className="flex gap-4">
            <motion.a
              href="https://www.instagram.com/dhruvseth_09/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="bannerIcon hover:bg-designColor hover:text-white transition-all duration-300"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://github.com/DhruvSeth09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="bannerIcon hover:bg-designColor hover:text-white transition-all duration-300"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dhruv-seth-002601288/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="bannerIcon hover:bg-designColor hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn />
            </motion.a>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-gray-400">
            BEST SKILLS
          </h2>
          <div className="flex gap-4">
            <motion.span
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="bannerIcon hover:bg-designColor hover:text-white transition-all duration-300"
            >
              <FaReact />
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="bannerIcon hover:bg-designColor hover:text-white transition-all duration-300"
            >
              <SiNextdotjs />
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="bannerIcon hover:bg-designColor hover:text-white transition-all duration-300"
            >
              <FaNode />
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="bannerIcon hover:bg-designColor hover:text-white transition-all duration-300"
            >
              <SiTailwindcss />
            </motion.span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LeftBanner;