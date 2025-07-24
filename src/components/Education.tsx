import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award, Users } from 'lucide-react';

const Education = () => {
  const educationRef = useRef<HTMLDivElement>(null);

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

    const educationCards = educationRef.current?.querySelectorAll('.education-card');
    educationCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      type: 'Education',
      title: 'Bachelor of Technology in Computer Science',
      institution: 'ABC University',
      location: 'New Delhi, India',
      duration: '2020 - 2024',
      grade: 'CGPA: 8.5/10',
      description: 'Specialized in Software Engineering and Data Structures. Active member of the Programming Club.',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      achievements: [
        'Dean\'s List for 3 consecutive semesters',
        'Winner of Inter-college Programming Contest',
        'President of Computer Science Society'
      ]
    },
    {
      type: 'Internship',
      title: 'Full Stack Developer Intern',
      institution: 'Tech Solutions Pvt Ltd',
      location: 'Bangalore, India',
      duration: 'Jun 2023 - Aug 2023',
      grade: 'Performance: Excellent',
      description: 'Developed and maintained web applications using React.js and Node.js. Worked on automation scripts and API integrations.',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      achievements: [
        'Reduced application load time by 40%',
        'Implemented automated testing suite',
        'Mentored 2 junior interns'
      ]
    },
    {
      type: 'Training',
      title: 'Python & AI/ML Bootcamp',
      institution: 'DataCamp Institute',
      location: 'Online',
      duration: 'Jan 2023 - Mar 2023',
      grade: 'Certification: A+',
      description: 'Intensive 12-week program covering Python, Machine Learning, and Data Analysis with hands-on projects.',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      achievements: [
        'Top 5% of cohort',
        'Completed 15+ real-world projects',
        'Peer programming mentor'
      ]
    },
    {
      type: 'Club Activity',
      title: 'Lead Developer - Tech Club',
      institution: 'ABC University',
      location: 'New Delhi, India',
      duration: '2022 - 2024',
      grade: 'Position: Team Lead',
      description: 'Led a team of 12 developers in organizing hackathons and technical workshops. Managed club\'s website and social media presence.',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      achievements: [
        'Organized 5+ successful hackathons',
        'Increased club membership by 150%',
        'Launched mentorship program'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Education & Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and professional development path
          </p>
        </div>

        <div ref={educationRef} className="relative">
          {/* Timeline line */}
          {/* Remove the vertical timeline line (usually a div with border-l or similar) from the Education & Experience section. */}
          
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`education-card opacity-0 relative mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/30 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                {/* Timeline dot */}
                <div className={`absolute top-8 w-6 h-6 bg-gradient-to-br ${item.color} rounded-full border-4 border-gray-900 hidden md:block ${
                  index % 2 === 0 ? 'right-[-44px]' : 'left-[-44px]'
                }`}></div>
                
                <div className="flex items-start mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mr-4 flex-shrink-0`}>
                    <item.icon size={28} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <span className="text-sm text-cyan-400 font-semibold uppercase tracking-wide">
                      {item.type}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-2">
                      {item.institution}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-cyan-400" />
                    {item.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-cyan-400" />
                    {item.location}
                  </div>
                  <div className="flex items-center">
                    <Award size={16} className="mr-2 text-cyan-400" />
                    {item.grade}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="wave-divider-reverse"></div>
    </section>
  );
};

export default Education;