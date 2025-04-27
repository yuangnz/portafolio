import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const skillCategories = {
  frontend: {
    advanced: [
      'JavaScript', 'TypeScript', 'React', 'Vite', 'Tailwind CSS',
      'HTML5', 'CSS3', 'Framer Motion'
    ],
    intermediate: [
      'Next.js', 'Jest', 'Testing Library', 'Webpack'
    ]
  },
  backend: {
    learning: [
      'Node.js', 'Express', 'MongoDB', 'Prisma', 'RESTful APIs',
      'GraphQL', 'PostgreSQL'
    ]
  },
  infrastructure: {
    basic: [
      'Linux (Ubuntu)', 'CLI', 'WSL', 'Windows Server',
      'Forticlient', 'VPS', 'RDP', 'SSH', 'Docker'
    ]
  }
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-neutral-50 dark:bg-zinc-950 rounded-2xl">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">Habilidades</h2>
          <div className="h-1 w-20 bg-gray-900 dark:bg-white mx-auto mb-6"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border border-gray-200 dark:border-zinc-600 shadow-sm">
            <CardContent className="p-6">
              <Tabs defaultValue="frontend" className="w-full">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="infrastructure">Infraestructura</TabsTrigger>
                </TabsList>
                
                <TabsContent value="frontend">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Mi dia a dia.</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillCategories.frontend.advanced.map((skill, index) => (
                          <Badge key={index} className="skill-badge skill-badge-primary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-3">Intermedio</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillCategories.frontend.intermediate.map((skill, index) => (
                          <Badge key={index} className="skill-badge">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="backend">
                  <div>
                    <h3 className="text-sm font-medium mb-3">En aprendizaje</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillCategories.backend.learning.map((skill, index) => (
                        <Badge key={index} className="skill-badge">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="infrastructure">
                  <div>
                    <h3 className="text-sm font-medium mb-3">Conocimientos básicos</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillCategories.infrastructure.basic.map((skill, index) => (
                        <Badge key={index} className="skill-badge">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <p className="text-sm text-gray-500 dark:text-zinc-200 mt-6 pt-6 border-t border-gray-200">
                Actualmente aprendiendo: automatización con Linux, DevOps básico y CI/CD.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}