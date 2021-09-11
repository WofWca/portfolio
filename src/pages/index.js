/**
 *  Index page
 */
import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import lax from "lax.js"
import tw from 'tailwind.macro'

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
  ScrollDownInfo,
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
  SubmitButton,
  DarkButton
} from '../styles/index.js'

import Logo from "../images/logo.svg"

import Image from '../components/image'
import TiltedByMouse from '../components/TiltedByMouse';
import Loading from "../components/Loading"

import '../styles/global.css'
import HeroBackground from "../components/hero-background"

const age = new Date(new Date() - new Date('2001-01-26')).getFullYear() - 1970;

const IndexPage = () => {
  const [showLoading, setLoading] = useState(true);
  const [loadState, setLoadState] = useState(0);

  // We have two loading items (Lax and P5 Sketch), so we use a load state
  // as to keep track of when both items finish loading
  const increaseLoadState = () => {
    setLoadState(loadState + 1);

    // Both items are done - hide the loading screen
    if ((loadState + 1) >= 2) {
      setTimeout(() => {
          setLoading(false);
      }, 100);
    }
  }

  useEffect(() => {
    // Hide the loading screen after 2s - even if we haven't finished loading yet
    // We don't want to keep the user waiting
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Setup lax
    window.lax = lax;
    lax.init();

    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });

    const inOutAnimation = [
      ['elInY', 'elInY + (screenHeight / 4)', 'elOutY - (screenHeight / 4)', 'elOutY'],
      [0, 1, 1, 0]
    ];

    // HEADER
    // lax.addElements('.name', {
    //   scrollY: {
    //     'background-color': [
    //       [0, 200],
    //       [235, 33],
    //       {
    //         cssFn: (val) => `rgb(${val}, ${val}, ${val})`
    //       }
    //     ],
    //   }
    // }, {
    //   easing: 'easeInOutQuint'
    // });

    // Lax seems to have problems calculating the correct position for the logo
    // when the background isn't positioned yet. This is why we need to wait 10ms
    // for the background to position before we can set the animations for the logo
    setTimeout(() => {
      lax.addElements('.logo', {
        scrollY: {
          translateY: [
            [0, 200],
            [50, 150],
          ],
          translateX: [
            [0, 200],
            ['-1*elCenterX', 0],
          ],
          scale: [
            [0, 200],
            [2, 1]
          ],
          filter: [
            [0, 200],
            [100, 0],
            {
              cssFn: (val) => `invert(${val}%)`
            }
          ],
        }
      }, {
        easing: 'easeInOutQuint'
      });
    }, 10);

    lax.addElements('.name', {
      scrollY: {
        translateY: [
          [0, 200],
          [150, 0],
        ],
        opacity: [
          [0, 200],
          [0, 1]
        ]
      }
    });

    lax.addElements('.about-me-container', {
      scrollY: {
        translateY: [
          [0, 'screenHeight / 2'],
          [150, 0],
        ],
        opacity: [
          [0, 'screenHeight / 2'],
          [0, 1]
        ]
      }
    });
    lax.addElements('.about-me-container *', {
      scrollY: {
        opacity: inOutAnimation
      }
    });
    lax.addElements('.connect-with-me', {
      scrollY: {
        translateY: [
          ['elInY', 'elOutY/2'],
          [150, 0],
        ],
        opacity: [
          ['elInY', 'elOutY/2'],
          [0, 1]
        ]
      }
    });

    lax.addElements('.scroll-down-info', {
      scrollY: {
        opacity: [
          [0, 30],
          [1, 0]
        ]
      }
    });

    // PROJECTS
    lax.addElements('.project', {
      scrollY: {
        opacity: inOutAnimation,
        translateY: [
          ['elInY - ( screenHeight / 4)', 'elCenterY - ( screenHeight / 4)'],
          [100, 0]
        ],
        scale: [
          ['elInY - ( screenHeight / 4)', 'elCenterY - ( screenHeight / 4)'],
          [0.8, 1]
        ],
      }
    });
    // lax.addElements('.project-img', {
    //   scrollY: {
    //     perspective: [
    //       ['elInY', 'elOutY'],
    //       [300, 300]
    //     ],
    //     rotateX: [
    //       ['elInY', 'elCenterY', 'elOutY'],
    //       [3, 0, -3]
    //     ]
    //   }
    // });

    // SKILLS
    lax.addElements('.skills-container h2, .skills li', {
      scrollY: {
        opacity: inOutAnimation
      }
    });

    // CONTACT FORM
    lax.addElements('#contact .form-group', {
      scrollY: {
        translateY: [
          ['elInY', 'elInY + 100'],
          [100, 0]
        ],
        opacity: inOutAnimation
      }
    });

    increaseLoadState();

    return () => {
      lax.removeElements('body');
    };
  }, []);

  return (
    <>
      {/* {showLoading && <Loading />}  */}

      <SEO title="Home" />

      <Container>

        <HeroBackground onLoad={increaseLoadState} />

        <HeroContainer className="hero-container">
          <ScrollDownInfo className="scroll-down-info">
            Scroll down
          </ScrollDownInfo>
          <HeroName className="name">
            Hi there, I'm Bennett!<br />
            Student, Web-Developer and working at Smarketer.
          </HeroName>

          <AboutMeContainer className="about-me-container">
            <p>
              Hey there, I am Bennett.
            </p>
            <p>
              I'm a {age}-year-old and currently studying Applied Computer Science at <a href="https://htw-berlin.de">HTW Berlin</a>.
            </p>
            <p>
              Alongside my studies I am working at <a href="https://smarketer.de">Smarketer</a> and develop open-source software on GitHub.
            </p>

            <AboutMeLinkContainer className="connect-with-me">
              <h3>Connect with me</h3>
              <AboutMeLink href="https://github.com/vantezzen" aria-label="My GitHub profile">
                <GitHub />
              </AboutMeLink>
              <AboutMeLink href="https://www.linkedin.com/in/bennett-h/" aria-label="My LinkedIn profile">
                <Linkedin />
              </AboutMeLink>
            </AboutMeLinkContainer>
          </AboutMeContainer>
        </HeroContainer>

        {/* PROJECTS */}
        <ProjectsContainer>
          <h2>Recent projects.</h2>

          <ProjectsListContainer>

            <ProjectContainer className="project">
              <TiltedByMouse>
                <ProjectImage className="project-img">
                  <Image src="screenshots/ferdi.png" />
                </ProjectImage>
              </TiltedByMouse>

              <ProjectHeading aria-label="Project name: Ferdi">Ferdi</ProjectHeading>
              <ProjectDescription>Ferdi is a messaging browser that allows you to combine your favorite messaging services into one application</ProjectDescription>
              <ProjectTechStack aria-label="Technologies used">ElectronJS, ReactJS</ProjectTechStack>

              <Link to="/ferdi" style={{ textDecoration: 'none' }} className="view-project-btn">
                <LightButton>
                  View
                </LightButton>
              </Link>
            </ProjectContainer>


            <ProjectContainer className="project">
              <TiltedByMouse>
                <ProjectImage className="project-img">
                  <Image src="screenshots/skipsilence_1.png" />
                </ProjectImage>
              </TiltedByMouse>

              <ProjectHeading aria-label="Project name: Skip Silence">Skip Silence</ProjectHeading>
              <ProjectDescription>
                Skip Silence is a browser extension that allows you to skip silence parts of videos.
              </ProjectDescription>
              <ProjectTechStack aria-label="Technologies used">TypeScript, ReactJS, JavaScript Media API</ProjectTechStack>

              <Link to="/skipsilence" style={{ textDecoration: 'none' }} className="view-project-btn">
                <LightButton>
                  View
                </LightButton>
              </Link>
            </ProjectContainer>


            <ProjectContainer className="project">
              <TiltedByMouse>
                <ProjectImage className="project-img">
                  <Image src="screenshots/blymp_1.png" />
                </ProjectImage>
              </TiltedByMouse>

              <ProjectHeading aria-label="Project name: blymp">blymp</ProjectHeading>
              <ProjectDescription>
                Easily send files between devices.
              </ProjectDescription>
              <ProjectTechStack aria-label="Technologies used">WebSockets, WebRTC</ProjectTechStack>

              <Link to="/blymp" style={{ textDecoration: 'none' }} className="view-project-btn">
                <LightButton>
                  View
                </LightButton>
              </Link>
            </ProjectContainer>

            <ProjectContainer className="project">
              <TiltedByMouse>
                <ProjectImage className="project-img">
                  <Image src="screenshots/github_1.png" />
                </ProjectImage>
              </TiltedByMouse>

              <ProjectHeading>More projects on GitHub</ProjectHeading>
              <ProjectDescription>You can find all of my open-source projects on GitHub.</ProjectDescription>
              {/* <ProjectTechStack>.</ProjectTechStack> */}

              <a href="https://github.com/vantezzen" rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none' }} aria-label="GitHub profile">
                <LightButton className="view-project-btn">
                  View
                </LightButton>
              </a>
            </ProjectContainer>

          </ProjectsListContainer>
        </ProjectsContainer>

        {/* SKILLS */}
        <SkillsContainer className="skills-container">
          <h2>Technologies I've used.</h2>

          <ul className="skills">
						<li>JavaScript</li>
            <ul className="subskills">
              <li>NodeJS</li>
              <li>Express</li>
              <li>socket.io</li>
              <li>AdonisJS</li>
              <li>React</li>
              <li>GatsbyJS</li>
              <li>react-router</li>
              <li>Redux</li>
              <li>styled-components</li>
              <li>mobx</li>
              <li>mobx-react</li>
              <li>three.js</li>
              <li>ElectronJS</li>
              <li>vueJS</li>
              <li>AngularJS</li>
              <li>jQuery</li>
            </ul>
						<li>CSS</li>
            <ul className="subskills">
              <li>SCSS</li>
              <li>Bootstrap</li>
              <li>tailwind.css</li>
            </ul>
						<li>HTML</li>
						<li>PHP</li>
            <ul className="subskills">
              <li>Laravel</li>
              <li>PHPUnit</li>
              <li>Composer</li>
            </ul>
						<li>SQL</li>
            <ul className="subskills">
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
            <li>C#</li>
            <ul className="subskills">
              <li>Unity</li>
              <li>ASP.NET</li>
            </ul>
						<li>Redis</li>
						<li>Docker</li>
            <ul className="subskills">
						  <li>Kubernetes</li>
            </ul>
						<li>Git</li>
						<li>Bash</li>

						<li>Adobe Photoshop</li>
						<li>Affinity Photo</li>
						<li>Adobe XD</li>
						<li>Adobe Illustrator</li>
					</ul>
        </SkillsContainer>

        {/* CONTACT FORM */}
        <ContactContainer id="contact">
          <h2>Contact me.</h2>
          <p style={{...tw`text-sm`, color: '#666'}}>Please use GitHub issues instead of this contact form for reporting bugs, feature requests and questions for my open-source projects</p>

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
              <DarkButton>
                Send message
              </DarkButton>
            </SubmitButton>
            
          </form>
        </ContactContainer>

        <Footer />
      </Container>
    </>
  );
}

export default IndexPage
