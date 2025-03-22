// import React, { useState } from 'react';
// import Title from '../layouts/Title'
// import { projectOne, projectTwo, ProjectThree} from "../../assets/index";
// import ProjectsCard from './ProjectsCard';

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState('');

//   // Function to handle selection
//   const handleSelect = (project) => {
//     setSelectedProject(project);
//   };
//   return (
//     <section
//       id="projects"
//       className="w-full py-20 border-b-[1px] border-b-black"
//     >
      
//       <div className="flex justify-center items-center text-center">
//         <Title
//           title="VISIT MY PROJECT AND KEEP YOUR FEEDBACK"
//           des="My Projects"
//         />
//       </div>

// <div className="bg-bodyColor border-[1px] border-gray-600 ml-72 w-[50%] p-6 rounded-lg shadow-lg mb-14">
//       <ul className="flex justify-center space-x-8">
//         <li
//           className={`p-4 cursor-pointer text-white rounded-lg shadow-md transition-all duration-300 
//             ${selectedProject === 'Fullstack' ? 'bg-blue-700 shadow-xl' : 'hover:bg-blue-600 hover:text-white'}`}
//           onClick={() => handleSelect('Fullstack')}
//         >
//           Fullstack Project
//         </li>
//         <li
//           className={`p-4 cursor-pointer text-white rounded-lg shadow-md transition-all duration-300 
//             ${selectedProject === 'Frontend' ? 'bg-green-700 shadow-xl' : 'hover:bg-green-600 hover:text-white'}`}
//           onClick={() => handleSelect('Frontend')}
//         >
//           Frontend Project
//         </li>
//         <li
//           className={`p-4 cursor-pointer text-white rounded-lg shadow-md transition-all duration-300 
//             ${selectedProject === 'Backend' ? 'bg-yellow-700 shadow-xl' : 'hover:bg-yellow-600 hover:text-white'}`}
//           onClick={() => handleSelect('Backend')}
//         >
//           Backend Project
//         </li>
//       </ul>
//     </div>



//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
//         <ProjectsCard
//           title="Study Hub"
//           des=" Build an interactive Alumni Connect platform to facilitate seamless networking between alumni and students,
//  enhancing professional connections and mentorship opportunities Technologies involved in development are :- React.js, Node.js, Tailwind CSS and MongoDB."
//           src={projectOne}
//           link="#"
//         />
//         <ProjectsCard
//           title="Uber"
//           des="Designed a responsive and visually appealing website for XCEL IT Solutions to showcase IT services and client
//  projects effectively."
//           src={projectTwo}
//           link="#"
//         />
//          <ProjectsCard
//           title="Weather Application"
//           des=" Build an interactive Alumni Connect platform to facilitate seamless networking between alumni and students,
//  enhancing professional connections and mentorship opportunities Technologies involved in development are :- React.js, Node.js, Tailwind CSS and MongoDB."
//           src={ProjectThree}
//           link="#"
//         />
//       </div>
//     </section>
//   );
// }

// export default Projects


import React, { useState } from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, ProjectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  // Set the default selected project to 'Fullstack'
  const [selectedProject, setSelectedProject] = useState('Fullstack');

  // Function to handle selection
  const handleSelect = (project) => {
    setSelectedProject(project);
  };

  // Filter the projects based on selected category
  const getFilteredProjects = () => {
    switch (selectedProject) {
      case 'Fullstack':
        return (
          <>
            <ProjectsCard
              title="Study Hub"
              des="Build an interactive Alumni Connect platform to facilitate seamless networking between alumni and students, enhancing professional connections and mentorship opportunities. Technologies involved: React.js, Node.js, Tailwind CSS, MongoDB."
              src={projectOne}
              link="#"
            />
            <ProjectsCard
              title="Weather Application"
              des="A full-stack weather application built with React.js, Node.js, and APIs for real-time data."
              src={ProjectThree}
              link="#"
            />
             <ProjectsCard
              title="Weather API"
              des="Built a weather API with Node.js that provides weather data to various applications."
              src={ProjectThree}
              link="#"
            />
          </>
        );
      case 'Frontend':
        return (
          <>
            <ProjectsCard
              title="Uber"
              des="Designed a responsive and visually appealing website for XCEL IT Solutions to showcase IT services and client projects effectively."
              src={projectTwo}
              link="#"
            />
          </>
        );
      case 'Backend':
        return (
          <>
            <ProjectsCard
              title="Study Hub (Backend)"
              des="Developed the backend system for an Alumni Connect platform with Node.js and MongoDB for data management."
              src={projectOne}
              link="#"
            />
            <ProjectsCard
              title="Weather API"
              des="Built a weather API with Node.js that provides weather data to various applications."
              src={ProjectThree}
              link="#"
            />
          </>
        );
      default:
        return <div className="text-center text-gray-500">Please select a project type to see more details.</div>;
    }
  };

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center mb-12">
        <Title
          title="VISIT MY PROJECT AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      {/* Project Navigation */}
      {/* <div className="bg-bodyColor border-[1px] border-gray-600 ml-72 w-[50%] p-6 rounded-lg shadow-lg mb-14">
  <ul className="flex justify-center space-x-8">
    <li
      className={`p-4 cursor-pointer text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105
        ${selectedProject === 'Fullstack' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-xl scale-105' : 'hover:bg-blue-600 hover:shadow-2xl'}`}
      onClick={() => handleSelect('Fullstack')}
    >
      Fullstack Project
    </li>
    <li
      className={`p-4 cursor-pointer text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105
        ${selectedProject === 'Frontend' ? 'bg-gradient-to-r from-green-500 to-teal-600 shadow-xl scale-105' : 'hover:bg-green-600 hover:shadow-2xl'}`}
      onClick={() => handleSelect('Frontend')}
    >
      Frontend Project
    </li>
    <li
      className={`p-4 cursor-pointer text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105
        ${selectedProject === 'Backend' ? 'bg-gradient-to-r from-yellow-500 to-orange-600 shadow-xl scale-105' : 'hover:bg-yellow-600 hover:shadow-2xl'}`}
      onClick={() => handleSelect('Backend')}
    >
      Backend Project
    </li>
  </ul>
</div> */}

<div className="bg-bodyColor border-[1px] border-gray-600 ml-72 w-[60%] p-6 rounded-lg shadow-lg mb-14">
  <ul className="flex justify-evenly space-x-8">
    <li
      className={`relative p-4 cursor-pointer text-white rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-110  
        ${selectedProject === 'Fullstack' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-2xl scale-105 text-lg' : 'hover:bg-blue-600 hover:text-white hover:shadow-2xl'}`}
      onClick={() => handleSelect('Fullstack')}
    >
      {/* Ripple Effect */}
      <span className={`absolute inset-0 rounded-lg bg-blue-300 opacity-0 transition-all duration-500 ${selectedProject === 'Fullstack' ? 'opacity-30' : ''}`}></span>
      Fullstack Project
    </li>
    <li
      className={`relative p-4 cursor-pointer text-white rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-110  
        ${selectedProject === 'Frontend' ? 'bg-gradient-to-r from-green-500 to-teal-600 shadow-2xl scale-105 text-lg' : 'hover:bg-green-600 hover:text-white hover:shadow-2xl'}`}
      onClick={() => handleSelect('Frontend')}
    >
      {/* Ripple Effect */}
      <span className={`absolute inset-0 rounded-lg bg-green-300 opacity-0 transition-all duration-500 ${selectedProject === 'Frontend' ? 'opacity-30' : ''}`}></span>
      Frontend Project
    </li>
    <li
      className={`relative p-4 cursor-pointer text-white rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-110 
        ${selectedProject === 'Backend' ? 'bg-gradient-to-r from-yellow-500 to-orange-600 shadow-2xl scale-105 text-lg' : 'hover:bg-yellow-600 hover:text-white hover:shadow-2xl'}`}
      onClick={() => handleSelect('Backend')}
    >
      {/* Ripple Effect */}
      <span className={`absolute inset-0 rounded-lg bg-yellow-300 opacity-0 transition-all duration-500 ${selectedProject === 'Backend' ? 'opacity-30' : ''}`}></span>
      Backend Project
    </li>
  </ul>
</div>


      {/* Filtered Projects Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        {getFilteredProjects()}
      </div>
    </section>
  );
}

export default Projects;


// import React, { useState } from 'react';
// import Title from '../layouts/Title';
// import { projectOne, projectTwo, ProjectThree } from "../../assets/index";
// import ProjectsCard from './ProjectsCard';

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState('Fullstack');

//   // Function to handle selection
//   const handleSelect = (project) => {
//     setSelectedProject(project);
//   };

//   // Filter the projects based on selected category
//   const getFilteredProjects = () => {
//     switch (selectedProject) {
//       case 'Fullstack':
//         return (
//           <>
//             <ProjectsCard
//               title="Study Hub"
//               des="Build an interactive Alumni Connect platform to facilitate seamless networking between alumni and students, enhancing professional connections and mentorship opportunities. Technologies involved: React.js, Node.js, Tailwind CSS, MongoDB."
//               src={projectOne}
//               link="#"
//               githubLink="#"
//             />
//             <ProjectsCard
//               title="Weather Application"
//               des="A full-stack weather application built with React.js, Node.js, and APIs for real-time data."
//               src={ProjectThree}
//               link="#"
//               githubLink="#"
//             />
//           </>
//         );
//       case 'Frontend':
//         return (
//           <>
//             <ProjectsCard
//               title="Uber"
//               des="Designed a responsive and visually appealing website for XCEL IT Solutions to showcase IT services and client projects effectively."
//               src={projectTwo}
//               link="#"
//               githubLink="#"
//             />
//           </>
//         );
//       case 'Backend':
//         return (
//           <>
//             <ProjectsCard
//               title="Study Hub (Backend)"
//               des="Developed the backend system for an Alumni Connect platform with Node.js and MongoDB for data management."
//               src={projectOne}
//               link="#"
//               githubLink="#"
//             />
//             <ProjectsCard
//               title="Weather API"
//               des="Built a weather API with Node.js that provides weather data to various applications."
//               src={ProjectThree}
//               link="#"
//               githubLink="#"
//             />
//           </>
//         );
//       default:
//         return <div className="text-center text-gray-500">Please select a project type to see more details.</div>;
//     }
//   };

//   return (
//     <section
//       id="projects"
//       className="w-full py-20 border-b-[1px] border-b-black bg-bodyColor"
//     >
//       <div className="flex justify-center items-center text-center mb-12">
//         <Title
//           title="VISIT MY PROJECTS AND SHARE YOUR FEEDBACK"
//           des="My Projects"
//         />
//       </div>

//       {/* Project Navigation */}
//       <div className="max-w-4xl mx-auto border border-gray-600 p-6 rounded-lg shadow-lg mb-14 bg-bodyColor relative">
//         {/* Glow Effect */}
//         <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 via-green-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
//         <ul className="flex justify-center space-x-6 relative z-10">
//           {['Fullstack', 'Frontend', 'Backend'].map((projectType) => (
//             <li
//               key={projectType}
//               className={`relative p-4 cursor-pointer text-white rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl
//                 ${selectedProject === projectType ? 
//                   `${
//                     projectType === 'Fullstack' ? 'bg-blue-700' :
//                     projectType === 'Frontend' ? 'bg-green-700' :
//                     'bg-yellow-700'
//                   } shadow-xl scale-105 text-lg` : 
//                   'hover:bg-gray-700 hover:text-white hover:shadow-xl'
//                 }`}
//               onClick={() => handleSelect(projectType)}
//             >
//               {/* Ripple Effect */}
//               <span className={`absolute inset-0 rounded-lg ${
//                 projectType === 'Fullstack' ? 'bg-blue-300' :
//                 projectType === 'Frontend' ? 'bg-green-300' :
//                 'bg-yellow-300'
//               } opacity-0 transition-all duration-300 ${selectedProject === projectType ? 'opacity-30' : ''}`}></span>
//               {projectType} Project
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Filtered Projects Display */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 xl:gap-12 max-w-7xl mx-auto px-4">
//         {getFilteredProjects()}
//       </div>

//       {/* Section Glow Effect */}
//       <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
//     </section>
//   );
// }

// export default Projects;