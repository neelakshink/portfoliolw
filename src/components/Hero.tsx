import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const starCanvasRef = useRef<HTMLCanvasElement>(null);

  const texts = [
    'Building Smart, Scalable, and Efficient Solutions.',
    'Python Developer & Automation Expert.',
    'Web Development Enthusiast.',
    'Creating the Future with Code.'
  ];

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

  useEffect(() => {
    const canvas = starCanvasRef.current;
    if (!canvas) return;
    const maybeCtx = canvas.getContext('2d');
    if (!maybeCtx) return;
    const ctx = maybeCtx;
    let animationId: number;
    const dpr = window.devicePixelRatio || 1;
    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Star properties
    const STAR_COUNT = 80;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.6,
      twinkle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.01
    }));
    function drawStars() {
      if (!ctx) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const star of stars) {
        // Twinkle effect
        const alpha = 0.7 + 0.3 * Math.sin(star.twinkle);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = '#FFD700';
        ctx.shadowColor = '#FFD700';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
        star.twinkle += star.speed;
      }
    }
    function animate() {
      drawStars();
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/neelakshi-kaundal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/neelakshi-kaundal', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:neelakshikaundal89@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <canvas
        ref={starCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      {/* Profile picture at top left */}
      <div className="absolute top-8 left-8 z-20">
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-yellow-300/60 to-yellow-500/80 p-1 shadow-lg shadow-yellow-400/30">
              <img 
                src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Neelakshi Kaundal" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="backdrop-blur-xl bg-white/10 border border-yellow-400/30 rounded-3xl shadow-2xl shadow-yellow-400/20 px-8 py-10 mx-auto max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-yellow-400 tracking-wide animate-fade-in drop-shadow-lg">
              NEELAKSHI KAUNDAL
          </h1>
            <p className="text-xl md:text-2xl text-yellow-200 font-medium mb-6 animate-fade-in-up">
              Creative Developer | Portfolio
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <button className="px-8 py-4 bg-yellow-400/90 text-black font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/40">
                <Download size={20} className="inline mr-2" />
                Download Resume
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 group"
              aria-label={link.label}
            >
              <link.icon size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
          ))}
        </div>

        <div className="animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-cyan-400 mx-auto cursor-pointer hover:text-cyan-300 transition-colors duration-300"
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;