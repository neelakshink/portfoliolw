import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Code, Zap, Database, Server, Settings2, Brain, Sparkles, Bot } from 'lucide-react';
import { FaDocker, FaLinux, FaJenkins } from 'react-icons/fa';
import { SiMongodb, SiOpenai, SiAnthropic, SiGoogle } from 'react-icons/si';
import DockerImg1 from './asset/WhatsApp Image 2025-07-17 at 00.57.24.jpeg';
import DockerImg2 from './asset/WhatsApp Image 2025-07-17 at 00.57.24 (1).jpeg';
import DockerImg3 from './asset/WhatsApp Image 2025-07-17 at 00.57.24 (2).jpeg';
import DockerImg4 from './asset/WhatsApp Image 2025-07-17 at 00.57.24 (3).jpeg';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const aiProjectsRef = useRef<HTMLDivElement>(null);
  const [showDockerModal, setShowDockerModal] = useState(false);
  // Add state for selected image and zoom level
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

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

    const projectCards = document.querySelectorAll('.project-card');
    projectCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Docker',
      description: 'Docker is a leading containerization platform that enables developers to package applications and their dependencies into portable containers. It simplifies deployment, scaling, and management of microservices across environments, making DevOps workflows faster and more reliable.',
      images: [
        'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
        'https://cdn.iconscout.com/icon/free/png-256/docker-226091.png',
        'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg'
      ],
      tags: ['Containers', 'DevOps', 'Microservices'],
      gradient: 'from-yellow-400 to-pink-400',
      icon: <FaDocker size={20} className="text-blue-400" />, 
      liveUrl: 'https://www.docker.com/',
      githubUrl: 'https://github.com/docker'
    },
    {
      title: 'Linux',
      description: 'Linux is a powerful open-source operating system that runs the majority of servers, supercomputers, and cloud infrastructure worldwide. Known for its stability, security, and flexibility, Linux is the backbone of modern computing and DevOps automation.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png',
      tags: ['OS', 'Servers', 'Open Source'],
      gradient: 'from-blue-400 to-cyan-400',
      icon: <FaLinux size={20} className="text-yellow-200" />,
      liveUrl: 'https://www.linux.org/',
      githubUrl: 'https://github.com/torvalds/linux'
    },
    {
      title: 'Jenkins',
      description: 'Automation server for building, testing, and deploying software.',
      image: 'https://www.jenkins.io/images/logos/jenkins/jenkins.png',
      tags: ['CI/CD', 'Automation', 'Pipelines'],
      gradient: 'from-yellow-400 to-pink-400',
      icon: <FaJenkins size={20} className="text-red-400" />,
      liveUrl: 'https://www.jenkins.io/',
      githubUrl: 'https://github.com/jenkinsci/jenkins'
    },
    {
      title: 'Kubernetes',
      description: 'Container orchestration platform for automating deployment, scaling, and management.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
      tags: ['Orchestration', 'Containers', 'Cloud'],
      gradient: 'from-blue-400 to-cyan-400',
      icon: <Server size={20} className="text-blue-300" />,
      liveUrl: 'https://kubernetes.io/',
      githubUrl: 'https://github.com/kubernetes/kubernetes'
    },
    {
      title: 'MongoDB',
      description: 'MongoDB is a popular NoSQL database designed for high performance, scalability, and flexibility. It stores data in JSON-like documents, making it ideal for modern applications that require fast development cycles, real-time analytics, and horizontal scaling.',
      image: 'https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png',
      tags: ['Database', 'NoSQL', 'Scalable'],
      gradient: 'from-yellow-400 to-pink-400',
      icon: <SiMongodb size={20} className="text-green-400" />,
      liveUrl: 'https://www.mongodb.com/',
      githubUrl: 'https://github.com/mongodb/mongo'
    },
    {
      title: 'CI-CD Pipeline',
      description: 'Automated process for continuous integration and continuous delivery.',
      image: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
      tags: ['CI/CD', 'Automation', 'DevOps'],
      gradient: 'from-blue-400 to-cyan-400',
      icon: <Settings2 size={20} className="text-green-400" />,
      liveUrl: 'https://en.wikipedia.org/wiki/CI/CD',
      githubUrl: 'https://github.com/topics/ci-cd'
    },
  ];

  const aiProjects = [
    {
      title: 'OpenAI GPT',
      description: 'Advanced language model for natural language processing, text generation, and conversational AI. Powers applications with human-like text understanding and generation capabilities.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
      tags: ['LLM', 'NLP', 'AI'],
      gradient: 'from-green-400 to-emerald-400',
      icon: <SiOpenai size={20} className="text-green-400" />,
      liveUrl: 'https://openai.com/',
      githubUrl: 'https://github.com/openai'
    },
    {
      title: 'Claude AI',
      description: 'Anthropic\'s advanced AI assistant designed for helpful, harmless, and honest interactions. Specializes in reasoning, analysis, and creative content generation.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Anthropic_logo.svg',
      tags: ['AI Assistant', 'Reasoning', 'Safety'],
      gradient: 'from-purple-400 to-pink-400',
      icon: <SiAnthropic size={20} className="text-purple-400" />,
      liveUrl: 'https://www.anthropic.com/',
      githubUrl: 'https://github.com/anthropics'
    },
    {
      title: 'Google Gemini',
      description: 'Google\'s multimodal AI model that can understand and generate text, images, audio, and video. Designed for complex reasoning and creative tasks.',
      image: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_24x24_color.png',
      tags: ['Multimodal', 'Google AI', 'Reasoning'],
      gradient: 'from-blue-400 to-cyan-400',
      icon: <SiGoogle size={20} className="text-blue-400" />,
      liveUrl: 'https://ai.google.dev/',
      githubUrl: 'https://github.com/google'
    },
    {
      title: 'LangChain',
      description: 'Framework for developing applications powered by language models. Enables building complex AI applications with chains, agents, and memory systems.',
      image: 'https://python.langchain.com/img/favicon.ico',
      tags: ['Framework', 'LLM', 'Agents'],
      gradient: 'from-orange-400 to-red-400',
      icon: <Brain size={20} className="text-orange-400" />,
      liveUrl: 'https://python.langchain.com/',
      githubUrl: 'https://github.com/langchain-ai/langchain'
    },
    {
      title: 'AutoGen',
      description: 'Microsoft\'s framework for building multi-agent conversational AI systems. Enables autonomous agents to collaborate and solve complex tasks.',
      image: 'https://microsoft.github.io/autogen/assets/img/logo.png',
      tags: ['Multi-Agent', 'Microsoft', 'Autonomous'],
      gradient: 'from-indigo-400 to-purple-400',
      icon: <Bot size={20} className="text-indigo-400" />,
      liveUrl: 'https://microsoft.github.io/autogen/',
      githubUrl: 'https://github.com/microsoft/autogen'
    },
    {
      title: 'Agentic AI',
      description: 'Next-generation AI systems that can autonomously plan, execute, and adapt to achieve complex goals. These intelligent agents combine reasoning, learning, and decision-making capabilities to solve problems independently.',
      image: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
      tags: ['Autonomous', 'Planning', 'Adaptive'],
      gradient: 'from-purple-400 to-pink-400',
      icon: <Brain size={20} className="text-purple-400" />,
      liveUrl: 'https://en.wikipedia.org/wiki/Artificial_general_intelligence',
      githubUrl: 'https://github.com/topics/agentic-ai'
    },
    {
      title: 'GenAI',
      description: 'Generative AI technologies that create new content including text, images, audio, and video. These models learn patterns from vast datasets to generate human-like creative outputs and assist in content creation.',
      image: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
      tags: ['Generative', 'Creative', 'AI'],
      gradient: 'from-teal-400 to-cyan-400',
      icon: <Sparkles size={20} className="text-teal-400" />,
      liveUrl: 'https://en.wikipedia.org/wiki/Generative_artificial_intelligence',
      githubUrl: 'https://github.com/topics/generative-ai'
    },
  ];

  // Example Docker projects for the modal
  const dockerProjects = [
    {
      name: 'Dockerized Node.js App',
      description: 'A Node.js application running in a Docker container with multi-stage builds.',
      link: 'https://github.com/example/docker-node-app'
    },
    {
      name: 'Fullstack App with Docker Compose',
      description: 'A fullstack MERN app orchestrated with Docker Compose.',
      link: 'https://github.com/example/docker-mern-app'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            DevOps
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of my latest work and creative solutions
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card glass opacity-0 bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/30 group max-w-lg min-w-[320px] p-8`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1, type: 'spring' }}
            >
              <div className="relative overflow-hidden flex flex-col items-center justify-center">
                {/* If Docker card, show all images in a row */}
                {project.title === 'Docker' ? (
                  <div className="flex flex-row items-center justify-center gap-2 w-full py-2">
                    {project.images && project.images.map((img, i) => (
                      <img key={i} src={img} alt={`Docker logo ${i+1}`} className="object-contain w-12 h-12" />
                    ))}
                  </div>
                ) : (
                <img 
                  src={project.image} 
                  alt={project.title}
                    className="object-contain transition-transform duration-300 group-hover:scale-110 w-24 h-24"
                />
                )}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              <div className="p-6 py-3 px-2"> 
                {/* Always show the title, especially for Docker */}
                <h3 className="text-base font-semibold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 justify-center font-grotesk">
                  {project.icon}
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs mb-4 line-clamp-3 font-dmsans">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-0.5 bg-gray-700/50 text-cyan-400 text-[10px] rounded-full border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 items-center">
                  {/* For Docker card, show images next to where View Code button was */}
                  {project.title === 'Docker' && project.images && (
                    <div className="flex flex-row gap-1 items-center">
                      {project.images.map((img, i) => (
                        <img key={i} src={img} alt={`Docker logo ${i+1}`} className="object-contain w-7 h-7" />
                      ))}
                    </div>
                  )}
                  {/* Add View Project button for Docker */}
                  {project.title === 'Docker' && (
                    <div className="flex flex-col items-center w-full mb-2">
                      <div className="flex flex-row items-center justify-center w-full gap-4 mb-2">
                        <span className="text-xl font-bold text-cyan-400">DOCKER IN DOCKER</span>
                        <button
                          onClick={() => setShowDockerModal(true)}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 ml-4"
                        >
                          View Project
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Remove the View All Projects button */}
        {/* <div className="text-center mt-12">
          <a
            href="https://github.com/neelakshi-kaundal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50"
          >
            <Github size={20} className="mr-2" />
            View All Projects
          </a>
        </div> */}

        {/* Divider for next slide */}
        <div className="flex justify-center mb-8">
          <div className="w-2/3 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full opacity-70"></div>
        </div>
        {/* Agentic AI & Gen AI Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Agentic AI & Gen AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence and generative AI technologies
            </p>
            <p className="text-lg text-purple-300 mt-4 font-semibold">This is the next slide.</p>
          </div>

          <div ref={aiProjectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiProjects.map((project, index) => {
              // Make LangChain, AutoGen, Agentic AI, GenAI cards smaller
              const smallCards = ['LangChain', 'AutoGen', 'Agentic AI', 'GenAI'];
              const isSmall = smallCards.includes(project.title);
              return (
                <motion.div
                  key={index}
                  className={`project-card glass opacity-0 bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 border border-gray-700/50 hover:border-purple-500/30 group max-w-lg min-w-[320px] p-8`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.1, type: 'spring' }}
                >
                  <div className="relative overflow-hidden flex flex-col items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`object-contain transition-transform duration-300 group-hover:scale-110 w-32 h-32`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                  <div className={`p-6 ${isSmall ? 'py-3 px-2' : ''}`}> 
                    <h3 className={`text-xl font-semibold mb-3 text-purple-400 group-hover:text-purple-300 transition-colors duration-300 flex items-center gap-2 ${isSmall ? 'text-base' : ''} font-grotesk`}>
                      {project.icon}
                      {project.title}
                    </h3>
                    <p className={`text-gray-300 text-sm mb-4 line-clamp-3 font-dmsans ${isSmall ? 'text-xs' : ''}`}>
                      {project.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 mb-6 ${isSmall ? 'mb-3' : ''}`}>
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`px-3 py-1 bg-gray-700/50 text-purple-400 text-xs rounded-full border border-purple-500/30 ${isSmall ? 'px-2 py-0.5 text-[10px]' : ''}`}
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
                        className={`flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 ${isSmall ? 'px-2 py-1 text-xs' : ''}`}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Project
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-4 py-2 border border-gray-600 text-gray-300 text-sm rounded-full hover:border-purple-500 hover:text-purple-400 transition-all duration-300 ${isSmall ? 'px-2 py-1 text-xs' : ''}`}
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* AI & Machine Learning Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              AI & Machine Learning
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Core frameworks and libraries for artificial intelligence and machine learning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI/ML Tool Cards */}
            {[
              {
                title: 'TensorFlow',
                description: 'End-to-end open-source platform for machine learning, deep learning, and neural networks.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
                tags: ['Deep Learning', 'ML', 'Open Source'],
                gradient: 'from-yellow-400 to-orange-400',
                icon: <Brain size={20} className="text-yellow-500" />, 
                liveUrl: 'https://www.tensorflow.org/',
                githubUrl: 'https://github.com/tensorflow/tensorflow'
              },
              {
                title: 'PyTorch',
                description: 'Flexible deep learning framework for research and production, developed by Facebook AI.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png',
                tags: ['Deep Learning', 'Research', 'Production'],
                gradient: 'from-red-400 to-orange-400',
                icon: <Brain size={20} className="text-red-400" />, 
                liveUrl: 'https://pytorch.org/',
                githubUrl: 'https://github.com/pytorch/pytorch'
              },
              {
                title: 'Scikit-learn',
                description: 'Simple and efficient tools for predictive data analysis and classical machine learning.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
                tags: ['ML', 'Data Analysis', 'Python'],
                gradient: 'from-blue-400 to-cyan-400',
                icon: <Brain size={20} className="text-blue-400" />, 
                liveUrl: 'https://scikit-learn.org/',
                githubUrl: 'https://github.com/scikit-learn/scikit-learn'
              },
              {
                title: 'Keras',
                description: 'User-friendly neural network API, written in Python and capable of running on top of TensorFlow.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg',
                tags: ['Neural Networks', 'API', 'Python'],
                gradient: 'from-pink-400 to-red-400',
                icon: <Brain size={20} className="text-pink-400" />, 
                liveUrl: 'https://keras.io/',
                githubUrl: 'https://github.com/keras-team/keras'
              },
              {
                title: 'Hugging Face',
                description: 'Leading platform for natural language processing, transformers, and open-source AI models.',
                image: 'https://huggingface.co/front/assets/huggingface_logo.svg',
                tags: ['NLP', 'Transformers', 'Models'],
                gradient: 'from-yellow-400 to-pink-400',
                icon: <Brain size={20} className="text-yellow-400" />, 
                liveUrl: 'https://huggingface.co/',
                githubUrl: 'https://github.com/huggingface/transformers'
              },
              {
                title: 'OpenCV',
                description: 'Open-source computer vision and machine learning software library for real-time applications.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg',
                tags: ['Computer Vision', 'ML', 'Open Source'],
                gradient: 'from-teal-400 to-cyan-400',
                icon: <Brain size={20} className="text-teal-400" />, 
                liveUrl: 'https://opencv.org/',
                githubUrl: 'https://github.com/opencv/opencv'
              },
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="project-card glass opacity-0 bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-700/50 hover:border-blue-500/30 group max-w-lg min-w-[320px] p-8"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1, type: 'spring' }}
              >
                <div className="relative overflow-hidden flex flex-col items-center justify-center">
                  <img 
                    src={tool.image} 
                    alt={tool.title}
                    className="object-contain transition-transform duration-300 group-hover:scale-110 w-32 h-32"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${tool.gradient} opacity-60`}></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                <div className="p-6 py-3 px-2"> 
                  <h3 className="text-base font-semibold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 font-grotesk">
                    {tool.icon}
                    {tool.title}
                  </h3>
                  <p className="text-gray-300 text-xs mb-4 line-clamp-3 font-dmsans">
                    {tool.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tool.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-0.5 bg-gray-700/50 text-blue-400 text-[10px] rounded-full border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={tool.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-2 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Project
                    </a>
                    <a
                      href={tool.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-2 py-1 border border-gray-600 text-gray-300 text-xs rounded-full hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* View Projects Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/neelakshi-kaundal?tab=repositories&q=machine+learning&type=&language="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50"
            >
              <Github size={20} className="mr-2" />
              View Projects
            </a>
          </div>
        </div>
        {/* AWS Cloud Services Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              AWS Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key AWS services for scalable, secure, and modern cloud solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AWS Service Cards */}
            {[
              {
                title: 'EC2',
                description: 'Scalable virtual servers in the cloud for running applications securely and efficiently.',
                image: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
                tags: ['Compute', 'Scalable', 'Secure'],
                gradient: 'from-yellow-400 to-orange-400',
                icon: <Server size={20} className="text-yellow-500" />, 
                liveUrl: 'https://aws.amazon.com/ec2/',
                githubUrl: 'https://github.com/aws/amazon-ec2'
              },
              {
                title: 'S3',
                description: 'Highly durable and scalable object storage for data backup, archiving, and analytics.',
                image: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
                tags: ['Storage', 'Durable', 'Scalable'],
                gradient: 'from-blue-400 to-cyan-400',
                icon: <Database size={20} className="text-blue-400" />, 
                liveUrl: 'https://aws.amazon.com/s3/',
                githubUrl: 'https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-s3'
              },
              {
                title: 'Lambda',
                description: 'Run code without provisioning or managing servers. Event-driven, serverless compute service.',
                image: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
                tags: ['Serverless', 'Event-driven', 'Compute'],
                gradient: 'from-green-400 to-emerald-400',
                icon: <Zap size={20} className="text-green-400" />, 
                liveUrl: 'https://aws.amazon.com/lambda/',
                githubUrl: 'https://github.com/aws/aws-lambda-dotnet'
              },
              {
                title: 'RDS',
                description: 'Managed relational database service supporting several database engines for scalable applications.',
                image: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
                tags: ['Database', 'Managed', 'Scalable'],
                gradient: 'from-purple-400 to-pink-400',
                icon: <Database size={20} className="text-purple-400" />, 
                liveUrl: 'https://aws.amazon.com/rds/',
                githubUrl: 'https://github.com/aws/amazon-rds'
              },
              {
                title: 'CloudFront',
                description: 'Content delivery network (CDN) for fast, secure delivery of data, videos, and APIs globally.',
                image: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
                tags: ['CDN', 'Global', 'Secure'],
                gradient: 'from-cyan-400 to-blue-400',
                icon: <ExternalLink size={20} className="text-cyan-400" />, 
                liveUrl: 'https://aws.amazon.com/cloudfront/',
                githubUrl: 'https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cloudfront'
              },
              {
                title: 'DynamoDB',
                description: 'Fast and flexible NoSQL database service for single-digit millisecond performance at any scale.',
                image: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
                tags: ['NoSQL', 'Fast', 'Scalable'],
                gradient: 'from-teal-400 to-cyan-400',
                icon: <Database size={20} className="text-teal-400" />, 
                liveUrl: 'https://aws.amazon.com/dynamodb/',
                githubUrl: 'https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-dynamodb'
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="project-card glass opacity-0 bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 border border-gray-700/50 hover:border-yellow-500/30 group max-w-lg min-w-[320px] p-8"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1, type: 'spring' }}
              >
                <div className="relative overflow-hidden flex flex-col items-center justify-center">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="object-contain transition-transform duration-300 group-hover:scale-110 w-32 h-32"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                <div className="p-6 py-3 px-2"> 
                  <h3 className="text-base font-semibold mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2 font-grotesk">
                    {service.icon}
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-xs mb-4 line-clamp-3 font-dmsans">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {service.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-0.5 bg-gray-700/50 text-yellow-400 text-[10px] rounded-full border border-yellow-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={service.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Service
                    </a>
                    <a
                      href={service.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-2 py-1 border border-gray-600 text-gray-300 text-xs rounded-full hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300"
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="wave-divider-reverse"></div>

      {/* Docker Modal/Overlay */}
      {showDockerModal && !selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-3xl w-full relative flex flex-col items-center">
            <button
              onClick={() => setShowDockerModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl"
            >
              &times;
            </button>
            <div className="flex flex-row flex-wrap items-center justify-center gap-8 mt-8 mb-4 w-full">
              {[DockerImg1, DockerImg2, DockerImg3, DockerImg4].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Docker asset ${i+1}`}
                  className="object-contain w-72 h-72 rounded-xl shadow-2xl border-4 border-cyan-400 cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() => { setSelectedImage(img); setZoom(1); setShowDockerModal(false); }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Add a modal for the selected image with zoom controls */}
      {selectedImage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black" style={{background: 'rgba(0,0,0,1)'}}>
          <div className="relative flex flex-col items-center">
            <button
              onClick={() => { setSelectedImage(null); setShowDockerModal(true); }}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-3xl z-10"
            >
              &times;
            </button>
            <div className="flex flex-row items-center gap-6 mt-8">
              <button
                onClick={() => setZoom(z => Math.max(0.5, z - 0.2))}
                className="px-4 py-2 bg-cyan-600 text-white rounded-full text-2xl font-bold hover:bg-cyan-700"
              >
                -
              </button>
              <img
                src={selectedImage}
                alt="Zoomed Docker"
                style={{ width: `${zoom * 400}px`, height: `${zoom * 400}px`, maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', borderRadius: '1rem', boxShadow: '0 0 40px #06b6d4' }}
              />
              <button
                onClick={() => setZoom(z => Math.min(3, z + 0.2))}
                className="px-4 py-2 bg-cyan-600 text-white rounded-full text-2xl font-bold hover:bg-cyan-700"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;