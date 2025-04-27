import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from "./ModeButton"

const navItems = [
  { name: 'Sobre mí', href: '#about' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Educación', href: '#education' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Contacto', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-zinc-950 shadow-sm border-b border-gray-100 dark:border-zinc-900' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <div className="font-medium text-lg">
          <a href="#" className="transition-colors">
            Juan David Gonzalez Nuñez
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            {navItems.map((item) => (
              <li key={item.name}>
          <a
            href={item.href}
            className="transition-colors text-sm relative group"
          >
            {item.name}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0  transition-all duration-300 group-hover:w-full" />
          </a>
              </li>
            ))}
            <div className='flex-none'>
            <ModeToggle />
          </div>
          </ul>
          
        </nav>
        

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.nav
          className="md:hidden border-b border-gray-100"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col py-4 px-4">
            {navItems.map((item) => (
              <li key={item.name} className="py-2">
                <a
                  href={item.href}
                  className="transition-colors block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}