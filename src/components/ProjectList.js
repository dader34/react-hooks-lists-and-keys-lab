import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const newList = projects.map((e,idx) =>{
    return(
      <ProjectItem key={idx} id={e.id} name={e.name} about={e.about} technologies={e.technologies}/>
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {newList}
      </div>
    </div>
  );
}

export default ProjectList;
