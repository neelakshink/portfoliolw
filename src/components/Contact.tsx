import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Github, Instagram, Twitter, Heart, Sparkles, Star, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-400 drop-shadow-lg" size={24} />,
      label: 'Email',
      value: 'neelakshikaundal89@gmail.com',
      link: 'mailto:neelakshikaundal89@gmail.com',
      description: 'Send me an email',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      icon: <Phone className="text-green-400 drop-shadow-lg" size={24} />,
      label: 'Phone',
      value: '+91 12345677896',
      link: 'tel:+9112345677896',
      description: 'Call me directly',
      gradient: 'from-green-600 to-teal-600'
    },
    {
      icon: <Linkedin className="text-blue-500 drop-shadow-lg" size={24} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/public-profile/settings',
      description: 'Professional network',
      gradient: 'from-blue-700 to-indigo-700'
    },
    {
      icon: <MapPin className="text-red-400 drop-shadow-lg" size={24} />,
      label: 'Location',
      value: 'Punjab, India',
      link: '#',
      description: 'Based in Punjab',
      gradient: 'from-red-600 to-pink-600'
    }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, label: 'GitHub', link: '#', gradient: 'from-gray-700 to-gray-900' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', link: 'https://www.linkedin.com/public-profile/settings', gradient: 'from-blue-700 to-blue-900' },
    { icon: <Instagram size={20} />, label: 'Instagram', link: '#', gradient: 'from-pink-600 to-purple-700' },
    { icon: <Twitter size={20} />, label: 'Twitter', link: '#', gradient: 'from-blue-500 to-blue-700' }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Dark section background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/30 to-black/70"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Dark Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Get In <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text drop-shadow-lg">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-md">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Dark Contact Information */}
          <div className="space-y-8">
            <div className="bg-black/60 backdrop-blur-lg rounded-3xl p-8 shadow-3xl border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center relative">
                <Sparkles className="mr-3 text-purple-400 animate-spin-slow drop-shadow-lg" size={28} />
                Contact Information
              </h3>
              
              <div className="space-y-6 relative">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="group/item flex items-center space-x-4 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-500 hover:shadow-glow-blue hover:scale-105 border border-white/10 hover:border-gray-400/50 overflow-hidden relative"
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {/* Background animation */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover/item:opacity-20 transition-opacity duration-500`}></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className={`relative flex-shrink-0 p-3 bg-gradient-to-r ${item.gradient} rounded-xl shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300 overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-700"></div>
                      {item.icon}
                    </div>
                    <div className="flex-1 relative">
                      <h4 className="font-semibold text-white group-hover/item:text-blue-400 transition-colors duration-300 drop-shadow-md">
                        {item.label}
                      </h4>
                      <p className="text-gray-300 font-medium drop-shadow-sm">{item.value}</p>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Dark Social Media */}
            <div className="bg-black/60 backdrop-blur-lg rounded-3xl p-8 shadow-3xl border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center relative">
                <Star className="mr-3 text-yellow-400 animate-pulse drop-shadow-lg" size={28} />
                Follow Me
              </h3>
              
              <div className="flex space-x-4 relative">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`group/social relative flex items-center justify-center w-14 h-14 bg-gradient-to-r ${social.gradient} rounded-2xl text-white transition-all duration-500 hover:scale-125 hover:shadow-glow-blue overflow-hidden border border-white/20`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/social:translate-x-full transition-transform duration-700"></div>
                    
                    <div className="relative group-hover/social:scale-110 transition-transform duration-300 drop-shadow-lg">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Dark Quick Facts */}
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl p-8 text-white shadow-3xl overflow-hidden border border-white/20 group">
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Heart className="mr-3 animate-pulse drop-shadow-lg" size={28} />
                  Let's Connect!
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 group/fact">
                    <div className="w-3 h-3 bg-white rounded-full group-hover/fact:scale-125 transition-transform duration-300 shadow-glow-blue"></div>
                    <span className="group-hover/fact:translate-x-2 transition-transform duration-300 drop-shadow-md">Available for freelance projects</span>
                  </div>
                  <div className="flex items-center space-x-3 group/fact">
                    <div className="w-3 h-3 bg-white rounded-full group-hover/fact:scale-125 transition-transform duration-300 shadow-glow-blue"></div>
                    <span className="group-hover/fact:translate-x-2 transition-transform duration-300 drop-shadow-md">Open to collaboration opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3 group/fact">
                    <div className="w-3 h-3 bg-white rounded-full group-hover/fact:scale-125 transition-transform duration-300 shadow-glow-blue"></div>
                    <span className="group-hover/fact:translate-x-2 transition-transform duration-300 drop-shadow-md">Response time: Within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Dark Contact Form */}
          <div className="bg-black/60 backdrop-blur-lg rounded-3xl p-8 shadow-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center relative">
              <Send className="mr-3 text-blue-400 drop-shadow-lg" size={28} />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="group/input">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover/input:border-blue-400 hover:shadow-glow-blue backdrop-blur-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="group/input">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover/input:border-blue-400 hover:shadow-glow-blue backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="group/input">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-800/50 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none group-hover/input:border-blue-400 hover:shadow-glow-blue backdrop-blur-sm"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group/submit relative w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white rounded-2xl font-bold shadow-3xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-glow-blue disabled:opacity-50 disabled:cursor-not-allowed border border-white/20"
              >
                {/* Background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover/submit:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/submit:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative flex items-center space-x-3">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span className="drop-shadow-lg">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} className="group-hover/submit:translate-x-1 transition-transform duration-300 drop-shadow-lg" />
                      <span className="drop-shadow-lg">Send Message</span>
                    </>
                  )}
                </div>
              </button>
            </form>
          </div>
        </div>

        {/* Enhanced Dark Footer */}
        <div className="mt-20 text-center">
          <div className="bg-black/60 backdrop-blur-lg rounded-3xl p-8 shadow-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
            
            <div className="flex items-center justify-center space-x-2 text-gray-300 relative">
              <span className="drop-shadow-md">Made with</span>
              <Heart className="text-red-400 animate-pulse drop-shadow-lg" size={20} />
              <span className="drop-shadow-md">by Neelakshi Kaundal</span>
            </div>
            <p className="mt-2 text-sm text-gray-500 relative">
              © 2024 Neelakshi Kaundal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;