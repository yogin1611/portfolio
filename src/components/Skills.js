import React, { useState } from 'react';
import { Container, Collapse } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaReact, FaNode, FaGithub, FaGitAlt, FaFigma, FaDocker, FaJava, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiCsharp, SiNextdotjs, SiExpress, SiFlutter, SiFirebase, SiMysql, SiMongodb, SiKotlin, SiCplusplus } from 'react-icons/si';
import './skill.css'; // Make sure to update this CSS file

export const Skills = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const skillCategories = [
    {
      name: 'Languages',
      id: 'languages',
      skills: [
        { name: 'HTML', icon: <FaHtml5 className="html-icon" /> },
        { name: 'CSS', icon: <FaCss3Alt className="css-icon" /> },
        { name: 'JavaScript', icon: <FaJs className="js-icon" /> },
        { name: 'Kotlin', icon: <SiKotlin className="ts-icon" /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'Python', icon: <FaPython className="python-icon" /> },
        { name: 'PHP', icon: <FaPhp className="php-icon" /> },
      ],
    },
    {
      name: 'Frameworks',
      id: 'frameworks',
      skills: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'Flutter', icon: <SiFlutter /> },
      ],
    },
    {
      name: 'Libraries',
      id: 'libraries',
      skills: [
        { name: 'React', icon: <FaReact className="react-icon" /> },
        { name: 'Angular', icon: <FaAngular className="angular-icon" /> },
      ],
    },
    {
      name: 'Databases',
      id: 'databases',
      skills: [
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
      ],
    },
    {
      name: 'Tools',
      id: 'tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'Docker', icon: <FaDocker /> },
      ],
    },
    {
      name: 'Environments',
      id: 'environments',
      skills: [
        { name: 'Node.js', icon: <FaNode className="node-icon" /> },
        { name: 'Docker', icon: <FaDocker /> },
      ],
    },
  ];

  const handleToggle = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <section className="skill-section" id="skills">
      <Container>
        <h2>Skills</h2>
        {skillCategories.map((category) => (
          <div key={category.id} className="skill-category">
            <div
              className="skill-category-header"
              onClick={() => handleToggle(category.id)}
            >
              <span className="skill-category-title">{category.name}</span>
              <span className="toggle-icon">
                {openCategory === category.id ? '−' : '+'}
              </span>
            </div>
            <Collapse in={openCategory === category.id}>
              <div className="skill-category-content">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            </Collapse>
          </div>
        ))}
      </Container>
    </section>
  );
};
