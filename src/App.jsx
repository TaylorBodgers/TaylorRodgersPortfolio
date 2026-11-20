import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { useState } from 'react'
import './index.css'
import './App.css'


function App() {

  return (
    <>
    {/*
    overall theme will be either CyberPunk colors(blues, yellows, and darker colors)
    or a retro vaporwave style (cyan, pink, and dark grays) (could potentially mix 2 options)
    NOTE: could be sick to make the whole screen look like a CRT screen. (including rounded screen look)
    - will absolutely have CRT lines on the screen at the minimum
    - could also be cool to add navigation by using arrow keys
    - if page has an error, have a separate browser game to play in the meantime like the google dinosaur game (unlikely)
    - page not found shows CRT no signal screen or static screen
    - on selection of a project it would be cool if it did the thing where
      it takes the little image and enlarges it on the page in front of you too like the old windows zooming rectangle
    - when a section comes into view it goes from static to a clear image like tuning into a channel on antenna
    */}
      <div className="portfolio-container">
        <div className="crt-overlay">
          
        </div>
        <div className="layout">
          {/* left side will stay static in one place and hold links to navigate right side */}
          <header className="left-col">
            <div>
              <h1>TAYLOR RODGERS</h1>
              <h2>&gt; FULL-STACK DEV & MACHINIST_</h2>
              <p>Building detail-oriented, full-stack applications. Background in high-tolerance CNC machining.</p>
            </div>
            <nav className="int-links">
              <a className='btn' href="#About">ABOUT</a>
              <a className='btn' href="#Education">EDUCATION</a>
              <a className='btn' href="#Projects">PROJECTS</a>
              <a className='btn' href="#Skills">SKILLS</a>
            </nav>
            <nav className="ext-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                <FaFileAlt />
              </a>
            </nav>
          </header>
          {/* right side will contain things like projects and experience. will be scrollable up and down */}
          <main className="right-col">
            <section id="About">
              <h2>&gt; About</h2>
              {/* <p>&#123;</p> */}
              <p>&gt; insert Introduction here</p>
              {/* <p>&#125;</p> */}
            </section>
            <section id="Education">
              <h2>Education</h2>
              <p>&gt; degrees/courses will go here</p>
            </section>
            <section id="Projects">
              <h2>Projects</h2>
              <p>&gt; personal and maybe school projects will go here</p>
            </section>
            <section id="Skills">
              <h2>Skills</h2>
              <p>&gt; skills will go here, might remove this later</p>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
