import React from 'react';
import { FaCss3, FaHtml5, FaReact, FaNodeJs, FaJava, FaNode, FaPython,  FaGithub,
  FaGit } from "react-icons/fa";
import {  SiJavascript,
  SiMysql, SiFlask, SiMongodb, SiNumpy, SiPandas, SiScipy, SiScikitlearn ,SiPytorch, SiOpencv, SiJupyter,SiStreamlit } from "react-icons/si";
  import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

const Skills = () => {
  return (
    <div id="Skills" className="h-screen flex flex-col justify-center items-center p-6 md:p-12 ">
      <h1 className="text-3xl md:text-5xl text-white font-bold text-center mb-8 md:mb-20">Skills</h1>
      <div className="bg-gradient-to-b from-gray-800 to-black p-6 md:p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4">
            {[
    // Frontend
    { Icon: FaHtml5, color: "#F06529" },
    { Icon: FaCss3, color: "#2965F1" },
    { Icon: FaReact, color: "#61DBFB" },
    { Icon: SiJavascript, color: "#F7DF1E" },

    // Programming
    { Icon: FaPython, color: "#3776AB" },
    { Icon: FaJava, color: "#D00000" },

    // Backend
    { Icon: FaNodeJs, color: "#3C873A" },
    { Icon: SiFlask, color: "#FFFFFF" },

    // AI/ML & Data Science
    { Icon: SiScikitlearn, color: "#4CAF50" },
    { Icon: SiPytorch, color: "#EE4C2C" },
    { Icon: SiNumpy, color: "#013243" },
    { Icon: SiPandas, color: "#150458" },
    { Icon: SiScipy, color: "#8C1D40" },
    { Icon: SiOpencv, color: "#5C3EE8" },

    // Tools & Platforms
    { Icon: SiJupyter, color: "#F37626" },
    { Icon: SiStreamlit, color: "#FF4B4B" },
    { Icon: FaGithub, color: "#FFFFFF" },
    { Icon: FaGit, color: "#F05032" },

    // Databases
    { Icon: SiMysql, color: "#00758F" },
    { Icon: SiMongodb, color: "#116149" },

    // Additional Tool
    { Icon: PiMicrosoftExcelLogoFill, color: "#217346" }
  ].map(({ Icon, color }, index) => (
            <span
              key={index}
              className="p-4 bg-zinc-900 flex items-center rounded-2xl hover:bg-gray-700 transition duration-300"
            >
              <Icon color={color} size={50} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
