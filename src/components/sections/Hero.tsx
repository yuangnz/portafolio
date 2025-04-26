import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';


export default function Hero() {


  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-white relative">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-neutral-900 mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hola, soy Juan.{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-neutral-900 to-gray-800"
            >

              Software Engineer.
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-neutral-800 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Desarrollo soluciones eficientes con diseño funcional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full px-8 py-6 group bg-neutral-900 hover:bg-neutral-800"
            >
              Ver proyectos{" "}
              <ArrowDown className="ml-2 group-hover:rotate-90 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <ArrowDown className="text-neutral-900" />
      </motion.div>
    </section>
  );
}