import React from 'react'
import { Link } from 'react-router-dom'
import VideoGrid from '../components/VideoGrid'

const items = [
  { id: 1, img: '/img/Resume-HTML.png', title: 'Resume in HTML', video: '/video/resume.mp4' },
  { id: 2, img: '/img/Personal-portfolio-page-html.png', title: 'Personal Profile Page', video: '/video/personal-profile-HTML.mp4' },
  { id: 3, img: '/img/portfolio-gallery-HTML.png', title: 'Portfolio Gallery', video: '/video/portfolio-gallery-HTML.mp4' },
  { id: 4, img: '/img/form-HTML.png', title: 'HTML Forms Demo', video: '/video/Form-HTML.mp4' },
  { id: 5, img: '/img/Product-landing-page-HTML.png', title: 'Product Landing Page', video: '/video/PRODUCT-LANDING-HTML.mp4' },
  { id: 6, img: '/img/Table-based-price-chart-HTML.png', title: 'Table-Based Price Chart', video: '/video/table-HTML.mp4' },
  { id: 7, img: '/img/blog-post-layout.png', title: 'Simple Blog Post Layout', video: '/video/BLOG-HTML.mp4' },
  { id: 8, img: '/img/music-player-page-HTML.png', title: 'Music Player Page', video: '/video/MUSIC-HTML.mp4' },
  { id: 9, img: '/img/documentation-page-HTML.png', title: 'HTML Documentation Page', video: '/video/DOCUM-HTML.mp4' },
  { id: 10, img: '/img/event-invitation-page-HTML.png', title: 'Event Invitation Page', video: '/video/EVENT-HTML.mp4' }
]

export default function HtmlProject(){
  return (
    <div className="container py-5">
      <div className="d-flex align-items-center mb-3">
        <div className="me-2">
         </div>

        <h1 className="m-0 flex-grow-1 text-center heading-playfair">HTML Project Samples</h1>

        <div className="ms-2">
          <a className="btn btn-outline-primary" href="https://github.com/USERNAME/REPO/tree/main/html-projects" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
      </div>

      <VideoGrid items={items} />
    </div>
  )
}
