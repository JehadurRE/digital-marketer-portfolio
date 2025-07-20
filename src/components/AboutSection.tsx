import { Target, TrendingUp, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Target, label: 'Projects Completed', value: '15+' },
    { icon: TrendingUp, label: 'Traffic Growth', value: '250%' },
    { icon: Users, label: 'Clients Satisfied', value: '10+' },
    { icon: Award, label: 'Certifications', value: '3' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-poppins">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-8"></div>
            </div>

            <div className="glass-strong rounded-2xl p-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enthusiastic and data-driven digital marketing trainee with hands-on experience in 
                <span className="text-primary font-semibold"> SEO, social media management</span>, and 
                <span className="text-secondary font-semibold"> content creation</span>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eager to contribute to <span className="text-accent font-semibold">data-backed marketing strategies</span> 
                that drive traffic and engagement. I believe in the power of creative storytelling 
                combined with analytical insights to create impactful digital experiences.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['Data-Driven', 'Creative', 'Analytical', 'Goal-Oriented'].map((trait, index) => (
                  <span 
                    key={trait}
                    className="px-4 py-2 glass rounded-full text-sm font-medium animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats and Visual */}
          <div className="space-y-8">
            {/* Profile Visual */}
            <div className="glass-strong rounded-2xl p-8 text-center">
              <div className="w-48 h-48 mx-auto glass rounded-full flex items-center justify-center mb-6 animate-pulse-glow">
                <div className="w-40 h-40 bg-gradient-primary rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="/src/assets/adi.png" 
                    alt="Adinur Rahman Pantho"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gradient font-poppins">Adinur Rahman Pantho</h3>
              <p className="text-primary font-medium mt-2">Digital Marketing Specialist</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="glass card-hover rounded-xl p-6 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 mx-auto glass rounded-lg flex items-center justify-center mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;