import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: string;
  date: string;
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Interactive Mall Sales Dashboard",
      description: "Designed and developed a Tableau dashboard to visualize mall sales data with advanced features for data-driven insights.",
      technologies: ["Tableau", "Data Analysis", "SQL", "Excel"],
      image: "bg-[url('/dashboard.jpg')] bg-cover bg-center",
      githubUrl: "#",
      liveUrl: "#",
      category: "data",
      date: "Sep 2024-Oct 2024"
    },
    {
      id: 2,
      title: "Skincare Blog",
      description: "Developed and managed a skincare-focused blog with product reviews, beauty tips, and skincare routines. Used SEO optimization and digital marketing strategies.",
      technologies: ["WordPress/Wix", "SEO", "Content Creation", "Digital Marketing"],
      image: "bg-[url('/blog.jpg')] bg-cover bg-center",
      githubUrl: "https://glamandglow01.blogspot.com/",
      liveUrl: "https://glamandglow01.blogspot.com/",
      category: "web",
      date: "Sep 2024-Oct 2024"
    },
    {
      id: 3,
      title: "Travel Website",
      description: "Developed a responsive travel website with interactive UI, smooth navigation, search functionality, and a contact form.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "bg-[url('/travel.jpg')] bg-cover bg-center",
      githubUrl: "#",
      liveUrl: "#",
      category: "web",
      date: "Sep 2022-Nov 2022"
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'data', label: 'Data Analysis' }
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
    <section id="projects" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Featured <span className="text-cosmic-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here's a collection of my most notable projects. Each one demonstrates 
            different skills in data analysis and web development.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              className={filter === category.value 
                ? "bg-cosmic-blue hover:bg-cosmic-blue/80 text-white" 
                : "text-gray-300 border-gray-600 hover:text-cosmic-blue hover:border-cosmic-blue"}
              onClick={() => setFilter(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="bg-space-light border border-gray-700 hover:border-cosmic-blue/50 transition-all duration-300 h-full overflow-hidden hover:shadow-lg hover:shadow-cosmic-blue/20">
                <div className={`h-40 ${project.image} flex items-center justify-center`}>
                  {/* Project preview image */}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-display">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    <span className="text-cosmic-blue text-xs">{project.date}</span> • {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-space-darker px-2 py-1 rounded-md text-cosmic-blue"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-gray-300 border-gray-600 hover:text-cosmic-blue hover:border-cosmic-blue"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-cosmic-blue hover:bg-cosmic-blue/80 text-white"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;