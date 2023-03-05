import React from 'react';

import { Section, SectionDivider, SectionTitle,SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText, Boxtitle } from './ExperiecesStyles';

const data = [
  { title: 'Google Student Developer Club Leader', text: 'Macalester College,'},
  { title: 'Software Developer and UX Designer ', text: 'GogyUp Inc. MN', },
  { title: 'Teaching Assistant for Algorithm Design & Analysis', text: 'Macalester College, MN', },
  { title: 'Teaching Assistant for Python', text: 'Macalester College, MN', },
  { title: 'Digital Resources Center Lab Assistant', text: 'Macalester College, MN', },
  { title: 'Social Media Manager', text: 'United World College Iran National Committee, Remote', },
  { title: 'Student Government Diversity and Inclusion Officer', text: 'Macalester College, MN', },
  { title: 'Resident Assistant', text: 'Macalester College, MN', }


];

const Experieces = () => (
  <Section id="Experieces">
    <SectionTitle>Experieces</SectionTitle>
    <SectionText>
      I've worked with a range a Experiences in the web development world.
      From Back-end To Design
    </SectionText>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <Boxtitle>{`${card.title}`}</Boxtitle>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Experieces;
