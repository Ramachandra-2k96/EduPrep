import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    quote: "The personalized approach helped me ace my technical interviews!",
    author: "Sarah Chen",
    role: "Software Engineer"
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    quote: "My coding skills improved dramatically thanks to the structured practice.",
    author: "Michael Rodriguez",
    role: "Full Stack Developer"
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    quote: "The mock interviews boosted my confidence significantly.",
    author: "Emily Parker",
    role: "Product Manager"
  }
];

export function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] overflow-hidden rounded-xl bg-card border shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center p-8"
        >
          <div className="text-center">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              src={testimonials[current].image}
              alt={testimonials[current].author}
              className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
            />
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl italic mb-6 max-w-2xl"
            >
              "{testimonials[current].quote}"
            </motion.blockquote>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <cite className="font-semibold block">
                {testimonials[current].author}
              </cite>
              <span className="text-sm text-muted-foreground">
                {testimonials[current].role}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? 'bg-primary w-4' : 'bg-primary/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}