import React from 'react'
import GithubLogo from '../assets/Github-Projectpng.png'
import ExportIcon from '../assets/Export_ICO.png'
import Roshampaw from '../assets/Roshampaw.png'
import CV from '../assets/CVwithCSS.png'
import TinDog from '../assets/Tindog.png'
import Drumkit from '../assets/Drumkit.png'
import Snowman from '../assets/Snowman.png'
import Minesweeper from '../assets/MineSweeper.png'
import HSL from '../assets/HLSColorPicker.png'
import { CodingProject } from './CodingProjectItem'

export function GithubProjects() {
  return (
    <nav className="github-projects">
      <header>
        <div>
          <img src={ GithubLogo } alt="Picture of github's logo" />
          <h2>GitHub Projects</h2>
          <a href="https://github.com/kprieto14">Check it Out!</a>
          <a href="https://github.com/kprieto14"><img src={ ExportIcon } alt="Export Icon"/></a>
        </div>
        
        <p>Here is a selection of projects I have created throughout my studies:</p>
      </header>

      <section className='github-grid-container'>
        <CodingProject 
          projectLink={'https://catshambo.netlify.app'}
          title={'Roshambo (Rock, Paper, Scissors)'}
          pictureLink={ Roshampaw }
          pictureDescription={'Picture of a screenshot of Roshampaw website'}
          description={'A front-end website incorporating Typescript that simulates a cat-themed, 2-player Roshambo game. Meow.'}
        />

        <CodingProject 
          projectLink='https://kprieto14.github.io/cv-with-css/'
          title='CV with CSS'
          pictureLink={ CV }
          pictureDescription='Screenshots of an old resume website'
          description='My first attempt at a CV with basic HTML and CSS'
        />

        <CodingProject 
          projectLink='https://kprieto14.github.io/tindog/'
          title='TinDog'
          pictureLink={ TinDog }
          pictureDescription='Screenshots of a fake dating website for dogs'
          description='A landing page for a dog dating application using Bootstrap as a CSS framework. Woof'
        />

        <CodingProject 
          projectLink='https://kprieto14.github.io/DrumKit/'
          title='Drum Kit'
          pictureLink={ Drumkit }
          pictureDescription='Screenshot of a website that plays sounds as you press keys down'
          description='A front-end website that practiced implementing Javascript to simulate drum noises
          as keys are pressed down.'
        />

        <CodingProject 
          projectLink='https://kpminsweeper.netlify.app'
          title='Minesweeper'
          pictureLink={ Minesweeper }
          pictureDescription='Screenshot of minesweeper game site'
          description='A minesweeper game that runs by communicating with a back-end API server to create a front-end user-interface for a Minesweeper clone.'
        />

        <CodingProject 
          projectLink='https://hslcolorchooser.netlify.app'
          title='Color Picker'
          pictureLink={ HSL }
          pictureDescription='Screenshot of HSL color picker site'
          description='My version of a HSL color picker that implements useState from React.'
        />

        <CodingProject 
          projectLink='https://snowman-kp.netlify.app'
          title='Snowman'
          pictureLink={ Snowman }
          pictureDescription='Screenshot of snowman game site'
          description='A less grim variation of a popular game. As you guess letters correctly, a snowman will be built on the screen. Try to figure out the word in the least amount of tries as possible :)'
        />
        
      </section>
    </nav>
  )
}