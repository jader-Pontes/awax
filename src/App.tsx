import React from 'react';

//style
import './App.module.sass';

//components
import { Navbar } from './components/Navbar/index';
import { Banner } from './components/banner/Banner';
import { Footer } from './components/Footer/index';
import { SectionLight } from './components/Section_Light/index';
import { SectionDark } from './components/Section_dark';
import { ProjectComponent } from './components/ProjectsComponent';
import { TeamComponent } from './components/Team';
import { Testimonial } from './components/Testimonial';
import { PriceComponent } from './components/Price';
import { Premium } from './components/Premium';
import { FactsComponent } from './components/Facts';
import { ContactComponent } from './components/Contact';
import { MapComponent } from './components/Map';
import { Companys } from './components/Companies';





function App() {

  return (

    <div>

      <Navbar />
      <Banner />
      <SectionLight />
      <SectionDark />
      <ProjectComponent />
      <TeamComponent />
      <Testimonial />
      <Companys />
      <PriceComponent />
      <Premium />
      <FactsComponent />
      <ContactComponent />
      <MapComponent />
      <Footer />

    </div>
  );
}

export default App;
