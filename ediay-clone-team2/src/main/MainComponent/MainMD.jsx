import React from 'react'
import { Link } from 'react-router-dom'

export default function MainMD() {
  return (
    <div className='MDm fullscreen-overlay'>
      <Link to="/" className='close-btn'><h2>닫기 ✕</h2></Link>
    </div>
  )
}
