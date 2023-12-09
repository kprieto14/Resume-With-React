import React from "react"
import { HeaderNav } from "./components/HeaderNav"
import { PageGreeter } from "./components/PageGreeter"
import { Background } from "./components/Background"
import { GithubProjects } from "./components/GithubProjects"
import { Education } from "./components/Education"
import { JobExperience } from './components/JobExperience'

function App() {

  return (
    <>
      <HeaderNav/>

      <div className="dotted-container">
        <section className="dotted-line"/>
      </div>

      <main>
        <PageGreeter/>

        <Background/>

        <GithubProjects/>

        <Education/>

        <JobExperience/>
      </main>

      <footer>
        <p>Made with 🫶🏽 in Florida</p>    
      </footer>
    </>
  )
}

export default App
