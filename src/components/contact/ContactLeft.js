import React from 'react'
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Dhruv Seth</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack software Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I’d love to hear from you! Whether you have a question or just want to say hi.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8004005361</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">dhruvseth247@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <a className="bannerIcon" href="https://www.instagram.com/dhruvseth_09/">
            <FaInstagram />
          </a>
          <a className="bannerIcon" href="https://github.com/DhruvSeth09">
            <FaGithub />
          </a>
          <a className="bannerIcon" href="https://www.linkedin.com/in/dhruv-seth-002601288/">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft