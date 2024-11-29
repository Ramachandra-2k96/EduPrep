import { motion } from 'framer-motion';
import { Code, Users, BookOpen, Compass } from 'lucide-react';
import { Button } from '../components/ui/button';

const services = [
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Mock Interviews',
    description: 'Interactive simulations tailored to roles and industries with real-time feedback on communication and body language.',
    features: ['AI-driven interface', 'Instant feedback', 'Industry-specific scenarios'],
    action: 'Start Practice',
    actionLink: '/mock-interviews',
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: 'Coding Practice',
    description: 'Comprehensive library of coding challenges from basic to advanced with instant validation and explanations.',
    features: ['Live code editor', 'Multiple languages', 'Problem solutions'],
    action: 'Code Now',
    actionLink: '/coding-practice',
  },
  {
    icon: <BookOpen className="w-12 h-12" />,
    title: 'Competitive Exams',
    description: 'Structured preparation for GATE, CAT, GRE, and more with comprehensive study materials and practice tests.',
    features: ['Study plans', 'Mock tests', 'Performance tracking'],
    action: 'Prepare Now',
    actionLink: '/competitive-exams',
  },
  {
    icon: <Compass className="w-12 h-12" />,
    title: 'Career Planning',
    description: 'Personalized career path exploration with expert guidance and industry insights.',
    features: ['Skill assessment', 'Industry insights', 'Expert guidance'],
    action: 'Explore Paths',
    actionLink: '/career-planning',
  },
];

export function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Comprehensive solutions designed to enhance your skills and prepare you for success
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 transition-all border shadow-lg group rounded-xl bg-card hover:shadow-xl"
            >
              <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-xl group-hover:opacity-100" />
              
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 text-primary"
                >
                  {service.icon}
                </motion.div>

                <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>
                <p className="mb-6 text-muted-foreground">{service.description}</p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <motion.li
                      key={fIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + fIndex * 0.1 }}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <a href={service.actionLink}><Button className="w-full">{service.action}</Button></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}