import React from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ThreeCanvas from './components/ThreeCanvas';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <CustomCursor />
      <ThreeCanvas />
      <Loader />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
