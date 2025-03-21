import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - till now</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
          <ResumeCard
            title="B-Tech Computer Science and Engineering"
            subTitle="GLA University (2022 - 2026)"
            result="8.64/10"
            des="I am currently pursuing my bachelor's degree in computer science from GLA University, Mathura."
          />
          <ResumeCard
            title="Senior Secondary School Education"
            subTitle="S.S.K.L.A Mem Bal Vidya Mandir ,Jalaun (2021 - 2022)"
            result="8.19/10"
            des="I have completed my secondary education from this school with a remarkable academic record."
          />
          <ResumeCard
            title="High School Education"
            subTitle="S.S.K.L.A Mem Bal Vidya Mandir ,Jalaun (2019 - 2020)"
            result="7.1/10"
            des="I have completed my High School Education from this school with a remarkable academic record."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Education;
