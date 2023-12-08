import React from "react"
import { ExperienceItem } from "./ExperienceItem"
import Briefcase from '../assets/Briefcase.png'
import Yreads from '../assets/yReads_ICO.png'
import Childrens from '../assets/Childrens_ICO.png'
import LIFE from '../assets/LIFE_ICO.png'

export function JobExperience() {
  return (
    <section className="job-experience">
      <div className="job-container">
        <img src={ Briefcase} alt="Icon of a briefcase"/>
        {/* <h2 style="padding-left: 15px;">Job Experience</h2> */}
        <h2>Job Experience</h2>
      </div>

    <ExperienceItem
      photoSource={ Yreads}
      photoDescription="Icon for yReads program."
      name="yReads!"
      title="Program Assistant"
      dates="February 2023 - Current"
      description="Part-time position working with elementary aged students to teach literacy skills.
      Assists the Site Coordinators in planning and implementation of lesson plans, activities,
      and other tasks as needed."
      secondDescription={'Assitance with classroom set-up, snack, clean-up, hallway transitions, and classroom management.'}
      thirdDecsription={null}
    />

    <ExperienceItem
      photoSource={ Childrens }
      photoDescription="Icon for Children's Health hospital logo."
      name="Children's Health"
      title="Recreation Therapist"
      dates="September 2019 - November 2022"
      description="Full-time position working with various individuals aged 5-17 years old in the Psychiatry
      department to work with various diagnoses such as anxiety, depression, eating disorders, and 
      other emotional/ behavioral disorders."
      secondDescription={'Assessment and documentation of leisure interests to new patients.'}
      thirdDecsription={'Planning and implementation of activities to learn coping skills, emotional regulation, leisure education, social skills, and leisure resources in their community..'}
    />

    <ExperienceItem
      photoSource={ LIFE }
      photoDescription="Icon for LIFE Therapies logo."
      name="LIFE Therapies/ Complete Treatment LLC"
      title="Recreation/ Aquatic Therapist"
      dates="October 2017 - November 2022"
      description="Contract position working with various individuals aged 7-36 with 
      and without various disabilities."
      secondDescription={'Assessment and intake of new admissions looking to receive services through Medicaid, as well as weekly, quarterly, and annual documentation of their progress.'}
      thirdDecsription={'Planning and implementation of therapy sessions to work on skills including community integration, adaptive recreation and sports, emotional regulation, leisure education, physical activity, and social skills.'}
    />

    </section>
  )
}