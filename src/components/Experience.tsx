import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary/20 to-primary" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-subtitle mx-auto">
              My professional journey and achievements
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2" style={{ background: 'linear-gradient(to bottom, #A0522D, #E8DCC8, #A0522D)' }} />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 z-10" style={{ backgroundColor: 'var(--color-primary)', border: '2px solid #E8DCC8' }}>
                    <div className="absolute inset-1 rounded-full" style={{ backgroundColor: '#E8DCC8' }} />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="card group">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl transition-colors" style={{ backgroundColor: 'rgba(160, 82, 45, 0.1)', color: '#A0522D' }}>
                          <exp.icon size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-heading font-semibold text-text-primary">
                            {exp.title}
                          </h3>
                          <p className="font-medium" style={{ color: '#E8DCC8' }}>
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-4 text-text-secondary text-sm mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-text-secondary mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                            <span className="mt-1" style={{ color: '#E8DCC8' }}>▹</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-1 text-xs bg-secondary/50 text-text-secondary rounded border border-card-border"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
