import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
    */}
      <div className="container">
        <div className="row align-items-start">
          {/* left side will stay static in one place and hold links to navigate right side */}
          <header className="col-lg-5 vh-100">
            <h1>Taylor Rodgers</h1>
            <h3>Computer Science Student</h3>
            <p>&gt;brief summary here</p>

            <div className="links">
              <a href="github.com">Git</a>
              <a href="linkedin.com">LinkedIn </a>
              <a href="Resume.pdf">Resume</a>
            </div>
          </header>
          {/* right side will contain things like projects and experience. will be scrollable up and down */}
          <main className="col-lg-7">
            <section>
              <h1>About Section / Introduction</h1>
              <p>&gt; insert Introduction here</p>
            </section>
            <section>
              <h1>Schooling</h1>
              <p>&gt; degrees/courses will go here</p>
            </section>
            <section>
              <h1>Projects</h1>
              <p>&gt; personal and maybe school projects will go here</p>
            </section>
            <section>
              <h1>Skills</h1>
              <p>&gt; skills will go here, might remove this later</p>
            </section>

          </main>

        </div>

      </div>
    </>
  )
}

export default App
