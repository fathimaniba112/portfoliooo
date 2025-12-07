import React from 'react'
import { Link } from 'react-router-dom'
import VideoGrid from '../components/VideoGrid'

const items = [
  { id: 11, img: '/img/ART-CSS.png', title: 'CSS Art Collection Page', video: '/video/CSS-ART-CSS.mp4' },
  { id: 12, img: '/img/CUSTOM-CSS.png', title: 'Custom Components Library', video: '/video/CUSTM-COMPONENT-CSS.mp4' },
  { id: 13, img: '/img/DASH-CSS.png', title: 'Dashboard UI with CSS Grid', video: '/video/DASHBOARD-CSS.mp4' },
  { id: 14, img: '/img/GLASS-CSS.png', title: 'Glassmorphism Login', video: '/video/GLASS-CSS.mp4' },
  { id: 15, img: '/img/PORTFOLIO-CSS.png', title: 'Portfolio Homepage with Scroll Animations', video: '/video/PORTFOLIO-CSS.mp4' },
  { id: 16, img: '/img/PRODUT-CSS.png', title: 'Animated Product Showcase Page', video: '/video/product-CSS.mp4' }
]

export default function CssProject(){
  return (
    <div className="container py-5">
      <div className="d-flex align-items-center mb-3">
        <div className="me-2">
         </div>

        <h1 className="m-0 flex-grow-1 text-center heading-playfair">CSS Project Samples</h1>

        <div className="ms-2">
          <a className="btn btn-outline-primary" href="https://github.com/USERNAME/REPO/tree/main/css-projects" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
      </div>

      <VideoGrid items={items} />
    </div>
  )
}
