import React from 'react'
import { Link } from 'react-router-dom'
import VideoGrid from '../components/VideoGrid'

const items = [
  { id: 21, img: '/img/dash-BOOTSTRAP.png', title: 'Admin Dashboard', video: '/video/dash-BOOTSTRAP.mp4' },
  { id: 22, img: '/img/blog-BOOTSRAP.png', title: 'Blog Home Page UI', video: '/video/blog-BOOTSRAP.mp4' },
  { id: 23, img: '/img/LOGIN-BOOTSTRAP.png', title: 'Login + Register UI', video: '/video/login-BOOTSTRAP.mp4' },
  { id: 24, img: '/img/PORTFOLIO-BOOTSTRAP.png', title: 'Personal Portfolio Website', video: '/video/portfolio-BOOTSRAP.mp4' },
  { id: 25, img: '/img/PHOTO-BOOTSTRAP.png', title: 'Photography Gallery', video: '/video/PHOTO-BOOTSTRAP.mp4' },
  { id: 26, img: '/img/RESPONSIVE-bootstrap.png', title: 'Responsive Landing Page', video: '/video/responsivelanding-BOOTSRAP.mp4' }
]

export default function BootstrapProject(){
  return (
    <div className="container py-5">
      <div className="d-flex align-items-center mb-3">
        <div className="me-2">
         </div>

        <h1 className="m-0 flex-grow-1 text-center heading-playfair">Bootstrap Project Samples</h1>

        <div className="ms-2">
          <a className="btn btn-outline-primary" href="https://github.com/USERNAME/REPO/tree/main/bootstrap-projects" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
      </div>

      <VideoGrid items={items} />
    </div>
  )
}
