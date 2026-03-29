import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary/20 to-primary" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Professional solutions tailored to your needs
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group"
              >
                <div className="card h-full flex flex-col glow-border">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, rgba(160, 82, 45, 0.2), rgba(232, 220, 200, 0.2))' }}>
                      <service.icon 
                        size={28} 
                        style={{ color: '#E8DCC8' }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 flex-grow">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary/50 text-text-secondary rounded-md border border-card-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    onClick={scrollToContact}
                    className="flex items-center gap-2 font-medium transition-colors group/btn"
                    style={{ color: '#A0522D' }}
                    whileHover={{ x: 5 }}
                  >
                    Request Service
                    <ArrowRight 
                      size={16} 
                      className="group-hover/btn:translate-x-1 transition-transform" 
                    />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
