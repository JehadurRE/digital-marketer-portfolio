import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const educationItems = [
    {
      type: 'certification',
      title: 'Digital Marketing Level-3',
      institution: 'SIMT (Skills for Employment Investment Program)',
      year: '2025',
      location: 'Dhaka, Bangladesh',
      description: 'Comprehensive digital marketing training covering SEO, SEM, social media marketing, content strategy, and analytics.',
      skills: ['SEO/SEM', 'Google Analytics', 'Social Media Marketing', 'Content Strategy'],
      status: 'Completed',
      featured: true
    },
    {
      type: 'education',
      title: 'H.S.C in Science',
      institution: 'Daffodil International College',
      year: '2023–2024',
      location: 'Dhaka, Bangladesh',
      description: 'Higher Secondary Certificate in Science with focus on Mathematics, Physics, Chemistry, and Biology.',
      skills: ['Analytical Thinking', 'Problem Solving', 'Research Methods'],
      status: 'Completed',
      featured: false
    },
    {
      type: 'education',
      title: 'S.S.C in Science',
      institution: 'National Bangla High School',
      year: '2021–2022',
      location: 'Dhaka, Bangladesh',
      description: 'Secondary School Certificate in Science with strong foundation in mathematics and scientific principles.',
      skills: ['Mathematics', 'Scientific Method', 'Critical Thinking'],
      status: 'Completed',
      featured: false
    }
  ];

  const certifications = [
    {
      name: 'Google Analytics Certified',
      issuer: 'Google',
      year: '2024',
      status: 'In Progress'
    },
    {
      name: 'Facebook Social Media Marketing',
      issuer: 'Meta',
      year: '2024',
      status: 'Planned'
    },
    {
      name: 'Google Ads Certification',
      issuer: 'Google',
      year: '2024',
      status: 'Planned'
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-poppins">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning journey combining formal education with specialized digital marketing training
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {/* Education Items */}
            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <div 
                  key={item.title}
                  className={`relative flex items-start space-x-8 animate-slide-up ${
                    item.featured ? 'lg:scale-105' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 glass rounded-xl flex items-center justify-center ${
                      item.featured ? 'glow-primary' : ''
                    }`}>
                      {item.type === 'certification' ? (
                        <Award className="w-8 h-8 text-accent" />
                      ) : (
                        <GraduationCap className="w-8 h-8 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 glass-strong card-hover rounded-2xl p-6 ${
                    item.featured 
                      ? 'border-2 border-accent/30 shadow-lg shadow-accent/20' 
                      : ''
                  }`}>
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Main Content */}
                      <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-gradient font-poppins">
                              {item.title}
                            </h3>
                            <p className="text-primary font-medium">
                              {item.institution}
                            </p>
                          </div>
                          {item.featured && (
                            <span className="px-3 py-1 bg-gradient-secondary rounded-full text-xs font-bold text-white">
                              Latest
                            </span>
                          )}
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <span 
                              key={skill}
                              className="px-3 py-1 glass rounded-full text-xs font-medium animate-fade-in"
                              style={{ animationDelay: `${index * 200 + skillIndex * 100 + 300}ms` }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Meta Information */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{item.year}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                        <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {item.status}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Certifications */}
          {/* <div className="mt-16">
            <h3 className="text-2xl font-bold text-gradient mb-8 font-poppins text-center">
              Upcoming Certifications
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.name}
                  className="glass card-hover rounded-xl p-6 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 150 + 800}ms` }}
                >
                  <div className="w-12 h-12 mx-auto glass rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-2">
                    {cert.name}
                  </h4>
                  
                  <p className="text-sm text-primary font-medium mb-2">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{cert.year}</span>
                    <span className={`px-2 py-1 rounded-full ${
                      cert.status === 'In Progress' 
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;