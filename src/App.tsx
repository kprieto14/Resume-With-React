import React from "react"
import { PageGreeter } from "./components/PageGreeter"
import { Background } from "./components/Background"
import { GithubProjects } from "./components/GithubProjects"
import { QuoteSection } from './components/QuoteSections'
import { Education } from "./components/Education"
import { JobExperience } from './components/JobExperience'

function App() {

  return (
    <>
      <section className="dotted-line"/>

      <PageGreeter/>

      <Background/>

      <GithubProjects/>

      <Education/>

      <QuoteSection/>

      <JobExperience/>
    </>
  )
}

export default App
