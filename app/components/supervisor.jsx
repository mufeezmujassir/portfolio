'use client';

import React from 'react';
import { DocumentArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import About from './about'
import Project from './projects'
import Skills from './skills'     
import Education from './education'
import Reach from './reachme'

const Supervisor = () => {
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={process.env.NODE_ENV === 'production' ? '/portfolio/logo.svg' : '/logo.svg'}
              alt="Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
            />
          </div>
          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8">
              {['About us', 'Reach me', 'Worked Projects', 'Skills & Tools', 'Experience & Education', 'Tech Insights'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-'))}
                    className="relative text-sm lg:text-base font-bold text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-3xl">
          <img
            src={process.env.NODE_ENV === 'production' ? '/portfolio/profile.jpeg' : '/profile.jpeg'}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full shadow-lg hover:opacity-90 hover:scale-105 transition duration-300 object-cover"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            MUFEEZ MUJASSIR
          </h1>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-yellow-500">
            Data Science Undergraduate | Building Solutions for the Future <br />
            FULL STACK DEVELOPER | TECH ENTHUSIAST | AI & ML ENTHUSIAST
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl">
            Undergraduate Data Science enthusiast passionate about building efficient and scalable solutions for real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="relative flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-yellow-400 text-black rounded-md shadow-md overflow-hidden group">
              <span className="absolute inset-0 bg-yellow-500 transform translate-x-full transition-transform duration-400 ease-in-out group-hover:translate-x-0" />
              <span className="relative flex items-center font-bold text-sm sm:text-base">
                <DocumentArrowDownIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Download CV
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('reach-me')} 
              className="relative flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-400 text-black rounded-md shadow-md overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gray-500 transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
              <span className="relative flex items-center font-bold text-sm sm:text-base">
                <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Contact Me
              </span>
            </button>
          </div>
        </div>
      </main>
      <section id="about-us">
        <About />
      </section>
      
      <section id="worked-projects">
        <Project />
      </section>
      <section id="skills-tools">
        <Skills />
      </section>
      <section id="experience-education">
        <Education />
      </section>
      <section id="reach-me">
        <Reach />
      </section>
    </div>
  );
};

export default Supervisor;