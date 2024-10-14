import React from 'react'
import Portfolio from './portfolio'
import './App.css'

function App() {
  console.log("Portfolio component:", Portfolio);
  return (
    <>
      <h1>My Portfolio App</h1>
      {Portfolio ? <Portfolio /> : <p>Portfolio component not loaded</p>}
    </>
  )
}

export default App
