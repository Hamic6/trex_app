import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenue sur <br/>
        T-Rex   
      </SectionTitle>
      <SectionText>
        Sur ce site web je présente les projets sur les quelles j'ai travailler.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>En savoir plus</Button>
    </LeftSection>
  </Section>
);

export default Hero;