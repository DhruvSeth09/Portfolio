import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { SiProgress } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Software Optimization"
          des=""
         
        />
        <Card
          title="Web Development"
          des=""
          icon={<AiFillAppstore />}
        />
        <Card
          title="Enterprise Application Development"
          des=""
          icon={<SiProgress />}
        />
        
      </div>
    </section>
  );
}

export default Features