import React from "react";

function RenderSpan({technologies}){
  console.log(technologies)
  const newList = technologies.map((e,idx) =>{
    return(
      <span key={idx}>
        {e}
      </span>
    )
  })
  return newList
}


function ProjectItem({id,name,about,technologies}) {
  return (
    <div className="project-item" key={id}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <RenderSpan technologies={technologies}/>
      </div>
    </div>
  );
}

export default ProjectItem;
