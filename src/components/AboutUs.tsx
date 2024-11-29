import { motion } from 'framer-motion';
import { Carousel } from '../components/AboutUs/Carousel';
import { Statistics } from '../components/AboutUs/Statistics';
import { Values } from '../components/AboutUs/Values';

export function AboutUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
            Who We Are
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            We bridge the gap between academic excellence and career readiness,
            empowering students with the tools and knowledge they need to succeed
            in today's competitive world.
          </p>
        </motion.div>

        <Values />
        <Carousel />
        <Statistics />
      </div>
    </section>
  );
}