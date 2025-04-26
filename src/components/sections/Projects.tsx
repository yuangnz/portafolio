import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Layout, Calendar, Cloud, BarChart } from 'lucide-react';

const projects = [
  {
    icon: <Layout className="h-5 w-5" />,
    title: 'Taxicaribe LLC. Website | Dashboard',
    description: 'Aplicación web para la gestión de taxis, incluyendo un panel de administración y un sitio web para usuarios.',
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Typescript', 'TailwindCSS', 'Framer Motion', 'TDD', 'CEO'],
    githubUrl: '#',
    liveUrl: 'https://taxicaribe.com',
    image: 'https://i.imgur.com/RMIih9X.png',
    linkmode: 'Live',
    codeStatus: 'Codigo Privado'
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    title: 'Rondihair Website',
    description: 'Aplicacion web sobre imagen de la empresa en dermatologia y medicina estética',
    technologies: ['React.js', 'Firebase', 'Typescript', 'TailwindCSS', 'Framer Motion', 'TDD', 'CEO'],
    githubUrl: '#',
    liveUrl: 'https://rondihair.vercel.app',
    image: 'https://i.imgur.com/HCqOPPy.png',
    linkmode: 'Live',
    codeStatus: 'Codigo Privado'
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: 'Portafolio',
    description: 'Sitio web de portafolio personal con diseño minimalista y animaciones suaves.',
    technologies: ['React', 'TypeScript', 'Framer Motion'],
    githubUrl: '#',
    liveUrl: '#',
    image: 'https://i.imgur.com/23IMFOj.png',
    linkmode: 'Live',
    codeStatus: 'Codigo Publico'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">Proyectos</h2>
          <div className="h-1 w-20 bg-gray-900 mx-auto mb-6"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="project-card border border-gray-200 overflow-hidden h-full grayscale hover:grayscale-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <div className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-sm">
                    {project.icon}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-medium">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-start gap-3">
                  <Button variant="outline" size="sm" className="group" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2 group-hover:scale-110 transition-transform" /> 
                      {project.codeStatus}
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="group" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2 group-hover:scale-110 transition-transform" /> 
                      {project.linkmode}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}