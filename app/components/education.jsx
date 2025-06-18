import React from 'react';

const Education = () => {
  const educationData = [
    {
      period:'2024-2028',
      institution: 'BICT Information Communication Technology',
      place: 'University of Sri Jayawardenapura',
      date: 'May 2028 - May 2028'
    },
    {
      period: '2023 - 2027',
      institution: 'BSc Information Technology, Data Science',
      place: 'SLIIT',
      date: 'Jun 2023 - Jul 2027'
    },
    {
      period: '2009 - 2023',
      institution: 'Arafa Central College(National School)',
      place: 'Arafa Central College',
      date: 'Jan 2009 - Feb 2023'
    }
  ];

  return (
    <div className="bg-gray-900 flex items-center justify-center p-2 sm:p-4 lg:p-6">
      <div className="bg-gray-800/30 text-white p-6 sm:p-8 lg:p-10 rounded-lg relative overflow-hidden max-w-7xl w-full hover:bg-gray-400/20"
           style={{
             background: 'linear-gradient(to bottom, #1f2937, #111827)',
             boxShadow: '0 0 30px rgba(234, 179, 8, 0.3)'
           }}>
        {/* Yellow glow effect */}
        <div className="absolute inset-0 bg-yellow-400/20 blur-xl opacity-70"></div>
        <div className="absolute inset-0 border-4 border-transparent rounded-lg pointer-events-none" 
             style={{
               backgroundImage: 'radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(234, 179, 8, 0.5) 100%)',
               animation: 'borderSpin 2s linear infinite',
             }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-8 relative group">
            Experience & Education
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-1000 ease-in-out group-hover:w-full"></span>
          </h1>
          
          <div className="relative py-6 group pl-8 sm:pl-12">
            {/* Timeline line */}
            <div className="absolute left-0 sm:left-4 h-full w-1 bg-yellow-400 group-hover:bg-yellow-500 transition-colors duration-200"></div>
            
            {educationData.map((item, index) => (
              <div key={index} className="mb-10 relative">
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-4 w-5 h-5 bg-yellow-400 rounded-full -translate-x-1/2 mt-3 border-4 border-gray-800 group-hover:bg-yellow-300 transition-colors duration-200"></div>
                
                {/* Year label and content in a row */}
                <div className="ml-6 sm:ml-10">
                  <div className="mb-2">
                    <span className="text-yellow-400 font-bold text-xl sm:text-2xl">
                      {item.period}
                    </span>
                  </div>
                  
                  {/* Content box */}
                  <div className="p-4 bg-gray-900/80 rounded-lg border-l-4 border-yellow-400 hover:bg-gray-800/80 transition-colors duration-200">
                    <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">{item.institution}</h3>
                    <p className="text-gray-300 mt-1">{item.place}</p>
                    <p className="text-gray-400 text-sm mt-2">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
