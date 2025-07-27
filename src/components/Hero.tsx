import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown, Server, Container, Zap } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';

// 3D Rotating DevOps Icon Component
const RotatingDevOpsIcon = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial 
        color="#00FFFF" 
        emissive="#004444"
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

// Floating Particles Component
const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00FFFF" transparent opacity={0.6} />
    </points>
  );
};

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const texts = [
    'DevOps Engineer',
    'Cloud-Native Backend Engineer',
    'Automation Enthusiast',
    'Infrastructure Architect'
  ];

  // Typewriter effect
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = texts[textIndex];

    if (!isDeleting && charIndex < currentFullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentFullText.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }
  }, [charIndex, isDeleting, textIndex, texts]);

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/neelakshi-kaundal', 
      label: 'GitHub',
      color: 'hover:text-purple-400 hover:shadow-purple-500/50'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/neelakshi-kaundal', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400 hover:shadow-blue-500/50'
    },
    { 
      icon: Mail, 
      href: 'mailto:neelakshikaundal89@gmail.com', 
      label: 'Email',
      color: 'hover:text-cyan-400 hover:shadow-cyan-500/50'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F0F0F 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0F0F0F 100%)'
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Constellation Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            }}
          />
        ))}
      </svg>

      {/* 3D Scene */}
      <div className="absolute top-20 right-20 w-32 h-32 hidden lg:block">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00FFFF" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
            <RotatingDevOpsIcon />
            <FloatingParticles />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Picture */}
        <motion.div 
          className="mb-8 flex justify-center"
          variants={itemVariants}
        >
          <motion.div 
            className="relative w-40 h-40 rounded-full overflow-hidden"
            whileHover={{ 
              scale: 1.1, 
              rotateY: 15,
              rotateX: 5,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 p-1 animate-pulse">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <img 
                  src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                  alt="Neelakshi Kaundal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Neon Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-yellow-400/20 blur-xl animate-pulse"></div>
          </motion.div>
        </motion.div>

        {/* Name with 3D Effect */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 tracking-wide"
          variants={itemVariants}
          style={{
            background: 'linear-gradient(135deg, #00FFFF 0%, #8B5CF6 50%, #FFD700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
          }}
        >
          NEELAKSHI KAUNDAL
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <div className="text-2xl md:text-3xl text-gray-300 mb-2 font-light">
            <span className="text-cyan-400 font-semibold">
              {currentText}
            </span>
            <span className="animate-pulse text-yellow-400">|</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-400">
            <span className="flex items-center gap-2">
              <Server size={20} className="text-cyan-400" />
              DevOps
            </span>
            <span className="flex items-center gap-2">
              <Container size={20} className="text-purple-400" />
              Cloud-Native
            </span>
            <span className="flex items-center gap-2">
              <Zap size={20} className="text-yellow-400" />
              Automation
            </span>
          </div>
        </motion.div>

        {/* Professional Bio */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Building{' '}
          <span className="text-cyan-400 font-semibold">resilient</span>,{' '}
          <span className="text-purple-400 font-semibold">scalable</span>, and{' '}
          <span className="text-yellow-400 font-semibold">automated</span>{' '}
          cloud infrastructure with passion for CI/CD, containers, and backend architecture.
        </motion.p>

        {/* Interactive Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              🚀 View Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          <motion.button
            className="group relative px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-yellow-400 hover:text-black"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download size={20} />
              📄 Download Resume
            </span>
            <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-8 mb-16"
          variants={itemVariants}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 transition-all duration-300 ${link.color}`}
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.label}
            >
              <link.icon size={28} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="animate-bounce cursor-pointer"
          variants={itemVariants}
          onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown 
            size={40} 
            className="text-cyan-400 mx-auto hover:text-cyan-300 transition-colors duration-300"
          />
          <p className="text-gray-400 text-sm mt-2">Scroll to explore</p>
        </motion.div>
      </motion.div>

      {/* Glassmorphism Cards - Floating Tech Icons */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Container size={32} className="text-cyan-400" />
        </motion.div>
      </div>

      <div className="absolute top-1/3 left-20 hidden lg:block">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Server size={32} className="text-purple-400" />
        </motion.div>
      </div>

      <div className="absolute bottom-1/3 right-20 hidden lg:block">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Zap size={32} className="text-yellow-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;