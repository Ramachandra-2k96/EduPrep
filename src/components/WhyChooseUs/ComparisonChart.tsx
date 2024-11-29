import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const features = [
  'Personalized Learning Path',
  'Real-time Progress Tracking',
  'Expert Mentorship',
  'Industry-standard Projects',
  'Mock Interviews',
  'Career Guidance',
];

const competitors = [
  {
    name: 'EduPrep',
    features: [true, true, true, true, true, true],
  },
  {
    name: 'Others',
    features: [false, true, false, true, false, false],
  },
];

export function ComparisonChart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="rounded-xl bg-card border shadow-lg p-6"
    >
      <h3 className="text-2xl font-semibold mb-6 text-center">
        How We Compare
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-4 px-4 text-left">Features</th>
              {competitors.map((competitor, index) => (
                <th
                  key={index}
                  className="py-4 px-4 text-center font-semibold"
                >
                  {competitor.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b last:border-b-0"
              >
                <td className="py-4 px-4">{feature}</td>
                {competitors.map((competitor, cIndex) => (
                  <td key={cIndex} className="py-4 px-4 text-center">
                    {competitor.features[index] ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}