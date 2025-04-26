import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Code, Music } from "lucide-react"
import Profile from '@/assets/img/profile.jpg';


const strengths = [
  "Desarrollo de aplicaciones web modernas y escalables",
  "Experiencia en arquitectura de software y patrones de diseño",
  "Optimización de rendimiento y experiencia de usuario",
  "Trabajo efectivo en equipos multidisciplinarios",
]

const hobbies = [
  { name: "Automovilismo", icon: Code, description: "Formula 1 y deportes de motor" },
  { name: "Simulación virtual", icon: Code, description: "Simracing y videojuegos" },
  { name: "Música", icon: Music, description: "Apreciación musical" },
  { name: "Desarrollo técnico", icon: Code, description: "Programación y tecnología" },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-neutral-50 rounded-2xl">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-neutral-900">Sobre mí</h2>
          <div className="h-1 w-20 bg-neutral-900 mx-auto mb-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr,2fr] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={Profile}
              alt="Profile"
              className="rounded-xl shadow-md object-contain w-full h-auto  bg-white hover:grayscale-0 transition-all duration-500 grayscale "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border border-neutral-200 shadow-md">
              <CardContent className="p-6">
                <p className="text-neutral-800 leading-relaxed mb-6 text-lg">
                  Ingeniero de software especializado en desarrollo web, con un enfoque en crear soluciones eficientes y
                  escalables. Mi pasión por la tecnología y el aprendizaje continuo me impulsa a mantenerme actualizado
                  con las últimas tendencias y mejores prácticas del desarrollo de software.
                </p>

                <ul className="space-y-3">
                  {strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-neutral-900 mt-0.5" />
                      <span className="text-neutral-800">{strength}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="text-neutral-800">
                    <strong className="font-medium">Áreas donde más destaco:</strong> frontend y diseño de interfaces.
                    Actualmente ampliando mi formación en backend e infraestructura con enfoque en DevOps y
                    automatización.
                  </p>

                  {/* Sección de Hobbies - Diseño Minimalista */}
                  <div className="mt-6 pt-4">
                    <p className="text-neutral-600 text-sm mb-3">Pasiones e intereses</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {hobbies.map((hobby, index) => (
                        <div key={index} className="flex items-center gap-1.5 text-neutral-500 text-sm">
                          <span className="font-medium">{hobby.name}</span>
                          <span className="text-neutral-400 text-xs hidden md:inline">• {hobby.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
