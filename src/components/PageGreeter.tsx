import React from 'react'
import KristyPF from '../assets/Kristy_PF.png'

export function PageGreeter() {
  return (
      <section className="page-greeter">
        <img src={KristyPF} alt="Profile picture of Kristy Prieto" />
        <div>
          <h1>Hello! I am Kristy Prieto 👋🏽</h1>
          <h2>And hopefully your next developer~</h2>
        </div>
    </section>
  )
}