import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, Code, Zap, Database } from 'lucide-react';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = projectsRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with advanced features including real-time inventory management, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      gradient: 'from-purple-600 to-pink-600',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/neelakshi-kaundal/ecommerce'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management application with real-time updates, file sharing, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'JWT'],
      gradient: 'from-blue-600 to-cyan-600',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/neelakshi-kaundal/task-manager'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Real-time weather monitoring dashboard with data visualization, historical trends, and weather predictions.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'Flask', 'Chart.js', 'OpenWeatherAPI', 'Docker'],
      gradient: 'from-green-600 to-teal-600',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/neelakshi-kaundal/weather-dashboard'
    },
    {
      title: 'Automation Scripts Suite',
      description: 'Collection of Python automation scripts for web scraping, file management, and data processing tasks.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas', 'Schedule'],
      gradient: 'from-orange-600 to-red-600',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/neelakshi-kaundal/automation-scripts'
    },
    {
      title: 'Social Media Analytics',
      description: 'Advanced analytics platform for social media metrics with sentiment analysis and engagement tracking.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'D3.js', 'Python', 'NLP', 'FastAPI'],
      gradient: 'from-indigo-600 to-purple-600',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/neelakshi-kaundal/social-analytics'
    },
    {
      title: 'IoT Device Monitor',
      description: 'Real-time monitoring system for IoT devices with alert notifications and performance analytics.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'WebSockets', 'Node.js', 'InfluxDB', 'MQTT'],
      gradient: 'from-cyan-600 to-blue-600',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/neelakshi-kaundal/iot-monitor'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of my latest work and creative solutions
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card opacity-0 bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/30 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Project
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-gray-600 text-gray-300 text-sm rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/neelakshi-kaundal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50"
          >
            <Github size={20} className="mr-2" />
            View All Projects
          </a>
        </div>
      </div>
      
      <div className="wave-divider-reverse"></div>
    </section>
  );
};

export default Projects;