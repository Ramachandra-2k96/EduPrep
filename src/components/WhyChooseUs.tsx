import { motion } from 'framer-motion';
import { CheckCircle2, Star, Clock, Shield } from 'lucide-react';
import { ComparisonChart } from './WhyChooseUs/ComparisonChart';

const features = [
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: 'Personalized Learning',
    description: 'Tailored solutions for every student',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Real-Time Feedback',
    description: 'Instant, actionable insights for improvement',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Trusted Resources',
    description: 'High-quality materials vetted by experts',
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: 'Expert Support',
    description: '24/7 guidance from industry professionals',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our comprehensive learning platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border shadow-lg hover:shadow-xl transition-all group"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', duration: 0.6, delay: index * 0.2 }}
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <ComparisonChart />
      </div>
    </section>
  );
}