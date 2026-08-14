import React from 'react'
import MainDrink from './MainComponent/MainDrink'
import MainFood from './MainComponent/MainFood'
import MainMD from './MainComponent/MainMD'
import { Link, Route, Routes } from 'react-router-dom'

export default function MainOne() {
  return (
    <div>
      <section className="main-1">
      <div className="main-title">
        <h2>베이커리</h2>
        <h3>ALWAYS BESIDE YOU, <span>EDIYA BAKERY</span></h3>
        <br /><br />
        <ul>
          <li><Link to="/drink" >음료</Link></li>
          <li><Link to="/food" >푸드</Link></li>
          <li><Link to="/md" >MD</Link></li>
        </ul>
      </div>
      
    <Routes>
      <Route path="/drink" element={<MainDrink />}></Route>
      <Route path="/food" element={<MainFood />}></Route>
      <Route path="/md" element={<MainMD />}></Route>
    </Routes>
      
    </section>
    </div>
  )
}


/*
<ul>
  <li><Link to="/drink" >음료</Link></li>
  <li><Link to="/food" >푸드</Link></li>
  <li><Link to="/md" >MD</Link></li>
</ul>


<Routes>
<Route path="/drink" element={<MainDrink />}></Route>
<Route path="/food" element={<MainFood />}></Route>
<Route path="/md" element={<MainMD />}></Route>
</Routes>
*/