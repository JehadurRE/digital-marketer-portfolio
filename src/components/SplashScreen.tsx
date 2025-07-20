import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Animate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setShowContent(true), 500);
          setTimeout(onComplete, 3000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-secondary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-40 h-40 border border-accent rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10">
        {/* Animated Logo/Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto glass rounded-2xl flex items-center justify-center animate-pulse-glow">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        </div>

        {/* Name Animation */}
        <div className={`transition-all duration-1000 ${showContent ? 'animate-slide-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4 font-poppins">
            Adinur Rahman Pantho
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter">
            Crafting Strategies, Driving Growth
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="glass rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{progress}%</p>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 text-primary animate-float">
            📊
          </div>
          <div className="absolute top-2/3 right-1/3 text-secondary animate-float delay-1000">
            📱
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-accent animate-float delay-500">
            🎯
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;