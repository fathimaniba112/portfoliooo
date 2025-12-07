import React from 'react'
import { Link } from 'react-router-dom'
import VideoGrid from '../components/VideoGrid'

const items = [
  { id: 31, img: '/img/to-do-pro-javascript.png', title: 'Admin Dashboard', video: '/video/TO-DO-JAVASCRIPT.mp4' },
  { id: 32, img: '/img/pomodoro-javascript.png', title: 'Pomodoro App', video: '/video/pomodoro-javascript.mp4' },
  { id: 33, img: '/img/tic[game].png', title: 'Tic-Tac-Toe [ Mini Game]', video: '/video/TIC[GAME].mp4' },
  { id: 34, img: '/img/2048.png', title: '2048 - [ Mini Game ]', video: '/video/2048.mp4' },
  { id: 35, img: '/img/rock-paper.png', title: 'Rock Paper Scissors', video: '/video/rock-paper.mp4' },
 ]

export default function PythonProject(){
  return (
    <div className="container py-5">
      <div className="d-flex align-items-center mb-3">
        <div className="me-2">
        </div>

        <h1 className="m-0 flex-grow-1 text-center heading-playfair">Python Project Samples</h1>

        <div className="ms-2">
          <a className="btn btn-outline-primary" href="https://github.com/USERNAME/REPO/tree/main/javascript-projects" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
      </div>

      <VideoGrid items={items} />
    </div>
  )
}
