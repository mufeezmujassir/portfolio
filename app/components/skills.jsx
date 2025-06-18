import React from 'react';
import  { FaHtml5,FaJsSquare,FaReact,FaNodeJs,FaPhp,FaCss3,FaLaptopCode,FaJava,FaPython} from "react-icons/fa";
import { SiCisco,SiMongodb,SiExpress,SiMysql } from "react-icons/si";
import { TbBrandPowershell,TbBrandKotlin } from "react-icons/tb";

const SkillsPage = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-center p-2 sm:p-4 lg:p-6">
      <div className="bg-gray-800 text-white p-6 sm:p-8 lg:p-10 rounded-lg relative overflow-hidden max-w-7xl w-full hover:bg-gray-400/20">
        <div className="absolute inset-0 bg-yellow-400/10 blur-md opacity-50"></div>
        <div className="absolute inset-0 border-4 border-transparent rounded-lg pointer-events-none group-hover:border-yellow-400 transition-all duration-500 ease-in-out" 
             style={{
               backgroundImage: 'radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(234, 179, 8, 0.5) 100%)',
               animation: 'borderSpin 2s linear infinite paused',
               animationPlayState: 'running'
             }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-8 relative group">Skills & Tools
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-1000 ease-in-out group-hover:w-full"></span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 rounded-lg">
            {[
              { name: 'JavaScript', icon: <FaJsSquare /> },
              { name: 'React', icon: <FaReact /> },
              { name: 'Node.js', icon: <FaNodeJs/> },
              { name: 'PHP', icon: <FaPhp /> },
              { name: 'Java', icon: <FaJava /> },
              { name: 'Python', icon: <FaPython /> },
              { name: 'C++', icon: <FaLaptopCode/> },
              { name: 'C', icon: <FaLaptopCode/> },
              { name: 'HTML5', icon: <FaHtml5/> },
              { name: 'CSS', icon: <FaCss3 /> },
              { name: 'Express Js', icon: <SiExpress /> },
              { name: 'Ubuntu PowerShell ', icon: <TbBrandPowershell /> },
              { name: 'Cisco', icon: <SiCisco /> },
              { name: 'MySQL', icon: <SiMysql /> },
              { name: 'MongoDB', icon: <SiMongodb /> },
              { name: 'R language', icon: <FaLaptopCode/> },
              { name: 'Kotlin', icon: <TbBrandKotlin /> },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-gray-600 rounded-full hover:bg-gray-500 transition-colors duration-200 cursor-pointer"
              >
                <span className={`text-2xl mr-2 text-yellow-400`}> {skill.icon}</span>
                <p className="text-lg">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;