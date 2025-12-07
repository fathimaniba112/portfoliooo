import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector('.hero-section')
      if (!hero) return
      const heroHeight = hero.offsetHeight
      const scrollPosition = window.scrollY
      if (scrollPosition < heroHeight) document.body.classList.add('show-sidebar')
      else document.body.classList.remove('show-sidebar')
    }

    const onLoad = () => document.body.classList.add('show-sidebar')

    window.addEventListener('scroll', onScroll)
    window.addEventListener('load', onLoad)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('load', onLoad)
    }
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#home">FN</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item"><a className="nav-link active rounded-pill px-3" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#expertise">Expertise</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#certificate">Certificate</a></li>
              <li className="nav-item"><a className="nav-link" href="#work">Work</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="grid-container">
          <div className="plane">
            <div className="grid"></div>
            <div className="glow"></div>
          </div>
          <div className="plane">
            <div className="grid"></div>
            <div className="glow"></div>
          </div>
        </div>

        <div className="hero-text">
          <h1>Hi. I'm <br/>FATHIMA NIBA P.</h1>
          <p>
            I'm a result-oriented Web Developer building and managing websites and web applications 
            that lead to the success of the overall product.
          </p>
        </div>
      </section>

      <div className="sidebar">
        <ul className="social-icons">
          <li><a href="https://www.linkedin.com/in/fathima-niba-p/" className="linkedin"><i className="fa-brands fa-linkedin-in"></i></a></li>
          <li><a href="https://wa.me/9947089544" className="twitter"><i className="fa-brands fa-whatsapp"></i></a></li>
          <li><a href="https://instagram.com/fathima_.niba" className="youtube"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="https://github.com/fathimaniba112" className="github"><i className="fa-brands fa-github"></i></a></li>
          <li><a href="mailto:fathimaniba9544@gmail.com" className="gmail"><i className="fa-solid fa-envelope"></i></a></li>
          <li><a href="https://leetcode.com/u/Fathima_Niba_P/" className="leetcode"><i className="fa-solid fa-code"></i></a></li>
        </ul>
      </div>

      <section id="about" className="about-me py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 about-text">
              <h2 className="display-4 text-center">About Me</h2>
              <div className="underline"></div>
              <div className="d-flex justify-content-start align-items-center about-details">
                <h3>Get to know me!</h3>
              </div>

              <p>I'm a <strong>Frontend ,Backend Web Developer</strong> building and managing the  of Websites and Web Applications that lead to the success of the overall product. Check out some of my work in the <a href="#projects">Projects</a> section.</p>
              <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
              <button className="d-flex justify-content-start align-items-center contact-btn">Contact</button>
            </div>

            <div className="col-md-4 skills-section">
              <h3 className="text-center">My Skills</h3>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                <button className="btn btn-light btn-sm">HTML</button>
                <button className="btn btn-light btn-sm">CSS</button>
                <button className="btn btn-light btn-sm">JavaScript</button>
                <button className="btn btn-light btn-sm">Bootstrap</button>
                <button className="btn btn-light btn-sm">Python</button>
                <button className="btn btn-light btn-sm">Django</button>
                <button className="btn btn-light btn-sm">Mysql</button>
                <button className="btn btn-light btn-sm">MogoDB</button>
                <button className="btn btn-light btn-sm">REACT JS</button>
                <button className="btn btn-light btn-sm">EXpress JS</button>
                <button className="btn btn-light btn-sm">Node JS</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="container py-5 text-center">
        <h2 className="mb-5">My Expertise</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="expertise-card">
              <i className="fa-solid fa-user-graduate fa-2x mb-3"></i>
              <h3><span className="green-underline">BCA</span> Graduate</h3>
              <p>I have completed my Bachelor of Computer Applications (BCA) with strong fundamentals in programming, software development, and web technologies.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="expertise-card">
              <i className="fa-brands fa-python fa-2x mb-3"></i>
              <h3><span className="green-underline">Python & Django</span> Web Development Professional</h3>
              <p>Completed a professional course in Python and Django Web Development, gaining strong skills in backend programming, web frameworks, and full-stack application building.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="expertise-card">
              <i className="fa-solid fa-code fa-2x mb-3"></i>
              <h3><span className="green-underline">MERN</span> Stack</h3>
              <p>Skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js, covering both frontend and backend development.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section py-5 text-center">
        <div className="container">
          <h2 className="projects-title">PROJECTS</h2>
          <div className="underline"></div>
          <p className="projects-desc mt-3">Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
        </div>

        <div className="container project-showcase">
          <div className="row project-item">
            <div className="col-md-6">
              <img src="/img/arun-ice.png" alt="Project Screenshot" className="laptop-img" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h3 className="project-title">Website of Arun Icecream</h3>
              <p className="project-desc">Arun Icecream Website is a successful project that I created using HTML , CSS , Bootstrap and Javascript .</p>
              <a href="https://fathimaniba112.github.io/Arun-Icecream/" className="btn-project">CASE STUDY</a>
            </div>
          </div>

          <div className="row project-item">
            <div className="col-md-6">
              <img src="/img/sinet.png" alt="Project Screenshot" className="laptop-img" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h3 className="project-title">Website of Sinet</h3>
              <p className="project-desc">Sinet Website is a successful project that I created using HTML , CSS , Bootstrap and Javascript and React .</p>
              <a href="#" className="btn-project">CASE STUDY</a>
            </div>
          </div>

          <div className="row project-item">
            <div className="col-md-6">
              <img src="/img/udemy.png" alt="Project Screenshot" className="laptop-img" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h3 className="project-title">Udemy -E Learning Platform</h3>
              <p className="project-desc">Udemy -E Learning Platform is a successful project that I created using react.</p>
              <a href="https://udemy-website-gold.vercel.app/" className="btn-project">CASE STUDY</a>
            </div>
          </div>

          <div className="row project-item">
            <div className="col-md-6">
              <img src="/img/asana.png" alt="Project Screenshot" className="laptop-img" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h3 className="project-title">Website of Asana</h3>
              <p className="project-desc">Asana Website is a successful project that I created using React .</p>
              <a href="https://booking-com-website-8z6i.vercel.app/" className="btn-project">CASE STUDY</a>
            </div>
          </div>

          <div className="row project-item">
            <div className="col-md-6">
              <img src="/img/booking.png" alt="Project Screenshot" className="laptop-img" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h3 className="project-title">Website of Booking.com</h3>
              <p className="project-desc">Booking.com Website is a successful project that I created using React .</p>
              <a href="https://booking-com-website.vercel.app/" className="btn-project">CASE STUDY</a>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="featured-section py-5 text-center">
        <div className="container">
          <h2 className="section-title">FEATURED WORKS</h2>
          <div className="underline"></div>
          <p className="section-desc mt-3">Here you will find some of my best creative and design works. Each one highlights my expertise in visual design and web development.</p>

          <div className="row g-4 justify-content-center mt-4">
            <div className="col-md-4">
              <Link to="/html" className="text-decoration-none">
                <div className="work-card p-3">
                  <img src="/img/html.png" alt="Html" />
                  <div className="work-title"><span>Html</span><span className="arrow-icon">↗</span></div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/css" className="text-decoration-none">
                <div className="work-card p-3">
                  <img src="/img/css.webp" alt="Css" />
                  <div className="work-title"><span>Css</span><span className="arrow-icon">↗</span></div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/bootstrap" className="text-decoration-none">
                <div className="work-card p-3">
                  <img src="/img/bootstrap.jpg" alt="Bootstrap" />
                  <div className="work-title"><span>Bootstrap</span><span className="arrow-icon">↗</span></div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/javascript" className="text-decoration-none">
                <div className="work-card p-3">
                  <img src="/img/js.webp" alt="Javascript" />
                  <div className="work-title"><span>Javascript</span><span className="arrow-icon">↗</span></div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/python" className="text-decoration-none">
                <div className="work-card p-3">
                  <img src="/img/python.png" alt="Python" />
                  <div className="work-title"><span>Python / Django</span><span className="arrow-icon">↗</span></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer py-1 mt-3">
        <div className="container text-center">
          <h5 className="fw-bold mb-3">FATHIMA NIBA P</h5>
          <hr className="my-4" />
          <div className="footer-nav mb-4">
            <span className="fw-bold mx-3">About Me</span>
            <span className="fw-bold mx-3">Expertise</span>
            <span className="fw-bold mx-3">Work</span>
            <span className="fw-bold mx-3">Projects</span>
          </div>
          <hr className="my-4" />

          <div className="social-icons mb-3 d-flex justify-content-center gap-3">
            <a href="https://instagram.com/fathima_.niba" target="_blank" rel="noreferrer" className="social-icon"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/fathima-niba-p/" target="_blank" rel="noreferrer" className="social-icon"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/fathimaniba112" target="_blank" rel="noreferrer" className="social-icon"><i className="bi bi-github"></i></a>
            <a href="mailto:fathimaniba9544@gmail.com" className="social-icon"><i className="fa-solid fa-envelope"></i></a>
            <a href="https://leetcode.com/u/Fathima_Niba_P/" target="_blank" rel="noreferrer" className="social-icon"><i className="fa-brands fa-code"></i></a>
            <a href="https://wa.me/9947089544" target="_blank" rel="noreferrer" className="social-icon"><i className="fa-brands fa-whatsapp"></i></a>
          </div>

          <hr className="my-4" />
          <p className="text-muted mb-0">© 2025 FATHIMA NIBA P. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
