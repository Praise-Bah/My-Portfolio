import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Send, Quote, User } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface TestimonialForm {
  name: string;
  role: string;
  message: string;
  rating: number;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  rating: number;
}

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Project Manager",
    message: "Praise delivered exceptional work on our backend API project. His attention to detail and problem-solving skills are outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Student",
    message: "As a mentee, I learned so much from Praise. He explains complex concepts clearly and is always patient and supportive.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Obi",
    role: "Startup Founder",
    message: "Working with Praise was a great experience. He understood our requirements quickly and delivered a robust solution.",
    rating: 4,
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [selectedRating, setSelectedRating] = useState(5);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestimonialForm>();

  const onSubmit = (data: TestimonialForm) => {
    const newTestimonial: Testimonial = {
      id: testimonials.length + 1,
      name: data.name,
      role: data.role,
      message: data.message,
      rating: selectedRating,
    };
    setTestimonials([newTestimonial, ...testimonials]);
    reset();
    setSelectedRating(5);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
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

  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
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
              Client <span className="gradient-text">Reviews</span>
            </h2>
            <p className="section-subtitle mx-auto mb-4">
              What people say about working with me
            </p>
            
            {/* Average Rating */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    style={{ color: star <= Math.round(averageRating) ? '#E8DCC8' : '#6B7280', fill: star <= Math.round(averageRating) ? '#E8DCC8' : 'none' }}
                  />
                ))}
              </div>
              <span className="text-text-secondary">
                {averageRating.toFixed(1)} ({testimonials.length} reviews)
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Testimonials Display */}
            <motion.div variants={itemVariants} className="space-y-6">
              {testimonials.slice(0, 3).map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="card relative"
                >
                  <Quote className="absolute top-4 right-4" size={40} style={{ color: 'rgba(232, 220, 200, 0.2)' }} />
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #A0522D, #E8DCC8)' }}>
                      <User size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">{testimonial.name}</h4>
                      <p className="text-text-secondary text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary mb-4">{testimonial.message}</p>
                  
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        style={{ color: star <= testimonial.rating ? '#E8DCC8' : '#6B7280', fill: star <= testimonial.rating ? '#E8DCC8' : 'none' }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Submit Form */}
            <motion.div variants={itemVariants}>
              <div className="card">
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
                  What do you have to say about Praise?
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 220, 200, 0.2)' }}>
                      <Star style={{ color: '#E8DCC8' }} size={32} />
                    </div>
                    <h4 className="text-xl font-semibold text-text-primary mb-2">Thank you!</h4>
                    <p className="text-text-secondary">Your review has been submitted.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        placeholder="Your Name"
                        className="input-field"
                      />
                      {errors.name && (
                        <p className="text-sm mt-1" style={{ color: '#A0522D' }}>{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <input
                        {...register('role', { required: 'Role is required' })}
                        placeholder="Your Role (e.g., Developer, Student)"
                        className="input-field"
                      />
                      {errors.role && (
                        <p className="text-sm mt-1" style={{ color: '#A0522D' }}>{errors.role.message}</p>
                      )}
                    </div>

                    <div>
                      <textarea
                        {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'Message must be at least 20 characters' } })}
                        placeholder="Share your experience working with Praise..."
                        rows={4}
                        className="input-field resize-none"
                      />
                      {errors.message && (
                        <p className="text-sm mt-1" style={{ color: '#A0522D' }}>{errors.message.message}</p>
                      )}
                    </div>

                    {/* Star Rating */}
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Your Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setSelectedRating(star)}
                            className="transition-transform hover:scale-110"
                          >
                            <Star
                              size={28}
                              style={{ color: star <= selectedRating ? '#E8DCC8' : '#6B7280', fill: star <= selectedRating ? '#E8DCC8' : 'none' }}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send size={18} />
                      Submit Review
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
