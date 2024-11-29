import { motion } from 'framer-motion';
import { Book, FileText, Video, Download } from 'lucide-react';
import { Button } from '../components/ui/button';

const resources = [
  {
    icon: <Book className="w-6 h-6" />,
    title: 'Interview Preparation Guide',
    type: 'eBook',
    description: 'Comprehensive guide for technical interviews',
    actionlink: '/downbook',
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: 'Data Structures Masterclass',
    type: 'Video Course',
    description: 'In-depth video series on DSA',
    actionlink: '/downbook',
    
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'System Design Templates',
    type: 'PDF Guide',
    actionlink: '/downbook',
    description: 'Ready-to-use system design patterns',
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Coding Best Practices',
    type: 'Study Material',
    actionlink: '/downbook',
    description: 'Industry-standard coding guidelines',
  },
];

export function Resources() {
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
            Learning Resources
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Access our curated collection of learning materials to accelerate your growth
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 transition-all bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-xl blur-xl group-hover:blur-2xl" />
              
              <div className="relative flex flex-col h-full p-6 transition-all border shadow-lg rounded-xl bg-card hover:shadow-xl">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center justify-center w-12 h-12 mb-4 transition-colors rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  {resource.icon}
                </motion.div>

                <h3 className="mb-2 text-lg font-semibold">{resource.title}</h3>
                <span className="mb-3 text-sm text-muted-foreground">{resource.type}</span>
                <p className="flex-grow mb-6 text-sm text-muted-foreground">
                  {resource.description}
                </p>

               <a href={resource.actionlink}> <Button className="w-full" variant="outline">
                  Access Resource
                </Button></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}