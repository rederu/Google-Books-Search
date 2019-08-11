import React from 'react';
import './jumbotron.css'

function Jumbotron() {
  return (
    <div className="container mt-2">
      <div className="jumbotron text-center text-white bg-transparent">
        <h1 className="title">Google Books Search</h1>
        <hr/>
        <p className="subtext">Search and Save Books of Interest</p>
      </div>
    </div>
  )
}

export default Jumbotron;