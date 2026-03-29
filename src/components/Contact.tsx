import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+237 681 297 814',
    href: 'tel:+237681297814',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'praisebah@gmail.com',
    href: 'mailto:praisebah@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Yaoundé, Cameroon',
    href: null,
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          to_name: 'Praise Bucuzong Bah',
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Let's work together on your next project
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="card">
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(160, 82, 45, 0.1)', color: '#A0522D' }}>
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-text-muted text-sm">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-text-primary transition-colors hover:opacity-80"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-text-primary">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-card-border">
                  <p className="text-text-muted text-sm mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Praise-Bah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/20 backdrop-blur border border-white/10 rounded-full transition-all duration-300 hover:opacity-80"
                      aria-label="GitHub"
                    >
                      <GithubIcon />
                    </a>
                    <a
                      href="https://linkedin.com/in/praise-bah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/20 backdrop-blur border border-white/10 rounded-full transition-all duration-300 hover:opacity-80"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon />
                    </a>
                    <a
                      href="mailto:praisebag@gmail.com"
                      className="p-3 bg-black/20 backdrop-blur border border-white/10 rounded-full transition-all duration-300 hover:opacity-80"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Message */}
              <div className="card" style={{ background: 'linear-gradient(to bottom right, rgba(160, 82, 45, 0.1), rgba(232, 220, 200, 0.1))', borderColor: 'rgba(232, 220, 200, 0.3)' }}>
                <h4 className="font-semibold text-text-primary mb-2">Ready to start a project?</h4>
                <p className="text-text-secondary text-sm">
                  I'm available for freelance work, academic project consultations, and full-time opportunities.
                  Let's discuss how I can help bring your ideas to life.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="card">
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
                  Send a Message
                </h3>

                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="text-green-500" size={32} />
                    </div>
                    <h4 className="text-xl font-semibold text-text-primary mb-2">Message Sent!</h4>
                    <p className="text-text-secondary">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : submitStatus === 'error' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-red/20 flex items-center justify-center">
                      <AlertCircle className="text-accent-red" size={32} />
                    </div>
                    <h4 className="text-xl font-semibold text-text-primary mb-2">Something went wrong</h4>
                    <p className="text-text-secondary">Please try again or contact me directly via email.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-text-secondary text-sm mb-2">
                        Your Name
                      </label>
                      <input
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                        placeholder="John Doe"
                        className="input-field"
                      />
                      {errors.name && (
                        <p className="text-sm mt-1" style={{ color: '#A0522D' }}>{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-text-secondary text-sm mb-2">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        placeholder="john@example.com"
                        className="input-field"
                      />
                      {errors.email && (
                        <p className="text-sm mt-1" style={{ color: '#A0522D' }}>{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-text-secondary text-sm mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        {...register('message', { 
                          required: 'Message is required',
                          minLength: { value: 10, message: 'Message must be at least 10 characters' }
                        })}
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="input-field resize-none"
                      />
                      {errors.message && (
                        <p className="text-sm mt-1" style={{ color: '#A0522D' }}>{errors.message.message}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Let's Work Together
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
