import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';


export default function Hero() {


  return (
    <section className="min-h-[90vh] flex items-center justify-center relative transition-all duration-300">
      <div className="container mx-auto px-4 text-center ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto z-10 relative"
        >

          <motion.h1
            className="text-5xl md:text-7xl font-bold  mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className='text-shadow-xl z-10' style={{ textShadow: '3px 4px 9px rgba(0,0,0,0.35)' }}>Hola, soy Juan,{" "}</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="to-gray-800"
            >
              <br />
              <span className='pt-16 text-shadow-sm' style={{ textShadow: '3px 4px 9px rgba(0,0,0,0.35)' }}>Software Engineer.</span>
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className='' style={{ textShadow: '3px 4px 9px rgba(0,0,0,0.15)' }}>

              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  'Enfocado en calidad.',
                  2500,
                  'Enfocado en eficiencia.',
                  2500,
                  'Enfocado en usabilidad.',
                  2500,
                  'Enfocado en resultados.',
                  2500,
                  'Enfocado en crecimiento.',
                  2500
                ]}
                style={{ fontSize: '1.5em', height: '200px', width: '300px' }}
                speed={30}
                deletionSpeed={60}
                repeat={Infinity}
              />
            </div >
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full px-8 py-6 group shadow-xl"
            >
              Ver proyectos{" "}
              <ArrowDown className="ml-2 group-hover:rotate-90 transition-transform duration-300 " />
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="div"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#9f9f9f4e_1px,transparent_1px),linear-gradient(to_bottom,#9f9f9f4e_1px,transparent_1px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        </motion.div >
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <ArrowDown className="" />
      </motion.div>
    </section>
  );
}