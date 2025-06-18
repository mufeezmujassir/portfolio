'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const ReachMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      
      // Send data to our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-4 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-1000 ease-in-out group-hover:w-full"></span>
          </h1>
          
          <div className="text-base sm:text-lg md:text-xl text-white-400 text-center leading-relaxed mb-8">
            Let's connect! Reach me at <a href="mailto:mufeezmujassir80@gmail.com" className="text-yellow-400 hover:underline">mufeezmujassir80@gmail.com</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-900/50 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <h2 className="text-xl font-bold mb-4 text-yellow-400">Send a Message</h2>
              <p className="text-gray-300 mb-4">I'll get back to you as soon as possible</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="relative flex items-center justify-center px-6 py-3 bg-yellow-400 text-black rounded-md shadow-md overflow-hidden group w-full font-bold hover:bg-yellow-500 transition-colors duration-300 disabled:opacity-70"
                >
                  <span className="absolute inset-0 bg-yellow-500 transform translate-x-full transition-transform duration-400 ease-in-out group-hover:translate-x-0" />
                  <span className="relative flex items-center">
                    <FaEnvelope className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-500/20 border border-green-500 rounded-md text-green-400">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-500 rounded-md text-red-400">
                    There was an error sending your message. Please try again later.
                  </div>
                )}
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="bg-gray-900/50 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-4 text-yellow-400">Connect With Me</h2>
                <p className="text-gray-300 mb-6">Feel free to reach out through any of these platforms</p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-400 p-2 rounded-full text-black">
                      <FaEnvelope className="w-5 h-5" />
                    </div>
                    <a href="mailto:mufeezmujassir80@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                    mufeezmujassir80@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 text-yellow-400">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/in/mufeez-mujassir-575402227" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/mufeezmujassir/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/mufeezmujassir/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61572045880715" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
                    <FaFacebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
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

export default ReachMe;