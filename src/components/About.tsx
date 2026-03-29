import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '../data/experience';

export default function About() {
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
    <section id="about" className="py-20 relative overflow-hidden">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Get to know the person behind the code
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card">
                <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                  Who I Am
                </h3>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    I'm <span className="font-semibold" style={{ color: '#A0522D' }}>Praise Bucuzong Bah</span>, 
                    a dynamic Software Engineering student at ICT University, Yaoundé, with a passion 
                    for building intelligent systems that solve real-world problems.
                  </p>
                  <p>
                    My expertise lies in <span style={{ color: '#E8DCC8' }}>Backend/API Development</span>, 
                    where I design and implement robust, scalable systems using Python (Flask, Django), 
                    Node.js, and TypeScript. I thrive on creating efficient APIs that power modern applications.
                  </p>
                  <p>
                    Beyond backend development, I'm deeply invested in <span style={{ color: '#E8DCC8' }}>AI Engineering</span> and 
                    cross-platform mobile development with Flutter and Kotlin. I believe in writing clean, 
                    maintainable code that stands the test of time.
                  </p>
                  <p>
                    With a problem-solving mindset and attention to detail, I approach every project 
                    as an opportunity to learn, innovate, and deliver exceptional results.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { value: '10+', label: 'Projects' },
                  { value: '3+', label: 'Years Coding' },
                  { value: '5+', label: 'Technologies' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="card text-center py-6"
                  >
                    <div className="text-3xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-text-secondary text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div variants={itemVariants}>
              <div className="card">
                <h3 className="text-2xl font-heading font-semibold text-text-primary mb-6 flex items-center gap-3">
                  <GraduationCap style={{ color: '#E8DCC8' }} size={28} />
                  Education
                </h3>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, #A0522D, #E8DCC8, #A0522D)' }} />
                  
                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.2 }}
                        className="relative pl-12"
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-2 top-1 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)', border: '2px solid #E8DCC8' }}>
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E8DCC8' }} />
                        </div>
                        
                        <div className="bg-secondary/30 rounded-lg p-4 border border-card-border hover:opacity-90 transition-colors">
                          <div className="flex items-center gap-2 text-sm mb-1" style={{ color: '#E8DCC8' }}>
                            <Calendar size={14} />
                            {edu.year}
                          </div>
                          <h4 className="text-lg font-semibold text-text-primary">
                            {edu.degree}
                          </h4>
                          <p className="text-text-secondary text-sm">
                            {edu.institution}
                          </p>
                          {edu.description && (
                            <p className="text-text-muted text-sm mt-2">
                              {edu.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
