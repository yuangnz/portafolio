import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-white border-t border-gray-100 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © Juan David Gonzalez Nuñez – {currentYear}
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yuangnz" target='_blank' className="social-icon text-gray-600 hover:text-black">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/yuangnz" target="_blank" className="social-icon text-gray-600 hover:text-black">
              <Linkedin size={20} />
            </a>
            <a href="#" className="social-icon text-gray-600 hover:text-black">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}