import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import HtmlProject from './pages/HtmlProject'
import CssProject from './pages/CssProject'
import BootstrapProject from './pages/BootstrapProject'
import JavascriptProject from './pages/JavascriptProject'
import PythonProject from './pages/PythonProject'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">FN</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/html">HTML</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/css">CSS</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/bootstrap">Bootstrap</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/javascript">Javascript</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div style={{paddingTop: '80px'}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/html" element={<HtmlProject/>} />
          <Route path="/css" element={<CssProject/>} />
          <Route path="/bootstrap" element={<BootstrapProject/>} />
          <Route path="/javascript" element={<JavascriptProject/>} />
              <Route path="/python" element={<PythonProject/>} />
        </Routes>
      </div>
    </div>
  )
}
