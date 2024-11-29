import { motion } from 'framer-motion';

const stats = [
  { value: 90, label: 'Improved Communication Skills' },
  { value: 80, label: 'Better Coding Proficiency' },
  { value: 95, label: 'Student Satisfaction' },
  { value: 85, label: 'Career Placement Rate' },
];

export function Statistics() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            duration: 0.8,
            delay: index * 0.1,
            bounce: 0.4,
          }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all opacity-70" />
          <div className="relative p-6 rounded-lg bg-card border text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                {stat.value}%
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}