import { ExternalLink, Tag, Calendar, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-commerce Google Ads Campaign',
      description: 'Designed and executed a comprehensive Google Ads campaign for an online fashion retailer, resulting in 40% increase in conversions and 25% reduction in cost-per-acquisition.',
      image: '🛍️',
      tags: ['Google Ads', 'PPC', 'Conversion Optimization'],
      metrics: {
        conversions: '+40%',
        cpa: '-25%',
        roas: '4.2x'
      },
      date: '2024',
      featured: true
    },
    {
      title: 'SEO-Optimized WordPress Blog',
      description: 'Developed and optimized a WordPress blog for a tech startup, implementing on-page SEO strategies that improved organic traffic by 180% within 6 months.',
      image: '📝',
      tags: ['SEO', 'WordPress', 'Content Strategy'],
      metrics: {
        traffic: '+180%',
        keywords: '50+',
        engagement: '+65%'
      },
      date: '2024',
      featured: true
    },
    {
      title: 'Instagram Brand Design Campaign',
      description: 'Created a cohesive visual identity and 30+ Instagram posts using Canva for a local restaurant, increasing follower engagement by 220% and brand awareness.',
      image: '🎨',
      tags: ['Canva', 'Social Media', 'Brand Design'],
      metrics: {
        engagement: '+220%',
        followers: '+150%',
        reach: '+300%'
      },
      date: '2024',
      featured: false
    },
    {
      title: 'Google Analytics Traffic Analysis',
      description: 'Conducted comprehensive traffic analysis for multiple client websites using Google Analytics, identifying key optimization opportunities and user behavior patterns.',
      image: '📊',
      tags: ['Google Analytics', 'Data Analysis', 'Reporting'],
      metrics: {
        insights: '25+',
        clients: '8',
        optimization: '+45%'
      },
      date: '2024',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float delay-500"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-poppins">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world digital marketing projects that delivered measurable results and business growth
          </p>
          <div className="w-20 h-1 bg-gradient-secondary rounded-full mx-auto mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`glass-strong card-hover rounded-3xl overflow-hidden animate-slide-up ${
                project.featured 
                  ? 'border-2 border-primary/30 shadow-lg shadow-primary/20' 
                  : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-0`}>
                {/* Project Visual */}
                <div className={`${project.featured ? 'lg:col-span-1' : 'lg:col-span-1'} relative overflow-hidden`}>
                  <div className="h-64 lg:h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                    <div className="text-8xl animate-float">{project.image}</div>
                    {project.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-primary rounded-full text-xs font-bold text-white">
                        Featured
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-sm text-muted-foreground glass rounded-full px-3 py-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`${project.featured ? 'lg:col-span-1' : 'lg:col-span-2'} p-8 space-y-6`}>
                  <div>
                    <h3 className="text-2xl font-bold text-gradient mb-3 font-poppins">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tag}
                        className="inline-flex items-center space-x-1 px-3 py-1 glass rounded-full text-xs font-medium animate-fade-in"
                        style={{ animationDelay: `${index * 200 + tagIndex * 100 + 300}ms` }}
                      >
                        <Tag className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div 
                        key={key}
                        className="text-center glass rounded-xl p-3 animate-scale-in"
                        style={{ animationDelay: `${index * 200 + metricIndex * 150 + 500}ms` }}
                      >
                        <div className="text-lg font-bold text-gradient">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <Button 
                      size="sm"
                      className="btn-glow bg-gradient-primary text-primary-foreground rounded-xl"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="glass border-primary/30 rounded-xl hover:border-primary/60"
                    >
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="glass border-accent/30 text-foreground px-8 py-4 text-lg font-semibold rounded-2xl hover:border-accent/60 btn-glow"
          >
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;