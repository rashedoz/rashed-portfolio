import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Briefcase, 
  TrendingUp, 
  Layers, 
  Cpu, 
  Globe, 
  Rocket, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  Github,
  ExternalLink,
  Menu,
  X,
  MapPin
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'ventures', 'timeline', 'philosophy', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Ventures', id: 'ventures' },
    { name: 'Timeline', id: 'timeline' },
    { name: 'Philosophy', id: 'philosophy' },
  ];

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('hero')}>
            RM.
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-indigo-400 ${activeSection === link.id ? 'text-indigo-400' : 'text-slate-400'}`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/20"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-200 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-4 shadow-xl">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button 
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left py-2 text-slate-300 hover:text-indigo-400"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-indigo-400 font-medium"
              >
                Contact Me
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-600/10 blur-[120px] rounded-full"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-indigo-400 text-xs font-bold tracking-wide uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                Based in Dhaka, Bangladesh
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white">
                Rashed <span className="text-slate-500">Mazumder</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Software Engineer turned <span className="text-white font-semibold">Entrepreneur</span>. 
                Building Vertical SaaS, AI Automation, and eCommerce Tech.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                <button onClick={() => scrollToSection('ventures')} className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-all flex items-center gap-2">
                  View Ventures <ChevronRight size={18} />
                </button>
                <button onClick={() => scrollToSection('about')} className="px-8 py-4 bg-transparent border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all">
                  My Journey
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 text-slate-500">
                <a href="#" className="hover:text-white transition-colors"><Github size={24} /></a>
                <a href="#" className="hover:text-indigo-400 transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="hover:text-cyan-400 transition-colors"><Mail size={24} /></a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 order-1 lg:order-2 flex justify-center relative">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                   <img 
                    src="./Subject.jpg" 
                    alt="Rashed Mazumder" 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/400x400/1e293b/white?text=RM";
                    }}
                  />
                </div>
                
                {/* Floating Badges */}
                <div className="absolute -right-4 top-10 bg-slate-800/90 backdrop-blur border border-slate-700 p-3 rounded-xl shadow-xl animate-bounce delay-100">
                  <Code className="text-cyan-400" size={24} />
                </div>
                <div className="absolute -left-4 bottom-20 bg-slate-800/90 backdrop-blur border border-slate-700 p-3 rounded-xl shadow-xl animate-bounce delay-300">
                  <Rocket className="text-indigo-500" size={24} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About / Snapshot Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Journey Snapshot</h2>
              <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  <span className="text-white font-semibold text-xl">From Code to Company.</span> I started my career with a strong foundation in Computer Science, delivering over 365+ digital solutions. But writing code was just the beginning.
                </p>
                <p>
                  The shift happened when I realized the power of combining engineering precision with product vision. Today, I don't just build software; I build <span className="text-indigo-400 font-medium">businesses</span> that solve real problems in eCommerce, HR Tech, and Automation.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {['Vertical SaaS', 'AI Automation', 'eCommerce Tech', 'Product Strategy'].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-slate-800 text-indigo-300 rounded-full text-sm font-medium border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 transform hover:-translate-y-1 transition-transform">
                  <h3 className="text-4xl font-bold text-white mb-2">5+</h3>
                  <p className="text-sm text-slate-400 uppercase tracking-wider">Years Exp</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 transform hover:-translate-y-1 transition-transform delay-75">
                  <h3 className="text-4xl font-bold text-indigo-400 mb-2">365+</h3>
                  <p className="text-sm text-slate-400 uppercase tracking-wider">Solutions Delivered</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 transform hover:-translate-y-1 transition-transform delay-100">
                  <h3 className="text-4xl font-bold text-cyan-400 mb-2">18+</h3>
                  <p className="text-sm text-slate-400 uppercase tracking-wider">Team Size</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 transform hover:-translate-y-1 transition-transform delay-150">
                  <h3 className="text-4xl font-bold text-white mb-2">4</h3>
                  <p className="text-sm text-slate-400 uppercase tracking-wider">Ventures Launched</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-900 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Ventures</h2>
              <p className="text-slate-400 max-w-xl">
                My ecosystem of products and agencies. Scaling MiraiLit while expanding into SaaS and AI-first operations.
              </p>
            </div>
            <div className="hidden md:block h-px bg-slate-800 flex-grow ml-12 mb-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* MiraiLit */}
            <div className="group relative bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
              <div className="absolute top-6 right-6 p-2 bg-slate-800 rounded-lg group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Globe size={24} />
              </div>
              <div className="mb-6">
                <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase">Founding Entity</span>
                <h3 className="text-2xl font-bold text-white mt-2">MiraiLit Limited</h3>
                <p className="text-sm text-slate-500 mt-1">CEO & Managing Director</p>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed">
                A full-cycle software development agency grown to an 18+ member team. We are a strategic partner for eCommerce IT infrastructure, offering dev, branding, and BPO services.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-slate-800 rounded-md text-xs text-slate-300">Software Dev</span>
                <span className="px-3 py-1 bg-slate-800 rounded-md text-xs text-slate-300">Digital Marketing</span>
                <span className="px-3 py-1 bg-slate-800 rounded-md text-xs text-slate-300">BPO</span>
              </div>
            </div>

            {/* Aplicaro */}
            <div className="group relative bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="absolute top-6 right-6 p-2 bg-slate-800 rounded-lg group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                <Cpu size={24} />
              </div>
              <div className="mb-6">
                <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase">SaaS Product</span>
                <h3 className="text-2xl font-bold text-white mt-2">Aplicaro</h3>
                <p className="text-sm text-slate-500 mt-1">Founder</p>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed">
                An AI-powered Applicant Tracking System (ATS) built to streamline hiring. We use automation to help recruiters handle candidates smarter and faster.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-slate-800 rounded-md text-xs text-slate-300">HR Tech</span>
                <span className="px-3 py-1 bg-slate-800 rounded-md text-xs text-slate-300">AI Automation</span>
                <span className="px-3 py-1 bg-slate-800 rounded-md text-xs text-slate-300">SaaS</span>
              </div>
            </div>

            {/* ShopSupport */}
            <div className="group relative bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="absolute top-6 right-6 p-2 bg-slate-800 rounded-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Layers size={24} />
              </div>
              <div className="mb-6">
                <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">SaaS Product</span>
                <h3 className="text-2xl font-bold text-white mt-2">ShopSupport</h3>
                <p className="text-sm text-slate-500 mt-1">Co-Founder</p>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Specialized SaaS for eCommerce ticket and complaint management. Improving customer support workflows specifically for online businesses.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-slate-800 rounded-md text-xs text-slate-300">eCommerce</span>
                <span className="px-3 py-1 bg-slate-800 rounded-md text-xs text-slate-300">Support Ops</span>
              </div>
            </div>

            {/* LifeBasket */}
            <div className="group relative bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10">
              <div className="absolute top-6 right-6 p-2 bg-slate-800 rounded-lg group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <TrendingUp size={24} />
              </div>
              <div className="mb-6">
                <span className="text-xs font-bold tracking-wider text-pink-400 uppercase">Retail Operation</span>
                <h3 className="text-2xl font-bold text-white mt-2">LifeBasket</h3>
                <p className="text-sm text-slate-500 mt-1">Founder (Launched 2025)</p>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed">
                An active eCommerce shop in Bangladesh. This venture strengthens my "builder-operator" identity, allowing me to test systems in real-world commerce.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-slate-800 rounded-md text-xs text-slate-300">D2C</span>
                <span className="px-3 py-1 bg-slate-800 rounded-md text-xs text-slate-300">Operations</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Growth Timeline</h2>
            <p className="text-slate-400">The evolution from engineering to leadership.</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800"></div>

            {/* 2025 */}
            <div className="relative flex flex-col md:flex-row gap-8 mb-16 group">
              <div className="md:w-1/2 md:text-right order-2 md:order-1 pt-2">
                <h3 className="text-2xl font-bold text-white">Founded LifeBasket</h3>
                <p className="text-indigo-400 font-medium mb-2">2025</p>
                <p className="text-slate-400 text-sm">Launched a D2C eCommerce brand to apply technical systems to real-world operations.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-3 h-3 bg-indigo-500 rounded-full border-4 border-slate-900 z-10 group-hover:scale-150 transition-transform"></div>
              <div className="md:w-1/2 order-2 pl-8 md:pl-0"></div>
            </div>

             {/* MiraiLit */}
             <div className="relative flex flex-col md:flex-row gap-8 mb-16 group">
              <div className="md:w-1/2 order-2 md:order-1"></div>
              <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-3 h-3 bg-cyan-500 rounded-full border-4 border-slate-900 z-10 group-hover:scale-150 transition-transform"></div>
              <div className="md:w-1/2 order-2 pt-2 pl-8 md:pl-0">
                <h3 className="text-2xl font-bold text-white">Founded MiraiLit Limited</h3>
                <p className="text-cyan-400 font-medium mb-2">June 2022</p>
                <p className="text-slate-400 text-sm">Established a full-cycle software agency. Grew the team to 18+ members offering Development, Marketing, and BPO services.</p>
              </div>
            </div>

            {/* Engineering Era */}
            <div className="relative flex flex-col md:flex-row gap-8 mb-16 group">
              <div className="md:w-1/2 md:text-right order-2 md:order-1 pt-2">
                <h3 className="text-2xl font-bold text-white">Engineering Career</h3>
                <p className="text-indigo-400 font-medium mb-2">2019 - 2022</p>
                <p className="text-slate-400 text-sm">Worked as a Software Engineer delivering 365+ solutions. Built deep expertise in eCommerce ecosystems and scalable systems.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-3 h-3 bg-slate-500 rounded-full border-4 border-slate-900 z-10 group-hover:scale-150 transition-transform"></div>
              <div className="md:w-1/2 order-2 pl-8 md:pl-0"></div>
            </div>

            {/* Foundation */}
            <div className="relative flex flex-col md:flex-row gap-8 group">
              <div className="md:w-1/2 order-2 md:order-1"></div>
              <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-3 h-3 bg-slate-600 rounded-full border-4 border-slate-900 z-10 group-hover:scale-150 transition-transform"></div>
              <div className="md:w-1/2 order-2 pt-2 pl-8 md:pl-0">
                <h3 className="text-2xl font-bold text-white">BSc in CSE</h3>
                <p className="text-slate-500 font-medium mb-2">2019</p>
                <p className="text-slate-400 text-sm">Graduated from North South University. Entered the tech industry with a strong engineering base.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy & Skills */}
      <section id="philosophy" className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-indigo-900/20 to-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 p-16 bg-indigo-600/10 blur-3xl rounded-full"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">"Lead with curiosity, learn relentlessly, build fearlessly."</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12 relative z-10">
              <div className="p-6 bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-800">
                <div className="bg-indigo-500/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 text-indigo-400">
                  <Code size={24} />
                </div>
                <h3 className="font-bold text-white mb-2">Builder + Strategist</h3>
                <p className="text-slate-400 text-sm">Equally comfortable shipping code and steering product direction.</p>
              </div>

              <div className="p-6 bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-800">
                <div className="bg-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 text-cyan-400">
                  <Briefcase size={24} />
                </div>
                <h3 className="font-bold text-white mb-2">Hands-on Founder</h3>
                <p className="text-slate-400 text-sm">Stay close to development and product execution. No ivory towers.</p>
              </div>

              <div className="p-6 bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-800">
                <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 text-emerald-400">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-bold text-white mb-2">Value Focused</h3>
                <p className="text-slate-400 text-sm">Building vertical SaaS and AI products that deliver measurable business value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to build something great?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Whether it's scaling eCommerce infrastructure or discussing the future of AI automation, I'm always open to interesting conversations.
          </p>
          
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25 mb-16">
            <Mail size={20} /> Get in Touch
          </a>

          <div className="flex justify-center gap-8 mb-12">
             <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={24} /></a>
             <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors"><Linkedin size={24} /></a>
             <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors"><Globe size={24} /></a>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Rashed Mazumder. All rights reserved.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <MapPin size={14} /> Dhaka, Bangladesh
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
