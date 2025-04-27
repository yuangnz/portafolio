import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle, useLastCommitDate } from "./features"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, Github } from "lucide-react"
import Profile from '@/assets/img/profile.jpg';

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-zinc-950 shadow-sm border-b border-gray-100 dark:border-zinc-900' : 'dark:bg-gradient-to-b dark:from-black bg-gradient-to-b from-white to-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <div className="font-normal text-lg animate-float-space">
          <HoverCard>
            <HoverCardTrigger>
              <div className='flex flex-row'>

                <a href="#" className="transition-colors" style={{ textShadow: '3px 4px 3px rgba(0,0,0,0.25)' }}> 
                  @yuangnz

                </a>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-black dark:bg-white"></span>
                </span>
              </div>

            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src={Profile} className='aspect-square object-cover' />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@yuangnz</h4>
                  <p className='text-mono antialiased'>Alcanza la maestria y capitaliza tu victoria.</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                    Typescript | React | VITE | Tailwind CSS
                  </p>

                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      last commit {useLastCommitDate('yuangnz/portafolio')}
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center ">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="transition-colors text-base relative group tracking-tighter font-mono "
                  style={{ textShadow: '3px 4px 3px rgba(0,0,0,0.25)'}}
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
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