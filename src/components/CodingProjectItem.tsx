import React from "react"

type Project = {
  projectLink: string,
  title: string,
  pictureLink: string,
  description: string,
  pictureDescription: string 
}  

export function CodingProject({ projectLink, title, pictureLink, description, pictureDescription }:Project) {
  return (
      <article>
          <div className="border">
            <a href={projectLink}>
              <img src={pictureLink} alt={pictureDescription}/></a>
          </div>

          <ul>
            <li className="project-title"><a href={projectLink}>{title}</a></li>
            <li className="project-description">{description}</li>
          </ul>
      </article>
  )
}