import { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, GraduationCap, Mail, Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import adiImage from '@/assets/adi.png';

const FloatingNavigation = () => {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home, href: '#' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'skills', label: 'Skills', icon: Code, href: '#skills' },
    { id: 'projects', label: 'Projects', icon: Briefcase, href: '#projects' },
    { id: 'education', label: 'Education', icon: GraduationCap, href: '#education' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id === 'hero' ? '' : item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        const sectionId = currentSection.id || 'hero';
        setActiveSection(sectionId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {/* Floating Navigation Bar */}
      <nav className="fixed top-4  transform -translate-x-1/2 z-50 animate-slide-up w-full max-w-7xl px-4">
        <div className="glass-strong rounded-2xl px-3 md:px-6 py-3 border border-white/20 shadow-2xl mx-auto max-w-fit">
          <div className="flex items-center justify-between space-x-2 md:space-x-6">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={adiImage} 
                  alt="Adinur"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-poppins font-semibold text-foreground hidden sm:block text-sm md:text-base">
                Adinur
              </span>
            </div>

            {/* Desktop Navigation - Hidden on medium and below */}
            <div className="hidden xl:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-2 rounded-xl transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                  </div>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-xl animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Medium Screen Navigation - Icon only */}
            <div className="hidden md:flex xl:hidden items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative p-2 rounded-xl transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                  title={item.label}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-4 h-4" />
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-xl animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2 flex-shrink-0">
              {/* Theme Toggle */}
              <Button
                size="sm"
                variant="ghost"
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl glass hover:bg-white/10 transition-all duration-300 flex-shrink-0"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-yellow-500" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-500" />
                )}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden w-9 h-9 rounded-xl glass hover:bg-white/10 transition-all duration-300 flex-shrink-0"
              >
                {isMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-primary rounded-full transition-all duration-300"
               style={{ width: `${scrollProgress}%` }}>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-80 max-w-[90vw] transition-all duration-300 ${
          isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <div className="glass-strong rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10 border border-primary/20'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  
                  {/* Active dot */}
                  {activeSection === item.id && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Circular Progress Indicator (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative w-14 h-14">
          {/* Background Circle */}
          <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 56 56">
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-muted-foreground/20"
            />
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="url(#progress-gradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 24}`}
              strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
              className="transition-all duration-300"
            />
            <defs>
              <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(217 91% 59%)" />
                <stop offset="100%" stopColor="hsl(316 73% 52%)" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute inset-2 glass-strong rounded-full flex items-center justify-center text-primary hover:scale-110 transition-all duration-300 group"
          >
            <Home className="w-5 h-5 group-hover:text-accent transition-colors duration-300" />
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingNavigation;