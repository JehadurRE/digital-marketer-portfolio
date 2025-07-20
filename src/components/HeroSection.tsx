import { Download, Briefcase, ArrowDown, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import adiImage from '@/assets/adi.png';

const HeroSection = () => {
  const handleDownloadCV = () => {
    // Create a temporary download link for CV
    const link = document.createElement('a');
    link.href = 'https://github.com/JehadurRE/digital-marketer-portfolio/raw/refs/heads/main/pdf/ADINUR%20RAHMAN%20PANTHO_DM.pdf'; // Replace with actual CV file path
    link.download = 'Adinur_Rahman_Pantho_CV.pdf';
    link.click();
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Digital Marketing Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-6 h-6 border-2 border-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-secondary rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 border border-accent rotate-45 animate-float delay-500"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-purple rounded-full animate-float delay-300"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Glass Card Container */}
        <div className="glass-strong rounded-3xl p-8 md:p-12 animate-scale-in">
          {/* Avatar/Profile */}
          <div className="w-32 h-32 mx-auto mb-8 glass rounded-full flex items-center justify-center animate-pulse-glow">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src={adiImage} 
                alt="Adinur Rahman Pantho"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-4 font-poppins animate-slide-up">
            Adinur Rahman Pantho
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-primary mb-4 font-inter font-medium animate-slide-up delay-200">
            Digital Marketing Enthusiast
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-300">
            Driving Growth with Strategy, SEO & Creativity
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-500">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="btn-glow bg-gradient-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-2xl min-w-[160px]"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Hire Me
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={handleDownloadCV}
              className="glass border-primary/30 text-foreground px-8 py-4 text-lg font-semibold rounded-2xl min-w-[160px] hover:border-primary/60 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Social Links Preview */}
          <div className="flex justify-center gap-4 mt-8 animate-slide-up delay-700">
            <Button
              size="sm"
              variant="outline"
              className="glass border-primary/30 hover:border-primary/60 hover:bg-primary/10 rounded-full p-3 min-w-0 w-12 h-12 transition-all duration-300"
              onClick={() => window.open('mailto:adinur@example.com', '_blank')}
            >
              <Mail className="w-5 h-5" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="glass border-primary/30 hover:border-primary/60 hover:bg-primary/10 rounded-full p-3 min-w-0 w-12 h-12 transition-all duration-300"
              onClick={() => window.open('https://linkedin.com/in/adinur', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="glass border-primary/30 hover:border-primary/60 hover:bg-primary/10 rounded-full p-3 min-w-0 w-12 h-12 transition-all duration-300"
              onClick={() => window.open('https://github.com/adinur', '_blank')}
            >
              <Github className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;