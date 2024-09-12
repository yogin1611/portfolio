import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaReact, FaNode, FaGithub, FaGitAlt, FaFigma, FaDocker, FaJava, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiCsharp, SiNextdotjs, SiExpress, SiFlutter, SiFirebase, SiMysql, SiMongodb, SiKotlin, SiCplusplus } from 'react-icons/si';
import './skill.css'; // Make sure to update this CSS file

export const Skills = () => {
  const skillCategories = [
    {
      name: 'Languages',
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
      skills: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'Flutter', icon: <SiFlutter /> },
      ],
    },
    {
      name: 'Libraries',
      skills: [
        { name: 'React', icon: <FaReact className="react-icon" /> },
        { name: 'Angular', icon: <FaAngular className="react-icon" /> },
      ],
    },
    {
      name: 'Databases',
      skills: [
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
      ],
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Figma', icon: <FaFigma /> },
      ],
    },
    {
      name: 'Environments',
      skills: [
        { name: 'Node.js', icon: <FaNode className="node-icon" /> },
        { name: 'Docker', icon: <FaDocker /> },
      ],
    },
  ];

  // Find the maximum number of skills in any category
  const maxSkills = Math.max(...skillCategories.map(category => category.skills.length));

  return (
    <section className="skill-section" id="skills">
      <Container>
        <h2>Skills</h2>
        <div className="skill-table">
          <div className="skill-header">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category-title">{category.name}</div>
            ))}
          </div>
          <div className="skill-body">
            {[...Array(maxSkills)].map((_, rowIndex) => (
              <div key={rowIndex} className="skill-row">
                {skillCategories.map((category, colIndex) => (
                  <div key={colIndex} className="skill-cell">
                    {category.skills[rowIndex] && (
                      <div className="skill-item">
                        <div className="skill-icon">
                          {category.skills[rowIndex].icon}
                        </div>
                        <div className="skill-name">{category.skills[rowIndex].name}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};