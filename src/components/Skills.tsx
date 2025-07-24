import React, { useState, useRef, useEffect } from 'react';
import { FaHtml5, FaJs, FaPython, FaReact, FaLinux, FaDocker, FaJenkins } from 'react-icons/fa';
import { SiFlask } from 'react-icons/si';
import { Server, Settings2 } from 'lucide-react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const techSections = [
  { name: 'HTML', icon: <FaHtml5 size={40} className="text-orange-500" />, color: 'from-orange-400 to-yellow-200' },
  { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" />, color: 'from-yellow-400 to-yellow-200' },
  { name: 'Python', icon: <FaPython size={40} className="text-blue-400" />, color: 'from-blue-400 to-blue-200' },
  { name: 'Flask', icon: <SiFlask size={40} className="text-gray-300" />, color: 'from-gray-700 to-gray-400' },
  { name: 'React', icon: <FaReact size={40} className="text-cyan-400 animate-spin-slow" />, color: 'from-cyan-400 to-blue-200' },
];

const devopsBlock = {
  name: 'DevOps',
  icon: <Settings2 size={48} className="text-green-400" />, // lucide-react Settings2 for CI/CD
  color: 'from-green-400 to-emerald-600',
};

const projectCards = [
  { title: 'Project One', desc: 'A cool DevOps project.', color: 'bg-gradient-to-br from-yellow-400 to-pink-400' },
  { title: 'Project Two', desc: 'Another awesome project.', color: 'bg-gradient-to-br from-blue-400 to-cyan-400' },
];

const techBlockColors = ['#212f3d', '#5d6d7e'];

const Skills = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [openProjectIdx, setOpenProjectIdx] = useState<number | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Animate cards on scroll
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
    const cards = cardsRef.current?.querySelectorAll('.animated-card');
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my core technologies and DevOps expertise
          </p>
        </div>
        {/* Tech Sections */}
        <div className="mb-16">
          <h3 className="text-4xl font-extrabold mb-8 text-center tracking-wide drop-shadow-lg" style={{ color: '#5dade2' }}>Programming Languages</h3>
          {/* Tech Cards in a row/grid like DevOps blocks */}
          <div className="flex flex-wrap justify-center gap-8">
          {techSections.map((tech, idx) => (
              <motion.div
                key={tech.name}
                className="group animated-card glass p-12 rounded-2xl flex flex-col items-center shadow-lg hover:scale-105 hover:shadow-[0_0_16px_4px_#22d3ee] hover:border-cyan-400 border border-gray-700/50 transition-all duration-300 min-w-[260px] max-w-[340px] w-full text-white relative overflow-hidden"
                style={{ background: techBlockColors[idx % 2] }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.1, type: 'spring' }}
              >
                {/* Ultra enhanced lightning effect with maximum light intensity */}
                {(tech.name === 'HTML' || tech.name === 'JavaScript' || tech.name === 'Python' || tech.name === 'Flask' || tech.name === 'React') && (
                  <>
                    {/* Ultra bright sparkles with maximum intensity */}
                    <span className="pointer-events-none absolute top-2 left-4 w-12 h-12 opacity-100 animate-flicker z-0">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M24 2L26.4 15.5L44 24L26.4 32.5L24 46L21.6 32.5L4 24L21.6 15.5L24 2Z" fill="#fff" fillOpacity="1">
                          <animate attributeName="opacity" values="1;0.05;1" dur="1.5s" repeatCount="indefinite"/>
                          <animate attributeName="scale" values="1;1.4;1" dur="1.5s" repeatCount="indefinite"/>
                        </path>
                      </svg>
                    </span>
                    <span className="pointer-events-none absolute bottom-4 right-6 w-10 h-10 opacity-90 animate-flicker z-0">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M20 2L22.4 13.5L38 20L22.4 26.5L20 38L17.6 26.5L2 20L17.6 15.5L20 2Z" fill="#fff" fillOpacity="0.95">
                          <animate attributeName="opacity" values="1;0.1;1" dur="1.2s" repeatCount="indefinite"/>
                          <animate attributeName="scale" values="1;1.5;1" dur="1.2s" repeatCount="indefinite"/>
                        </path>
                      </svg>
                    </span>
                    <span className="pointer-events-none absolute top-10 right-8 w-8 h-8 opacity-80 animate-flicker z-0">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 2L17.4 10.5L30 16L17.4 21.5L16 30L14.6 21.5L2 16L14.6 10.5L16 2Z" fill="#fff" fillOpacity="0.9">
                          <animate attributeName="opacity" values="1;0.15;1" dur="0.8s" repeatCount="indefinite"/>
                          <animate attributeName="scale" values="1;1.6;1" dur="0.8s" repeatCount="indefinite"/>
                        </path>
                      </svg>
                    </span>
                    {/* Additional ultra bright sparkles */}
                    <span className="pointer-events-none absolute top-6 left-8 w-7 h-7 opacity-70 animate-flicker z-0">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M14 1L15.4 9.5L26 14L15.4 18.5L14 27L12.6 18.5L2 14L12.6 9.5L14 1Z" fill="#fff" fillOpacity="0.85">
                          <animate attributeName="opacity" values="1;0.05;1" dur="1.8s" repeatCount="indefinite"/>
                          <animate attributeName="scale" values="1;1.7;1" dur="1.8s" repeatCount="indefinite"/>
                        </path>
                      </svg>
                    </span>
                    <span className="pointer-events-none absolute bottom-8 left-6 w-6 h-6 opacity-60 animate-flicker z-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L13 7L22 12L13 17L12 22L11 17L2 12L11 7L12 2Z" fill="#fff" fillOpacity="0.8">
                          <animate attributeName="opacity" values="1;0.1;1" dur="1.3s" repeatCount="indefinite"/>
                          <animate attributeName="scale" values="1;1.8;1" dur="1.3s" repeatCount="indefinite"/>
                        </path>
                      </svg>
                    </span>
                    {/* More sparkles for maximum effect */}
                    <span className="pointer-events-none absolute top-4 right-4 w-5 h-5 opacity-50 animate-flicker z-0">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 1L11 6L19 10L11 14L10 19L9 14L1 10L9 6L10 1Z" fill="#fff" fillOpacity="0.75">
                          <animate attributeName="opacity" values="1;0.2;1" dur="2.2s" repeatCount="indefinite"/>
                          <animate attributeName="scale" values="1;1.9;1" dur="2.2s" repeatCount="indefinite"/>
                        </path>
                      </svg>
                    </span>
                    <span className="pointer-events-none absolute bottom-6 right-4 w-4 h-4 opacity-40 animate-flicker z-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1L8.7 5.5L15 8L8.7 10.5L8 15L7.3 10.5L1 8L7.3 5.5L8 1Z" fill="#fff" fillOpacity="0.7">
                          <animate attributeName="opacity" values="1;0.15;1" dur="1.7s" repeatCount="indefinite"/>
                          <animate attributeName="scale" values="1;2.0;1" dur="1.7s" repeatCount="indefinite"/>
                        </path>
                      </svg>
                    </span>
                    {/* Ultra intense lightning glow in all corners */}
                    <div className="absolute bottom-0 left-0 w-24 h-20 bg-gradient-to-tr from-blue-300 via-cyan-200 to-white rounded-bl-2xl blur-xl opacity-100 z-0 transition-all duration-300 group-hover:opacity-100 group-hover:blur-[60px] group-hover:w-28 group-hover:h-24 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-20 bg-gradient-to-tl from-blue-300 via-cyan-200 to-white rounded-br-2xl blur-xl opacity-100 z-0 transition-all duration-300 group-hover:opacity-100 group-hover:blur-[60px] group-hover:w-28 group-hover:h-24 animate-pulse"></div>
                    <div className="absolute top-0 left-0 w-16 h-12 bg-gradient-to-br from-cyan-300 via-blue-200 to-white rounded-tl-2xl blur-lg opacity-80 z-0 transition-all duration-300 group-hover:opacity-100 group-hover:blur-[40px] animate-pulse"></div>
                    <div className="absolute top-0 right-0 w-16 h-12 bg-gradient-to-bl from-cyan-300 via-blue-200 to-white rounded-tr-2xl blur-lg opacity-80 z-0 transition-all duration-300 group-hover:opacity-100 group-hover:blur-[40px] animate-pulse"></div>
                    {/* Enhanced lightning streaks */}
                    <div className="absolute bottom-2 left-2 w-16 h-1 bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-80 animate-pulse"></div>
                    <div className="absolute bottom-2 right-2 w-16 h-1 bg-gradient-to-l from-transparent via-cyan-200 to-transparent opacity-80 animate-pulse"></div>
                    <div className="absolute top-2 left-2 w-12 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-60 animate-pulse"></div>
                    <div className="absolute top-2 right-2 w-12 h-1 bg-gradient-to-l from-transparent via-blue-200 to-transparent opacity-60 animate-pulse"></div>
                    {/* Diagonal lightning effects */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-transparent via-cyan-300 to-transparent opacity-50 animate-pulse rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-tl from-transparent via-cyan-300 to-transparent opacity-50 animate-pulse rounded-full"></div>
                  </>
                )}
              {tech.icon}
                <h3
                  className="mt-4 text-2xl font-bold font-grotesk transition-colors duration-300 group-hover:text-cyan-300"
                  style={{ color: tech.name === 'JavaScript' || tech.name === 'Flask' ? '#fff' : '#2471a3' }}
                >
                  {tech.name}
                </h3>
                <div className="flex gap-4 mt-6 relative font-dmsans">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-900 transition-all duration-300 hover:shadow-lg font-semibold"
                    style={{ minWidth: '140px', justifyContent: 'center' }}
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                  {/* Ultra enhanced white sparkle inside each block */}
                  <span className="absolute top-2 right-2 w-8 h-8 pointer-events-none animate-flicker z-20">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M16 1L17.6 10L30 16L17.6 22L16 31L14.4 22L2 16L14.4 10L16 1Z" fill="#fff" fillOpacity="1">
                        <animate attributeName="opacity" values="1;0.05;1" dur="0.8s" repeatCount="indefinite"/>
                        <animate attributeName="scale" values="1;1.5;1" dur="0.8s" repeatCount="indefinite"/>
                      </path>
                    </svg>
                  </span>
                </div>
              </motion.div>
              ))}
            </div>
        </div>
        {/* DevOps Cards - beautiful, animated, mobile screen style, with sparkle and per-card View Projects */}
        {/* The DevOps cards section has been removed as per the edit hint. */}
      </div>
      <div className="wave-divider"></div>
    </section>
  );
};

export default Skills;

