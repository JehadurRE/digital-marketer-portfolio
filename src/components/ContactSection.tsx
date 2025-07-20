import { useState } from 'react';
import { Send, Mail, Phone, Linkedin, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adinur420.bio@gmail.com',
      href: 'mailto:adinur420.bio@gmail.com',
      color: 'text-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 1784374314',
      href: 'tel:+8801784374314',
      color: 'text-secondary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: '#',
      color: 'text-accent'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
      color: 'text-purple'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-poppins">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to boost your digital presence? Let's discuss how I can help drive growth for your business
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-[1fr,400px] xl:grid-cols-[1fr,450px] gap-8 xl:gap-12 items-start">
          {/* Contact Form */}
          <div className="glass-strong rounded-3xl p-6 lg:p-8 animate-slide-up">
            <div className="mb-6 lg:mb-8">
              <h3 className="text-2xl font-bold text-gradient mb-4 font-poppins">
                Send Me a Message
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="space-y-3 lg:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass border-glass-border bg-transparent focus:border-primary transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass border-glass-border bg-transparent focus:border-primary transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="glass border-glass-border bg-transparent focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project and how I can help..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-glow bg-gradient-primary text-primary-foreground py-3 lg:py-4 text-lg font-semibold rounded-2xl disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-4 lg:gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="glass-strong card-hover rounded-2xl p-4 lg:p-6 block group animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className={`w-7 h-7 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground font-poppins">
                        {info.label}
                      </h4>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="glass-strong rounded-2xl p-6 lg:p-8 animate-slide-up delay-500">
              <h4 className="text-xl font-bold text-gradient mb-6 font-poppins">
                Why Work With Me?
              </h4>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Response Time', value: '< 24 hours' },
                  { label: 'Project Success', value: '100%' },
                  { label: 'Client Satisfaction', value: '5 stars' },
                  { label: 'Availability', value: 'Full-time' }
                ].map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="text-center glass rounded-xl p-4 animate-fade-in"
                    style={{ animationDelay: `${index * 100 + 600}ms` }}
                  >
                    <div className="text-lg font-bold text-gradient">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  'Data-driven strategies that deliver results',
                  'Transparent communication throughout the project',
                  'Continuous optimization and improvement',
                  'Dedicated support and maintenance'
                ].map((benefit, index) => (
                  <div 
                    key={benefit}
                    className="flex items-center space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 150 + 800}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="glass-strong rounded-2xl p-6 text-center animate-pulse-glow">
              <h4 className="text-lg font-bold text-gradient mb-2 font-poppins">
                Ready to Get Started?
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Let's discuss your digital marketing goals and create a strategy that works.
              </p>
              <Button 
                className="btn-glow bg-gradient-secondary text-secondary-foreground px-6 py-3 rounded-xl"
                onClick={() => document.getElementById('name')?.focus()}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;