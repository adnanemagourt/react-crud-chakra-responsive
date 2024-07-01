import React, {useEffect, useContext} from 'react';

import HeroSection from '../components/General/HeroSection';
import { AppContext } from '../Context/context';

const About = () => {
  
  const {updateAboutPage} = useContext(AppContext);

  useEffect(() => {
    updateAboutPage();
  }, []);

  return (
    <HeroSection />
  )
}

export default About;
