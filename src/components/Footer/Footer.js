import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { FiPhoneCall } from 'react-icons/fi';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
          <LinkColumn>
            <FiPhoneCall size='3rem' />
            <LinkItem href='tel:+243819764136'>+243 81 97 64 136</LinkItem>
          </LinkColumn>
          <LinkColumn>
          <SiGmail size='3rem' />
            <LinkItem href='mailto:dannyhamici@gmail.com'>dannyhamici@gmail.com</LinkItem>
          </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>T-Rex.dev 2023</Slogan>
      </CompanyContainer>
      <SocialIcons href='https://github.com/Hamic6'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://twitter.com/danny_hamici'>
        <AiFillTwitterCircle size='3rem'/>
      </SocialIcons>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
