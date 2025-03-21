import React from 'react'
import img from "../../assets/images/projects/main.jpg";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
  <img
    className="w-[250px] h-[250px] border rounded-lg ml-4 lgl:w-[400px] lgl:h-[500px] z-10"
    src={img}
    alt="bannerImg"
  /> 
</div>

  );
}

export default RightBanner