import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { coreSkills, otherSkills } from '../data/skills';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      
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
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Core Engineering Skills */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-xl font-heading font-semibold mb-6 flex items-center gap-2" style={{ color: '#E8DCC8' }}>
              <span className="w-8 h-0.5" style={{ backgroundColor: '#E8DCC8' }} />
              Core Engineering
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="card group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg transition-colors" style={{ backgroundColor: 'rgba(160, 82, 45, 0.1)', color: '#A0522D' }}>
                      <skill.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-primary">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="font-semibold" style={{ color: '#E8DCC8' }}>
                      {skill.proficiency}%
                    </span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(to right, #A0522D, #E8DCC8)' }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.proficiency}%` } : {}}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Expertise */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-heading font-semibold mb-6 flex items-center gap-2" style={{ color: '#E8DCC8' }}>
              <span className="w-8 h-0.5" style={{ backgroundColor: '#E8DCC8' }} />
              Other Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="card group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg transition-colors" style={{ backgroundColor: 'rgba(232, 220, 200, 0.1)', color: '#E8DCC8' }}>
                      <skill.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-primary text-sm">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(to right, #E8DCC8, #A0522D)' }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.proficiency}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
