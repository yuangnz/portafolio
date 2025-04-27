import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Code, Monitor } from 'lucide-react';

const experiences = [
  {
    icon: <Code className="h-5 w-5" />,
    company: 'Taxicaribe LLC',
    role: 'Frontend Developer',
    period: '2024 - Presente',
    description: 'Creacion del proyecto en React, optimización de rendimiento y experiencia de usuario.',
    technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'TDD'],
    type: 'Tiempo completo'
  },
  {
    icon: <Monitor className="h-5 w-5" />,
    company: 'Rondihair',
    role: 'Full Stack Developer',
    period: '2024 - 2025',
    description: 'Desarrollo full stack de aplicaciones web, implementación de APIs RESTful y optimización de bases de datos.',
    technologies: ['Node.js', 'Nest.js', 'React', 'Typescript', 'TailwindCSS', 'TDD'],
    type: 'Tiempo completo'
  },
  {
    icon: <Code className="h-5 w-5" />,
    company: 'INVERSU',
    role: 'Junior Frontend Developer',
    period: '2023 - 2024',
    description: 'Desarrollo de aplicaciones web personalizadas para clientes, optimización de rendimiento y experiencia de usuario.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    type: 'Practica'
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    company: 'SERTROL',
    role: 'Soporte IT',
    period: '2020 - 2023',
    description: 'Brindé soporte técnico a corto personal en la oficina principal de Sertrol en el occidente del país. Trabajé con tecnologías como Linux (Ubuntu), Windows ',
    technologies: ['Linux', 'Windows Server', 'RPD', 'SSH', 'WSL', 'Redes Locales'],
    type: 'Medio'
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    company: 'Fupanaz',
    role: 'Junior Frontend Developer',
    period: '2022 - 2023',
    description: 'Sede 1 y Sede 2 Maracaibo Norte 2022 ',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    type: 'Práctica'
  },
  // Add more experiences as needed
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-zinc-950 ">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-neutral-900 dark:text-white">Experiencia</h2>
          <div className="h-1 w-20 bg-neutral-900 dark:bg-white mx-auto mb-6"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              <Card className="border border-neutral-200 dark:border-zinc-600 shadow-md mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-neutral-100 dark:bg-zinc-800 rounded-full">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-xl text-neutral-900 dark:text-white">{exp.role}</h3>
                      <p className="text-neutral-700 dark:text-white">{exp.company}</p>
                    </div>
                    <div className="ml-auto text-right">
                      <span className="text-sm font-medium text-neutral-900 dark:text-zinc-400">{exp.period}</span>
                      <p className="text-sm text-neutral-700 dark:text-zinc-400">{exp.type}</p>
                    </div>
                  </div>
                  <p className="text-neutral-800 mb-4 text-lg dark:text-white">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-neutral-800 text-neutral-800 dark:border-zinc-400 dark:text-zinc-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}