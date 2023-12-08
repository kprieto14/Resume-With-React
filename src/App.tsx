import React from "react"
import { PageGreeter } from "./components/PageGreeter"
import { Background } from "./components/Background"
import { GithubProjects } from "./components/GithubProjects"

function App() {

  return (
    <>
      <section className="dotted-line"/>

      <PageGreeter/>

      <Background/>

      <GithubProjects/>
    </>
  )
}

export default App
