import React, { useEffect, useContext } from 'react';

import HeroSection from '../components/General/HeroSection';
import { AppContext } from '../Context/context';


const Home = () => {

  const { updateHomePage } = useContext(AppContext);

  useEffect(() => {
    updateHomePage();
  }, []);

  return  <>
    <HeroSection />
  </>
}

export default Home;