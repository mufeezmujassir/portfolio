import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "Spare-TechHub Computer Spare Parts Management System",
      description: "A Java-based web application designed to streamline the management of computer parts for both customers and sellers.",
      githubLink: "https://github.com/mufeezmujassir/Spare-TechHub"
    },
    // Add more projects as needed
    {
      title: "Fashion Pulse  ",
      description: "A MERN stack-based web app that lets users browse dresses from various shops and buy them online with secure payments..",
      githubLink: "https://github.com/mufeezmujassir/virtualdressingmall"
    },
    {
      title: "Finora Financial Tracking App",
      description: "A simple and efficient finance tracking app to help users manage expenses, income, and budgets with ease.",
      githubLink: "https://github.com/mufeezmujassir/Finora"
    },
    {
        title: "GPA Calculator",
        description: "A simple and efficient GPA calculator app to help users calculate their GPA with ease.",
        githubLink: "https://gpacalculator-mufeez.netlify.app/"
      },
    
    
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-2 sm:p-4 lg:p-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-8 relative group">
        Projects
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl w-full">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-6 sm:p-8 rounded-lg relative overflow-hidden hover:bg-gray-400/20 hover:shadow-lg group"
          >
            <div className="absolute inset-0 bg-yellow-400/10 blur-md opacity-50"></div>
            <div
              className="absolute inset-0 border-4 border-transparent rounded-lg pointer-events-none group-hover:border-yellow-400 transition-all duration-500 ease-in-out"
              style={{
                backgroundImage: 'radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(234, 179, 8, 0.5) 100%)',
                animation: 'borderSpin 2s linear infinite paused',
                animationPlayState: 'running'
              }}
            ></div>
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-2">{project.title}</h2>
              <p className="text-base sm:text-lg text-white-400 mb-4 leading-relaxed">{project.description}</p>
              <a
                href={project.githubLink}
                className="inline-block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
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

export default Projects;