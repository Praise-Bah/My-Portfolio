import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Folder } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="section-title">
              My <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Featured projects and open source contributions
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {projectCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-card-border"
                style={{
                  backgroundColor: activeFilter === category.id ? '#A0522D' : 'rgba(61, 74, 79, 0.5)',
                  color: activeFilter === category.id ? 'white' : '#A8A8A8',
                  boxShadow: activeFilter === category.id ? '0 0 20px rgba(160, 82, 45, 0.5)' : 'none'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="card h-full flex flex-col glow-border overflow-hidden">
                    {/* Project Image/Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-secondary to-primary-dark rounded-lg mb-4 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Folder size={48} style={{ color: 'rgba(232, 220, 200, 0.3)' }} />
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="flex gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg transition-colors"
                              style={{ backgroundColor: '#A0522D' }}
                              aria-label="View on GitHub"
                            >
                              <GithubIcon />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg transition-colors"
                              style={{ backgroundColor: '#E8DCC8', color: '#1A1A1A' }}
                              aria-label="View Live Demo"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-3 right-3 px-2 py-1 text-white text-xs font-medium rounded" style={{ backgroundColor: '#A0522D' }}>
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded border"
                          style={{ backgroundColor: 'rgba(232, 220, 200, 0.1)', color: '#E8DCC8', borderColor: 'rgba(232, 220, 200, 0.2)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
