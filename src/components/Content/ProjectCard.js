import React from 'react'

const ProjectCard = ({image, name, hmw, description, position}) => {
  return (
    <article className={`project-card ${position}`}>
      <div className="project-thumb"
        style={{backgroundImage: `url(${image})`}}/>
      <div className="project-content">
        <h2 className="label">
          {name}
        </h2>
        <h3 className="project-title">
          {hmw}
        </h3>
        <p className="project-description">
          {description}
        </p>
      </div>
    </article>
  )
}

export default ProjectCard
