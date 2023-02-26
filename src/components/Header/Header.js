import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { GiTRexSkull} from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'Red', marginBottom:'30;'}}>
          <GiTRexSkull size="10rem"/> <Span>T-Rex</Span>
        </a>
      
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
        <NavLink>Projets</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
        <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
        <NavLink>Apropos</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/Hamic6'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://twitter.com/danny_hamici'>
        <AiFillTwitterCircle size='3rem'/>
      </SocialIcons>
      
    </Div3>
  </Container>
);

export default Header;
