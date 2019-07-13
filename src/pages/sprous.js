/**
 * Sprous project page
 */
import React from "react"
import { Link } from "gatsby"

import {
  ChevronLeft
} from 'react-feather'

import SEO from "../components/seo"
import Footer from "../components/footer"
import Image from '../components/image'

import {
  Container,
  LinkBack,
  TwoOneGrid,
  OneTwoGrid,
  EqualGrid,
  ProjectDescription,
  ProjectTechStack,
  LightFont,
  ProjectImage,
  DirectProjectImage,
  ProjectHeading
} from '../styles/product'
import {
  LightButton
} from '../styles/index'
import '../styles/global.css'

import ImageThree from '../images/screenshots/sprous_3.png'

const Sprous = () => (
  <>
    <SEO title="🌱 Sprous" />

    <Container>
      <LinkBack>
        <Link to="/">
          <ChevronLeft width="30" height="30" />
        </Link>
      </LinkBack>

      <h1>Helping small teams help their customers.</h1>

      <TwoOneGrid>
        <ProjectDescription>
        Sprous is a minimalistic knowledge base, helping customers find answers to their most common questions.
        </ProjectDescription>
        <ProjectTechStack>
          <LightFont>
            Tech stack:
          </LightFont>
          GatsbyJS, styled-components, tailwindcss, js-search
        </ProjectTechStack>
      </TwoOneGrid>

      <OneTwoGrid>
        <ProjectDescription>
          <ProjectHeading>
            Easy hosting
          </ProjectHeading>
          Sprous is built with GatsbyJS and thus can be complied into static files, allowing it to be hosted anywhere.
        </ProjectDescription>

        <ProjectImage>
          <Image src="screenshots/sprous_1.png" alt="Sprous: Homepage of the help center" />
        </ProjectImage>
      </OneTwoGrid>

      <TwoOneGrid>
        <ProjectImage>
          <Image src="screenshots/sprous_2.png" alt="Sprous: Demo of the instant search" />
        </ProjectImage>
        
        <ProjectDescription>
          <ProjectHeading>
            Instant search
          </ProjectHeading>
          Sprous uses js-search to provide instant search functionality without a backend.
        </ProjectDescription>
      </TwoOneGrid>

      <DirectProjectImage src={ ImageThree } alt="Sprous: Homepage of the help center" />

      <EqualGrid>
        <a href="https://vantezzen.github.io/sprous" rel="noopener" style={{ textDecoration: 'none' }}>
          <LightButton>
            Open demo
          </LightButton>
        </a>
        <a href="https://github.com/vantezzen/sprous" rel="noopener" style={{ textDecoration: 'none' }}>
          <LightButton>
            View source on GitHub
          </LightButton>
        </a>
      </EqualGrid>

      <Footer />
    </Container>
  </>
)

export default Sprous
