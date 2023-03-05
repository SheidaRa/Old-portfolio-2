import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, NavLink, } from './HeaderStyles';

const Header = () =>  (
  <Container>
 
    <Div1>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#Experieces">
          <NavLink>Experieces</NavLink>
        </Link>
      </li>        
    </Div1>

    </Container>
);

export default Header;
