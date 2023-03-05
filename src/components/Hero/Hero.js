import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Sheida Rashidi <br />
          Developer
        </SectionTitle>
        <SectionText>
        Through the power of code, we have the ability to create solutions that can change the world and make a positive impact on the lives of millions. </SectionText>
        <a href="https://google.com" download>
          <Button>Get My Resume!</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;