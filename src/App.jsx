import { FaGithub, FaLinkedin, FaFileAlt, FaYoutube } from 'react-icons/fa';
import { FaCircleArrowUp } from "react-icons/fa6";
import { useEffect } from 'react'
import './index.css'
import './App.css'


function App() {

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    - on selection of a project it would be cool if it did the thing where it takes the little image 
      and enlarges it on the page in front of you too like the old windows zooming rectangle
    - when a section comes into view it goes from static to a clear image like tuning into a channel on antenna
    */}
    <div className="mouse-glow" />
      <div className="portfolio-container">
        <div className="crt-overlay">
          
        </div>
        <div className="layout">
          {/* left side will stay static in one place and hold links to navigate right side */}
          <header className="left-col">
            <div>
              <h1>TAYLOR RODGERS</h1>
              <h2>&gt; FULL-STACK DEV & MACHINIST_</h2>
              <p className='intro'>Building detail-oriented, full-stack applications. Background in high-tolerance CNC machining.</p>
            </div>
            <nav className="int-links">
              <a className='btn' href="#About">ABOUT</a>
              <a className='btn' href="#Education">EDUCATION</a>
              <a className='btn' href="#Projects">PROJECTS</a>
              <a className='btn' href="#Skills">SKILLS</a>
            </nav>
            <nav className="ext-links">
              <a href="https://github.com/TaylorBodgers" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/taylorrodgers0007" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={`${import.meta.env.BASE_URL}Rodgers_Taylor_Resume.pdf`} target="_blank" rel="noopener noreferrer" aria-label="Resume">
                <FaFileAlt />
              </a>
            </nav>
          </header>
          {/* right side will contain things like projects and experience. will be scrollable up and down */}
          <main className="right-col">
            <section id="About">
              <h2>&gt; About</h2>
              <div className="card">
                <p>
                  Hello, I'm Taylor, and I like to build things. I'm a Computer Science student at Weber State University
                  with a background in precision CNC machining, which means I'm pretty obsessive about the little details
                  that taking something from good to almost perfect. I enjoy working across the whole stack 
                  especially when I get to dig into how things work under the hood. 
                </p>
                <p>
                  Right now, I'm wrapping up my CS degree and figuring out what is next. Over the last few years I've been
                  balancing my full-time job with full-time school. During that I've learned that making physical parts and
                  writing code aren't that different after all. It turns out that both are about taking an idea and building
                  it into something that works while tracking down the little problems, figuring out why it broke, 
                  and implementing a fix.
                </p>
                <p>
                  In my free time, you can find me hanging out with friends and family, going to EDM festivals, playing video
                  games, watching YouTube videos or playing guitar.
                </p>
              </div>
            </section>
            <section id="Education">
              <h2>&gt; Education</h2>
              <div className="card">
                <div className="card-top">
                  <h3 className="card-title">B.S. in Computer Science</h3>
                  <span className="card-date">Spring 2027</span>
                </div>
                <p className="card-sub">Weber State University - 3.70 GPA</p>
                <div className="card-tags">
                  <span>Data Structures & Algorithms</span>
                  <span>Software Engineering</span>
                  <span>Operating Systems</span>
                  <span>Advanced Databases</span>
                  <span>Network Security</span>
                </div>
              </div>
            </section>
            <section id="Projects">
              <h2>&gt; Projects</h2>
              <div className="card">
                <div className="card-top">
                  <h3 className="card-title">Retro CRT Portfolio</h3>
                  <a href="https://github.com/TaylorBodgers/TaylorRodgersPortfolio" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
                <p className="card-sub">
                  Built this site from scratch in React and custom CSS instead of copying a template.
                  My focus was to recreate an old CRT monitor field, complete with scanlines, chromatic
                  aberration, and a sticky terminal-style layout, while keeping the UI clean and readable.
                </p>
                <div className="card-tags">
                  <span>React</span>
                  <span>Vite</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
              </div>
              <div className="card">
                <div className="card-top">
                  <h3 className="card-title">AlgoGauge - Algorithm Learning WebApp</h3>
                  <a href="https://youtu.be/l3eHwF3Ub1k" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </div>
                <p className="card-sub">
                  CS Capstone Project in a small student team. I worked on the interactive learning module, putting
                  together a 3D flipping flashcard system and a quiz mode so users can actively practice and test 
                  themselves on the material.
                </p>
                <div className="card-tags">
                  <span>React</span>
                  <span>Deno</span>
                  <span>MongoDB</span>
                  <span>CSS</span>
                </div>
              </div>
              <div className="card">
                <div className="card-top">
                  <h3 className="card-title">Web Audio Synthesizer</h3>
                  <a href="https://github.com/TaylorBodgers/Synthesizer" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
                <p className="card-sub">
                  A browser-based synth I built from scratch using the Web Audio API. It supports both computer-keyboard
                  and MIDI controller input, with real-time controls for switching waveforms, dialing in a cutoff filter,
                  and shaping sound with an ADSR envelope.
                </p>
                <div className="card-tags">
                  <span>Javascript</span>
                  <span>Web Audio API</span>
                  <span>MIDI</span>
                  <span>HTML/CSS</span>
                </div>
              </div>
            </section>
            <section id="Skills">
              <h2>&gt; Skills</h2>
              <div className="card">
                <p className="card-sub">Languages:</p>
                <div className="card-tags">
                  <span>C / C# / C++</span>
                  <span>Python</span>
                  <span>JavaScript</span>
                  <span>SQL</span>
                </div>
                <p className="card-sub">Frameworks:</p>
                <div className="card-tags">
                  <span>React</span>
                  <span>Django</span>
                  <span>Deno / Node.js</span>
                  <span>.NET</span>
                </div>
                <p className="card-sub">Tools & Env:</p>
                <div className="card-tags">
                  <span>Git</span>
                  <span>Linux</span>
                  <span>MongoDB</span>
                  <span>SQL Server</span>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
