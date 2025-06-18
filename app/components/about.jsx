import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-center p-2 sm:p-4 lg:p-6">
      <div className="bg-gray-800 text-white p-6 sm:p-8 lg:p-10 rounded-lg relative overflow-hidden max-w-7xl w-full hover:bg-gray-400/20 ">
        <div className="absolute inset-0 bg-yellow-400/10 blur-md opacity-50"></div>
        <div className="absolute inset-0 border-4 border-transparent rounded-lg pointer-events-none group-hover:border-yellow-400 transition-all duration-500 ease-in-out" 
             style={{
               backgroundImage: 'radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(234, 179, 8, 0.5) 100%)',
               animation: 'borderSpin 2s linear infinite paused',
               animationPlayState: 'running'
             }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-4 relative group">
            About Me
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-1000 ease-in-out group-hover:w-full"></span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white-400 text-center leading-relaxed">
            Hi, I' MUFEEZ MUJASSIR, an undergraduate Data Science enthusiast from SLIIT. Passionate about building efficient and scalable{' '}
            <a href="#" className="underline hover:text-blue-300 transition-colors">
              solutions for real world problems
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

// Add keyframes for the circular border animation
const styles = `
  @keyframes borderSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Inject keyframes into the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default About;