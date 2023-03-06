import React from 'react'
import './header.css'
export const Header = () => {
  return (
    <div className="header">

        <div className="imgntextcon">
            <div className="imgcon"></div>
            <p>admin name</p>
        </div>
        <div className="heading">
            <h1>ADMIN</h1>
        </div>
        <button className='btn'>LOGOUT</button>
    </div>
  )
}
