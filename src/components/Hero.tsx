import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { BookOpen, Code, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="container flex flex-col items-center justify-between px-4 py-20 mx-auto lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center lg:w-1/2 lg:text-left lg:mb-0"
        >
          <h1 className="mb-6 text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-primary to-blue-600">
            Empowering Students to Ace Careers and Higher Studies
          </h1>
          <p className="mb-8 text-lg md:text-xl text-muted-foreground">
            Master communication, coding, and career skills with our tailored
            solutions for success.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row lg:justify-start sm:space-y-0 sm:space-x-4">
          <a href="/login">
            <Button size="lg" className="text-lg">
              Start Your Journey
            </Button></a>
            <a href="/signup">
            <Button size="lg" variant="outline" className="text-lg">
              Explore Our Services
            </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative lg:w-1/2"
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Mock Interviews',
                description: 'Practice with industry experts',
                delay: 0.3,
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: 'Coding Practice',
                description: 'Master technical skills',
                delay: 0.4,
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Exam Prep',
                description: 'Comprehensive study materials',
                delay: 0.5,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
                className={`p-6 rounded-lg bg-card border shadow-lg ${
                  index === 2 ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <div className="mb-4 text-primary">{item.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 rounded-full -z-10 w-72 h-72 bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 rounded-full -z-10 w-72 h-72 bg-blue-500/5 blur-3xl" />
        </motion.div>
      </div>
    </div>
  );
}