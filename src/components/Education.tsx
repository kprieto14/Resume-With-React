import React from "react"
import { Skills } from './SkillsSection'
import { ExperienceItem } from "./ExperienceItem"
import GradIcon from '../assets/Graduation.png'
import SuncoastIcon from '../assets/Suncoast-ICO.png'
import NSUIcon from '../assets/NSU_ICO.png'
import FIUIcon from '../assets/FIU_ICON.png'

export function Education() {
  return (
    <section className="education">
      <div className="education-container">
        <img src={ GradIcon } alt="Icon of a graduation cap"/>
        {/* <h2 style="padding-left: 15px;">Education</h2> */}
        <h2>Education</h2>
      </div>

    <Skills/>

    <ExperienceItem
      photoSource={ SuncoastIcon }
      photoDescription="Picture of the Suncoast Developers Guild Logo"
      name="Suncoast Developers Guild"
      title="Full-Stack Web Development Program"
      dates="2023 - Present (12 months)"
      description="Web development program learning backend technology such as C#, SQL, React, 
      .Net, Ruby and frontend technology basics of HTML, CSS and Javascript/Typescript
      to create a full-stack project combining the two areas to prepare me for a career
      in web development."
      secondDescription={null}
      thirdDecsription={null}
    />

    <ExperienceItem
      photoSource={ NSUIcon }
      photoDescription="Picture of Nova Southeastern University's logo"
      name="Nova Southeastern University"
      title="M.S. Developmental Disabilities; Track: Applied Behavioral Analysis"
      dates="2016-2019 (3 years)"
      description="Graduate degree program"
      secondDescription={null}
      thirdDecsription={null}
    />

    <ExperienceItem
      photoSource={ FIUIcon }
      photoDescription="Picture of Florida International University's logo"
      name="Florida International University"
      title="B.S. in Recreation & Sport Management; Track: Recreation Therapy"
      dates="2010 - 2016 (6 years)"
      description="Undergraduate degree program"
      secondDescription={null}
      thirdDecsription={null}
    />

    </section>
  )
}