import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { RocketIcon, BrainIcon, Code, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const qualities = [
    {
      icon: BrainIcon,
      title: 'Problem Solver',
      description: 'Creative approaches to tackle complex challenges effectively.'
    },
    {
      icon: Code,
      title: 'Data Analyst',
      description: 'Skilled in visualization and extracting meaningful insights.'
    },
    {
      icon: RocketIcon,
      title: 'Fast Learner',
      description: 'Quickly adapts to new technologies and methodologies.'
    },
    {
      icon: Sparkles,
      title: 'Team Player',
      description: 'Collaborative spirit with strong communication skills.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            About <span className="text-cosmic-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content on LEFT for desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 space-y-8"
          >
            <div className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-display font-bold text-cyan-300"
              >
                Hello, I'm Shubham Kumar
              </motion.h3>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-5"
              >
                <p className="text-gray-300 leading-relaxed text-lg">
                  I'm passionate about data analysis, web development, and creating impactful digital solutions. 
                  Currently pursuing my Bachelor of Technology in Computer Science at Lovely Professional University.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  My journey in tech blends analytical skills with creative problem-solving.
                  I've developed expertise in data visualization using Tableau and Excel, and enjoy
                  frontend development with HTML, CSS and JavaScript.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  I also have experience volunteering at an NGO where I taught underprivileged children,
                  which has strengthened my communication and leadership skills.
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="pt-4"
            >
              <h4 className="text-xl font-medium text-cyan-300 mb-6">What I bring to the table:</h4>
              <div className="grid grid-cols-2 gap-5">
                {qualities.map((quality, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className="bg-[#1b1b3a] border-cosmic-blue/10 transition-all duration-300 h-full rounded-lg">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="p-3 rounded-full mb-3 text-cyan-300">
                          <quality.icon size={24} />
                        </div>
                        <h5 className="font-medium mb-2 text-white">{quality.title}</h5>
                        <p className="text-gray-400 text-sm">{quality.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image on RIGHT for desktop - Circular with better sizing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="rounded-full overflow-hidden border-2 border-cosmic-purple/30 shadow-lg shadow-cosmic-blue/20 w-72 h-72 mx-auto">
                <img 
                  src="/subhu.jpg" 
                  alt="Shubham Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-cosmic-blue to-cosmic-purple opacity-50 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-blue opacity-30 blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;