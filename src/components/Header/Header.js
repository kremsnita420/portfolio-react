import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems:"center", color:"white"}}>
          <DiCssdeck size="4rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
      <Link href="#contact">
        <NavLink>Contact</NavLink>
      </Link>
    </Div2>

    <Div3>
      <SocialIcons href="https://www.instagram.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
