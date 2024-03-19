import React from 'react'
import { Container, TabContent, Col, Row, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from "./ProjectCard";
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className='project' id='projects'>
        <Container>
          <Row>
            <Col>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className=/*{isVisible ? "animate__animated animate__bounce" : ""}*/ "test">
                    <h2>Skills</h2>
                  </div>}
                </TrackVisibility>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Development</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tools</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Other</Nav.Link>
                  </Nav.Item>
                </Nav>
                <TabContent>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Loren ipsum</Tab.Pane>
                  <Tab.Pane eventKey="third">Loren ipsum</Tab.Pane>
                </TabContent>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}/>
    </section>
  )
}

export default Projects