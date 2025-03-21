import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title=" " des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
            }}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
            }}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}

      {/* Download Resume Button */}
      <div className="flex justify-center mt-10">
        <a
          href="https://drive.google.com/file/d/1iCmkoi3p3JaLF31CUo8Mo6xwvX1HbQWx/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-designColor text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-90"
        >
          <FaDownload size={20} />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
