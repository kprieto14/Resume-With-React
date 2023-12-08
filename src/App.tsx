import React from "react"
import { HeaderNav } from "./components/HeaderNav"
import { PageGreeter } from "./components/PageGreeter"
import { Background } from "./components/Background"
import { GithubProjects } from "./components/GithubProjects"
import { QuoteSection } from './components/QuoteSections'
import { Education } from "./components/Education"
import { JobExperience } from './components/JobExperience'

function App() {

  return (
    <>
      <HeaderNav/>

      <section className="dotted-line"/>

      <main>
        <PageGreeter/>

        <Background/>

        <GithubProjects/>

        <Education/>

        <QuoteSection/>

        <JobExperience/>
      </main>

      <footer>
        <p>Made with 🫶🏽 in Florida</p>    
      </footer>
    </>
  )
}

export default App
