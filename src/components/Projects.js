import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

export const Projects = () => {

  const projects = [
    {
      title: "SDC MVJCE Website",
      description: "Led the development of the Software Development Club’s official website, incorporating responsive design and interactive features to enhance user engagement.",
      imgUrl: projImg1,
    },
    {
      title: "Task Manager Application",
      description: "Built an Android app for task management, utilizing Firebase for real-time data synchronization. The app supports task creation, updates, and deletions with a user-friendly interface.",
      imgUrl: projImg2,
    },
    {
      title: "Netflix Homepage Clone",
      description: "Developed a clone of Netflix's homepage to hone front-end development skills. Gained proficiency in CSS layout techniques and responsive design.",
      imgUrl: projImg3,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>As a passionate developer, I've worked on several projects that demonstrate my expertise in web and Android development, front-end design, and machine learning. Each project reflects my ability to solve real-world problems through technology, with a focus on clean, efficient code and intuitive user experiences. Below are some of the key projects I've worked on, showcasing my skills in various frameworks, languages, and tools.</p>
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
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"/>
    </section>
  )
}
