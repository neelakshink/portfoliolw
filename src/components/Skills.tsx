import React, { useState } from 'react';
import { Code, Brain, Server, Database, Globe, Wrench, ChevronRight, ExternalLink, Github, Play, Sparkles, Star, Zap } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: React.ReactNode;
}

interface SkillBlock {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  projects: Project[];
}

const Skills: React.FC = () => {
  const [activeBlock, setActiveBlock] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const skillBlocks: SkillBlock[] = [
    {
      id: 'python-ai',
      title: 'Python, AI & ML',
      icon: <Brain size={32} className="text-purple-400 drop-shadow-lg" />,
      color: 'from-purple-600 to-pink-600',
      projects: [
        {
          title: 'Picture Capture System',
          description: 'Save or click pictures using Python with OpenCV and PIL libraries',
          tech: ['Python', 'OpenCV', 'PIL', 'Tkinter'],
          icon: <Play size={20} />
        },
        {
          title: 'Location Access Tool',
          description: 'Get real-time location data using Python geolocation APIs',
          tech: ['Python', 'Geopy', 'Folium', 'Requests'],
          icon: <Globe size={20} />
        },
        {
          title: 'Email Automation',
          description: 'Automated message/email sender with custom templates',
          tech: ['Python', 'SMTP', 'Email', 'Schedule'],
          icon: <ExternalLink size={20} />
        },
        {
          title: 'Earbuds Price Prediction',
          description: 'ML model to predict earbuds pricing using market data',
          tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
          icon: <Brain size={20} />
        },
        {
          title: 'Salary Prediction Model',
          description: 'Predict salary ranges based on experience and skills',
          tech: ['Python', 'Linear Regression', 'NumPy', 'Seaborn'],
          icon: <Database size={20} />
        },
        {
          title: 'Travel Cost Predictor',
          description: 'ML algorithm to estimate travel costs and expenses',
          tech: ['Python', 'Random Forest', 'Pandas', 'Plotly'],
          icon: <Globe size={20} />
        }
      ]
    },
    {
      id: 'fullstack',
      title: 'Fullstack Development',
      icon: <Code size={32} className="text-blue-400 drop-shadow-lg" />,
      color: 'from-blue-600 to-cyan-600',
      projects: [
        {
          title: 'React Dashboard',
          description: 'Interactive dashboard with real-time data visualization',
          tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
          icon: <Code size={20} />
        },
        {
          title: 'REST API Backend',
          description: 'Scalable backend with authentication and data management',
          tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
          icon: <Server size={20} />
        },
        {
          title: 'E-commerce Platform',
          description: 'Full-stack e-commerce solution with payment integration',
          tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
          icon: <Database size={20} />
        },
        {
          title: 'Authentication System',
          description: 'Secure login system with role-based access control',
          tech: ['React', 'Node.js', 'JWT', 'Bcrypt'],
          icon: <ExternalLink size={20} />
        }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      icon: <Server size={32} className="text-green-400 drop-shadow-lg" />,
      color: 'from-green-600 to-teal-600',
      projects: [
        {
          title: 'Menu-based Docker',
          description: 'Interactive Docker management system with CLI interface',
          tech: ['Docker', 'Shell Scripting', 'Linux', 'Docker Compose'],
          icon: <Wrench size={20} />
        },
        {
          title: 'Docker-in-Docker',
          description: 'Nested Docker containers for development environments',
          tech: ['Docker', 'DinD', 'Container Orchestration', 'Security'],
          icon: <Server size={20} />
        },
        {
          title: 'Linux Command Menu',
          description: 'Automated Linux administration with custom scripts',
          tech: ['Linux', 'Bash', 'System Administration', 'Cron Jobs'],
          icon: <ExternalLink size={20} />
        },
        {
          title: 'Jenkins CI/CD Pipeline',
          description: 'Automated deployment pipeline with testing and monitoring',
          tech: ['Jenkins', 'GitHub Actions', 'Docker', 'AWS'],
          icon: <Play size={20} />
        },
        {
          title: 'Kubernetes Deployment',
          description: 'Container orchestration with K8s and Helm charts',
          tech: ['Kubernetes', 'Helm', 'Docker', 'YAML'],
          icon: <Database size={20} />
        }
      ]
    }
  ];

  const softSkills = [
    { name: 'Team Collaboration', level: 95, icon: '🤝' },
    { name: 'Problem Solving', level: 90, icon: '🧩' },
    { name: 'Communication', level: 85, icon: '💬' },
    { name: 'Adaptability', level: 92, icon: '🔄' },
    { name: 'Time Management', level: 88, icon: '⏰' },
    { name: 'Leadership', level: 80, icon: '👑' }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Dark section background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/30 to-black/70"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Dark Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Skills & <span className="text-blue-400 drop-shadow-lg">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-md">
            Expertise in modern technologies with hands-on project experience
          </p>
        </div>

        {/* Enhanced Dark Skill Blocks */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillBlocks.map((block) => (
            <div
              key={block.id}
              className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                activeBlock === block.id ? 'scale-105' : ''
              }`}
              onClick={() => setActiveBlock(activeBlock === block.id ? null : block.id)}
            >
              {/* Enhanced Dark Card */}
              <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 shadow-3xl hover:shadow-glow-blue transition-all duration-300 border-2 border-white/10 hover:border-blue-400/50 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6 relative">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${block.color} shadow-lg relative overflow-hidden group/icon`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/icon:translate-x-full transition-transform duration-1000"></div>
                      {block.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{block.title}</h3>
                  </div>
                  <ChevronRight 
                    className={`transform transition-transform duration-300 text-gray-300 drop-shadow-lg ${
                      activeBlock === block.id ? 'rotate-90' : ''
                    }`} 
                    size={24} 
                  />
                </div>

                {/* Projects Count */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4 relative">
                  <span>{block.projects.length} Projects</span>
                  <span className="text-blue-400 font-semibold">Click to explore</span>
                </div>

                {/* Expandable Projects */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  activeBlock === block.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="space-y-3 pt-4 border-t border-gray-600/50">
                    {block.projects.map((project, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors border border-white/10 hover:border-blue-400/30 relative overflow-hidden group/project"
                        onMouseEnter={() => setHoveredCard(`${block.id}-${index}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover/project:translate-x-full transition-transform duration-1000"></div>
                        
                        <div className="flex items-start space-x-3 relative">
                          <div className="flex-shrink-0 p-2 bg-black/60 rounded-lg shadow-sm border border-white/10">
                            {project.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1 drop-shadow-md">{project.title}</h4>
                            <p className="text-sm text-gray-300 mb-2 drop-shadow-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {project.tech.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full border border-blue-400/30 relative overflow-hidden group/tech"
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover/tech:translate-x-full transition-transform duration-700"></div>
                                  <span className="relative">{tech}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced 3D Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${block.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Dark Soft Skills Section */}
        <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 shadow-3xl border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
          
          <h3 className="text-3xl font-bold text-center text-white mb-8 drop-shadow-lg relative">
            Soft Skills & <span className="text-teal-400 drop-shadow-lg">Abilities</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="group/skill p-6 bg-gradient-to-br from-gray-800/50 to-black/50 rounded-xl border-2 border-white/10 hover:border-teal-400/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-teal relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/10 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1500"></div>
                
                <div className="flex items-center space-x-4 mb-4 relative">
                  <div className="text-3xl drop-shadow-lg">{skill.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white drop-shadow-md">{skill.name}</h4>
                    <p className="text-sm text-gray-400">{skill.level}% Proficiency</p>
                  </div>
                </div>
                
                {/* Enhanced Progress Bar */}
                <div className="w-full bg-gray-700/50 rounded-full h-2 border border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer-slow"></div>
                  <div 
                    className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out shadow-glow-teal relative overflow-hidden"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Dark Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-3xl hover:shadow-glow-blue transform hover:-translate-y-1 transition-all duration-300 border border-white/20 relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <Github size={20} className="drop-shadow-lg relative" />
            <span className="drop-shadow-lg relative">View All Projects on GitHub</span>
            <ExternalLink size={20} className="drop-shadow-lg relative" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;