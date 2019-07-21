import React from 'react';

function Jumbotron(props) {
  return (
    <div className="container mt-2">
      <div className="jumbotron text-center bg-transparent">
        <h1 className="display-4 title">Google Books Search</h1>
        <hr/>
        <p className="subtext">Search and Save Books of Interest</p>
      </div>
    </div>
  )
}

export default Jumbotron;