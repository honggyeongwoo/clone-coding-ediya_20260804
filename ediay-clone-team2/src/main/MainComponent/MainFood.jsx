import React from 'react'
import { Link } from 'react-router-dom'

export default function MainFood() {
  return (
    <div className='foodm fullscreen-overlay'>
      <Link to="/" className='close-btn'><h2>닫기 ✕</h2></Link>
    </div>
  )
}
