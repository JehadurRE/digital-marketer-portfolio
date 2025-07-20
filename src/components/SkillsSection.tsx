import { Search, BarChart3, Share2, Palette, Globe, Mail, Users, Clock } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'On-page & Off-page SEO strategies to boost organic visibility',
      level: 90,
      color: 'text-primary'
    },
    {
      icon: BarChart3,
      title: 'Google Analytics & Ads',
      description: 'Data analysis and campaign optimization for maximum ROI',
      level: 85,
      color: 'text-secondary'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic content creation and community engagement',
      level: 95,
      color: 'text-accent'
    },
    {
      icon: Palette,
      title: 'Canva / Adobe Photoshop',
      description: 'Visual content creation and brand design',
      level: 80,
      color: 'text-purple'
    },
    {
      icon: Globe,
      title: 'WordPress / Website Builders',
      description: 'Website development and content management',
      level: 75,
      color: 'text-primary'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Mailchimp campaigns and automation workflows',
      level: 70,
      color: 'text-secondary'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Cross-functional teamwork and project coordination',
      level: 88,
      color: 'text-accent'
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Efficient project planning and deadline management',
      level: 92,
      color: 'text-purple'
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-poppins">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of digital marketing skills backed by hands-on experience and continuous learning
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="glass-strong card-hover rounded-2xl p-6 group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-xs font-bold text-white">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground font-poppins">
                  {skill.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>

                {/* Skill Level */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-muted-foreground">Proficiency</span>
                    <span className="text-xs font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="glass rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200 + 500}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              title: 'Technical Skills',
              skills: ['SEO & SEM', 'Google Analytics', 'WordPress', 'Adobe Creative'],
              color: 'border-primary/30'
            },
            {
              title: 'Marketing Skills',
              skills: ['Social Media', 'Email Marketing', 'Content Strategy', 'Campaign Management'],
              color: 'border-secondary/30'
            },
            {
              title: 'Soft Skills',
              skills: ['Team Leadership', 'Project Management', 'Communication', 'Problem Solving'],
              color: 'border-accent/30'
            }
          ].map((category, index) => (
            <div 
              key={category.title}
              className={`glass border-2 ${category.color} rounded-xl p-6 animate-slide-up`}
              style={{ animationDelay: `${index * 200 + 800}ms` }}
            >
              <h4 className="text-lg font-semibold text-gradient mb-4 font-poppins">
                {category.title}
              </h4>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="flex items-center space-x-2 animate-fade-in"
                    style={{ animationDelay: `${index * 200 + skillIndex * 100 + 1000}ms` }}
                  >
                    <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;