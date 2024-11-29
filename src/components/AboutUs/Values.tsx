import { motion } from 'framer-motion';
import { Heart, Lightbulb, Target } from 'lucide-react';

const values = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Personalized Support',
    description:
      'Tailored guidance and mentorship to meet your unique learning needs.',
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Comprehensive Preparation',
    description:
      'Holistic approach covering all aspects of academic and professional growth.',
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Innovation',
    description:
      'Cutting-edge learning methods and technology-driven educational solutions.',
  },
];

export function Values() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="p-6 rounded-xl bg-card border shadow-lg hover:shadow-xl transition-shadow"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 0.6, delay: index * 0.2 }}
            className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto text-primary"
          >
            {value.icon}
          </motion.div>
          <h3 className="text-xl font-semibold mb-3 text-center">{value.title}</h3>
          <p className="text-muted-foreground text-center">{value.description}</p>
        </motion.div>
      ))}
    </div>
  );
}