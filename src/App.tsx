// Project: portfolio
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import Education from '@/components/sections/Education';
import { ThemeProvider } from "@/components/theme-provider"

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header/>
      <div className="min-h-screen mx-auto max-w-7xl">
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
