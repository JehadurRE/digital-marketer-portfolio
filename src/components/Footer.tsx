import { Mail, Linkedin, Github, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:adinur420.bio@gmail.com',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-secondary'
    },
    {
      icon: Github,
      label: 'Portfolio',
      href: '#',
      color: 'hover:text-accent'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gradient font-poppins mb-3">
                Adinur Rahman Pantho
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Digital Marketing Enthusiast passionate about driving growth through 
                data-driven strategies, creative content, and innovative campaigns.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-12 h-12 glass rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 animate-fade-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 adinur420.bio@gmail.com</p>
              <p>📞 +880 1784374314</p>
              <p>📍 Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground font-poppins">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Skills Highlight */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground font-poppins">
              Core Skills
            </h4>
            <div className="space-y-2">
              {['SEO & SEM', 'Google Analytics', 'Social Media', 'Content Strategy', 'Email Marketing'].map((skill, index) => (
                <div 
                  key={skill}
                  className="flex items-center space-x-2 animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-glass-border mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Adinur Rahman Pantho. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>for digital growth.</span>
          </div>

          {/* Back to Top */}
          <Button
            onClick={scrollToTop}
            size="sm"
            className="glass border-primary/30 text-foreground px-4 py-2 rounded-xl hover:border-primary/60 transition-all duration-300 group"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
            Back to Top
          </Button>
        </div>

        {/* Additional Footer Info */}
        <div className="mt-8 pt-8 border-t border-glass-border text-center">
          <p className="text-xs text-muted-foreground">
            This portfolio showcases real projects and achievements. All metrics and results are based on actual client work.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute top-8 right-8">
        <div className="w-1 h-20 glass rounded-full overflow-hidden">
          <div 
            className="w-full bg-gradient-primary transition-all duration-300"
            style={{ 
              height: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
            }}
          ></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;