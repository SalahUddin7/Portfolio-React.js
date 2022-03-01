import React from 'react';
import { data } from '../data/DataForAllProjects';
import Card from './Card';
import ProjectModal from './ProjectModal';

export default function ProjectSection({ setModal }) {
  const cards = data.map((project) => (
    <Card
      key={project.id}
      project={project}
      onClick={() => setProject(project)}
    />
  ));

  function setProject(project) {
    setModal(<ProjectModal project={project} />);
  }
  return (
    <div className="project-section" id="projects">
      <div className="project-container">
        <div className="item-one">
          <h1>Projects</h1>
        </div>
        <div className="project-section-flex">
          <div className="item-two">
            Here you can see some of my works. I did everything myself from
            Figma to code. Please click on respective project to see more
            details.
          </div>
          <div className="item-three">
            <ul>{cards}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
