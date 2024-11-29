import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { GraduationCap } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
      
      <div className="container relative px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="flex items-center justify-center w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 text-primary"
          >
            <GraduationCap className="w-10 h-10" />
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-primary to-blue-600">
            Take the First Step Towards Your Dream Career!
          </h2>
          
          <p className="max-w-2xl mx-auto mb-8 text-lg text-muted-foreground">
            Join thousands of students who have already transformed their careers with our comprehensive learning platform.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <a href="/login">
            <Button size="lg" className="text-lg">
              Sign Up for Free
            </Button>
            </a>
            <a href="/login">
            <Button size="lg" variant="outline" className="text-lg">
              Schedule a Demo
            </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute left-0 rounded-full -z-10 top-1/4 w-72 h-72 bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute right-0 rounded-full -z-10 bottom-1/4 w-72 h-72 bg-blue-500/5 blur-3xl animate-pulse" />
    </section>
  );
}