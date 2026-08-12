import React from 'react'
import MainDrink from './MainComponent/MainDrink'
import MainFood from './MainComponent/MainFood'
import MainMD from './MainComponent/MainMD'

export default function MainOne() {
  return (
    <div>
      <section className="main-1">
      <div className="main-title">
        <h2>베이커리</h2>
        <h3>ALWAYS BESIDE YOU, <span>EDIYA BAKERY</span></h3>
        <br /><br />
        <ul>
          <li><MainDrink /></li>
          <li><MainFood /></li>
          <li><MainMD /></li>
        </ul>
      </div>
    </section>
    </div>
  )
}
