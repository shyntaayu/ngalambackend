import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/nbc.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const TitleA = styled.div`
  padding-left: 90px;
`

const TitleB = styled.div`
  padding-left: 180px;
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
  text-align: center;
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Ngalam
          <TitleA>Backend</TitleA>
          <TitleB>Community</TitleB>
        </BigTitle>
        <Subtitle>Express Your Feeling With Code.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Meetup"
            link="https://www.eventbrite.com/o/ngalam-backend-community-17147442715"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            We hold monthly meetups that are routinely held at DILo Malang
          </ProjectCard>
          <ProjectCard
            title="Kartini's Engineer"
            link="https://www.facebook.com/events/272612060310794/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            We hold this event once a year with special female speakers
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} />
          <AboutSub>
            We focus on backend technology and open source applications and hold monthly meetups for sharing knowledge
            about the latest technology
          </AboutSub>
        </AboutHero>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            You can follow me on <a href="https://www.instagram.com/ngalambackend/">Instagram</a>,{' '}
            <a href="https://www.youtube.com/channel/UCU-HMOb0zQROWBJK6eNYK_Q">Youtube</a>,{' '}
            <a href="https://medium.com/ngalambackend">Medium</a>, And Join US on{' '}
            <a href="https://www.facebook.com/groups/ngalambackend/">Facebook</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Ngalam Backend Community.{' '}
          <a href="https://github.com/ngalambackend/ngalambackend/">GitHub Repository</a>. Made by{' '}
          <a href="https://github.com/oimtrust">Fathur Rohim</a> and{' '}
          <a href="https://github.com/imam932">Imam Nawawi</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
