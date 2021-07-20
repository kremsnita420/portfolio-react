import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center >
        Welcome To<br />
        My Personal Portfolio 
      </SectionTitle>
      
      <SectionText>
        I am Self-thought Fullstack Developer
      </SectionText>

      <Button onClick={() => window.open("https://www.google.si", "_blank")}>Learn More</Button>

      </LeftSection>
  </Section>
);

export default Hero;