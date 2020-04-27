/**
 *  Index page
 */
import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Footer from "../components/footer"

import {
  GitHub,
  Linkedin,
} from 'react-feather'

import {
  Container,
  HeroContainer,
  HeroName,
  ProjectsContainer,
  ProjectsListContainer,
  ProjectContainer,
  ProjectImage,
  ProjectHeading,
  ProjectDescription,
  ProjectTechStack,
  LightButton,
  AboutMeContainer,
  AboutMeLinkContainer,
  AboutMeLink,
  SkillsContainer,
  ContactContainer,
  SubmitButton
} from '../styles/index.js'

import Logo from "../images/logo.svg"

import Image from '../components/image'

import '../styles/global.css'

const age = new Date(new Date() - new Date('2001-01-26')).getFullYear() - 1970;

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Container>
      <HeroContainer>
        <img src={ Logo } alt="Bennett Hollstein's Logo (Fox)" height={ 50 } aria-hidden />
        <HeroName>Bennett Hollstein</HeroName>
        <p>{age}-year-old web developer from Germany</p>
      </HeroContainer>

      <ProjectsContainer>
        <h2>Featured projects.</h2>

        <ProjectsListContainer>

          <ProjectContainer>
            <ProjectImage>
              <Image src="screenshots/ferdi.png" />
            </ProjectImage>

            <ProjectHeading aria-label="Project name: Ferdi">Ferdi</ProjectHeading>
            <ProjectDescription>All your messages in one place.</ProjectDescription>
            <ProjectTechStack aria-label="Technologies used">ElectronJS, ReactJS</ProjectTechStack>

            <Link to="/ferdi" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </Link>
          </ProjectContainer>

          <ProjectContainer>
            <ProjectImage>
              <Image src="screenshots/vowserDB_1.png" />
            </ProjectImage>

            <ProjectHeading aria-label="Project name: vowserDB">vowserDB</ProjectHeading>
            <ProjectDescription>A minimal standalone database for host-it-yourself projects.</ProjectDescription>
            <ProjectTechStack aria-label="Technologies used">PHP, composer</ProjectTechStack>

            <Link to="/vowserdb" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </Link>
          </ProjectContainer>


          <ProjectContainer>
          <ProjectImage>
              <Image src="screenshots/minimalpedia_1.png" />
            </ProjectImage>

            <ProjectHeading aria-label="Project name: minimalpedia">minimalpedia</ProjectHeading>
            <ProjectDescription>Reimagening the design and user experience of wikipedia.</ProjectDescription>
            <ProjectTechStack aria-label="Technologies used">ReactJS, tailwind.css, wiki.js</ProjectTechStack>

            <Link to="/minimalpedia" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </Link>
          </ProjectContainer>

          <ProjectContainer>
            <ProjectImage>
              <Image src="screenshots/sprous_3.png" />
            </ProjectImage>

            <ProjectHeading aria-label="Project name: Sprous">Sprous</ProjectHeading>
            <ProjectDescription>Helping small teams help their customers.</ProjectDescription>
            <ProjectTechStack aria-label="Technologies used">GatsbyJS, styled-components, js-search</ProjectTechStack>

            <Link to="/sprous" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </Link>
          </ProjectContainer>

          <ProjectContainer>
            <ProjectImage>
              <Image src="screenshots/cauldron_1.png" />
            </ProjectImage>

            <ProjectHeading aria-label="Project name: Cauldron.js">Cauldron.js</ProjectHeading>
            <ProjectDescription>Running a Minecraft Server in your browser.</ProjectDescription>
            <ProjectTechStack aria-label="Technologies used">JavaScript, socket.io, ExpressJS</ProjectTechStack>

            <Link to="/cauldron" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </Link>
          </ProjectContainer>


          <ProjectContainer>
            <ProjectImage>
              <Image src="screenshots/github_1.png" />
            </ProjectImage>

            <ProjectHeading>More projects on GitHub</ProjectHeading>
            <ProjectDescription>All open-source projects are availible on GitHub.</ProjectDescription>
            {/* <ProjectTechStack>.</ProjectTechStack> */}

            <a href="https://github.com/vantezzen" rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none' }} aria-label="GitHub profile">
              <LightButton>
                View
              </LightButton>
            </a>
          </ProjectContainer>

        </ProjectsListContainer>
      </ProjectsContainer>

      <AboutMeContainer>
        <h2>About me.</h2>

        <p>
          Hello, I am Bennett.
        </p>
        <p>
          I love web development and enjoy building websites that help me in my everyday life.
        </p>
        <p>
          I have a passion of challenging myself to learn new things and build better websites.
        </p>

        <AboutMeLinkContainer>
          <AboutMeLink href="https://github.com/vantezzen" aria-label="My GitHub profile">
            <GitHub />
          </AboutMeLink>
          <AboutMeLink href="https://www.linkedin.com/in/bennett-h/" aria-label="My LinkedIn profile">
            <Linkedin />
          </AboutMeLink>
        </AboutMeLinkContainer>
      </AboutMeContainer>

      <SkillsContainer>
        <h2>Technologies I've used.</h2>

        <ul className="skills">
						<li><b>JavaScript</b></li>
						<li>NodeJS</li>
						<li className="slim">Express</li>
						<li className="slim">socket.io</li>
						<li className="slim">AdonisJS</li>
						<li>React</li>
						<li className="slim">GatsbyJS</li>
						<li className="slim">react-router</li>
						<li className="slim">Redux</li>
						<li className="slim">styled-components</li>
						<li className="slim">mobx</li>
						<li className="slim">mobx-react</li>
						<li>ElectronJS</li>
						<li>vueJS</li>
						<li>AngularJS</li>
						<li>jQuery</li>
						<li><b>CSS</b></li>
						<li>SCSS</li>
						<li>Bootstrap</li>
						<li>tailwind.css</li>
						<li><b>HTML</b></li>
						<li><b>PHP</b></li>
						<li>Laravel</li>
						<li>PHPUnit</li>
						<li>Composer</li>
						<li><b>SQL</b></li>
						<li>MySQL</li>
						<li>PostgreSQL</li>
						<li><b>Git</b></li>
						<li><b>Bash</b></li>

						<li><b>Adobe Photoshop</b></li>
						<li><b>Affinity Photo</b></li>
						<li><b>Adobe XD</b></li>
						<li><b>Adobe Illustrator</b></li>
					</ul>
      </SkillsContainer>

      <ContactContainer>
        <h2>Contact me.</h2>

        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name" placeholder="Jon Doe" required />
					</div>
					<div className="form-group">
						<label htmlFor="mail">Mail</label>
						<input type="email" name="mail" id="mail" placeholder="jon@example.com" required />
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea name="message" id="message" placeholder="Hello,..." required></textarea>
					</div>
          <SubmitButton type="submit">
            <LightButton>
              Send message
            </LightButton>
          </SubmitButton>
					
				</form>
      </ContactContainer>

      <Footer />
    </Container>
  </>
)

export default IndexPage
