import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-white border-t border-gray-100 dark:bg-zinc-950 dark:border-zinc-900 py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className='text-center'>
          <div className="text-lg text-gray-600 dark:text-white mb-2 md:mb-0 tracking-tight flex gap-[1%] flex-center justify-center">
            <div className="flex flex-col">
              <span className='font-thin item text-2xl'>Ad astra per aspera </span>
              <span className='italic text-xs item'>(Hacia las estrellas a través de las dificultades)</span>
            </div>
            <a href="https://www.nasa.gov/history/apollo-1-crew-honored-in-new-tribute-exhibit/" target='_blank' className='flex items-center'>
              <span>-</span><span className="font-mono italic underline-offset-4 mx-2 tracking-wide">NASA</span>
            </a>
          </div>

        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="font-thin text-sm text-gray-600 dark:text-white mb-4 md:mb-0">
            © Juan David Gonzalez Nuñez – {currentYear}
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/yuangnz"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-600 hover:text-black dark:text-white dark:hover:text-gray-400"
              aria-label="Ir al perfil de GitHub de Juan David Gonzalez Nuñez"
            >
              <Github size={20} />
              <span className="sr-only">GitHub de Juan David Gonzalez Nuñez</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yuangnz"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-600 hover:text-black dark:text-white dark:hover:text-gray-400"
              aria-label="Ir al perfil de LinkedIn de Juan David Gonzalez Nuñez"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn de Juan David Gonzalez Nuñez</span>
            </a>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}