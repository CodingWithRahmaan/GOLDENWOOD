import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import GoldenWoodsHero from './components/navbar.jsx';
import HeroSec from './components/comp1.jsx'; // Capital H
import Section2 from './components/comp2.jsx';
import ProjectsSection from './components/comp3.jsx';
import Testimonials from './components/comp4.jsx';
import Proj2 from './components/comp5.jsx';
import ExploreSection from './components/comp6.jsx';
import Registeration from './components/comp7.jsx';
import Footer from './components/comp8.jsx'

function App() {
  return (
    <>
      <GoldenWoodsHero />
      <HeroSec />
      <Section2 />
      <ProjectsSection />
      <Testimonials />
      <Proj2 />
      <ExploreSection />
      <Registeration />
      <Footer />
    </>

  );
}

export default App;


