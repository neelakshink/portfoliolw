import React, { useEffect, useRef } from 'react';
import { Code, Database, Server, Wrench, Cloud, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

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

    const skillCards = skillsRef.current?.querySelectorAll('.skill-card');
    skillCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 'Expert' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'Java', level: 'Intermediate' },
        { name: 'C++', level: 'Intermediate' },
      ]
    },
    {
      title: 'Web Development',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'React.js', level: 'Advanced' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'HTML5/CSS3', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Advanced' },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'PostgreSQL', level: 'Intermediate' },
        { name: 'MySQL', level: 'Intermediate' },
        { name: 'Redis', level: 'Beginner' },
      ]
    },
    {
      title: 'Tools & Frameworks',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 'Advanced' },
        { name: 'Docker', level: 'Intermediate' },
        { name: 'AWS', level: 'Intermediate' },
        { name: 'Linux', level: 'Advanced' },
        { name: 'Selenium', level: 'Advanced' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'AWS EC2', level: 'Intermediate' },
        { name: 'Heroku', level: 'Intermediate' },
        { name: 'Vercel', level: 'Advanced' },
        { name: 'Netlify', level: 'Advanced' },
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-pink-500 to-purple-500',
      skills: [
        { name: 'React Native', level: 'Beginner' },
        { name: 'Flutter', level: 'Beginner' },
        { name: 'Responsive Design', level: 'Advanced' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating efficient, scalable solutions across multiple technologies
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`skill-card opacity-0 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/30`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 mx-auto`}>
                <category.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-center mb-6 text-cyan-400">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      skill.level === 'Expert' ? 'bg-green-500/20 text-green-400' :
                      skill.level === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                      skill.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="wave-divider"></div>
    </section>
  );
};

export default Skills;