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
        <div className="layout">
          {/* left side will stay static in one place and hold links to navigate right side */}
          <header className="sticky-lg-top vh-100">
            <h1>TAYLOR RODGERS</h1>
            <h2>Computer Science Student</h2>
            <p>&gt;brief summary here</p>

            <nav className="links">
              <a href="github.com">Git</a>
              <a href="linkedin.com">LinkedIn</a>
              <a href="Resume.pdf">Resume</a>
            </nav>
          </header>
          {/* right side will contain things like projects and experience. will be scrollable up and down */}
          <main className="col-lg-6">
            <section id="About">
              <h2>About Section / Introduction</h2>
              <p>&gt; insert Introduction here</p>
            </section>
            <section id="Education">
              <h2>Schooling</h2>
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
