import React from 'react'
import MainTwo from './MainTwo'
import MainOne from './MainOne'
import { Link, Route, Routes } from 'react-router-dom'

export default function MainHome() {
  return (
    <div>
      <MainOne />
      <MainTwo />
    </div>
  )
}
