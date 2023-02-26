import React from 'react';
import { DiFirebase, DiMongodb, DiReact} from 'react-icons/di';
import { SiPhpmyadmin, SiTailwindcss, SiWebrtc} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      J'ai travailler avec plusieurs Technologies du develloppement web. 
      Du Back-end au Front-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Expérience en <br />
            React.js 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Expérience en <br />
            Node.js et les base de données 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiPhpmyadmin size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Expérience avec <br />
            les systèmes de gestion de base de données telles que phpMyAdmin
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Expérience avec <br /> 
            le système de gestion base de données MongoDB  
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTailwindcss size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Expérience avec <br /> 
            Tailwindcss pour le design des pages web 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiWebrtc size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Expérience avec <br /> 
            Le Webrtc pour la réalisation d'application de visio-conférence ou d'appel vidéo
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
