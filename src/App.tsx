import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover'>
      <Header />
      <div className='overflow-x-hidden'>
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      </div>
      <div className='h-[100px] lg:h-full'></div>
    </div>
  );
};

export default App;
