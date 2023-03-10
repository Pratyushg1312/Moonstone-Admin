import axios from 'axios'
import React from 'react'
import './header.css'

export const Header = (props) => {

  const logout = () => {
      axios.get(`/login/logout`).then((res)=>{
        window.location.reload();
      })
  }

  return (
    <div className="header">

        {/* <div className="imgntextcon">
            <div className="imgcon"></div>
            <p>Events </p>

            <p>NewAdmin</p>
        </div> */}

        {props.Adminpre==="Superadmin"?
        <>
        <a  href="/">Home</a>
         <a href='/event'>Events </a>
        <a href="/createadmin">NewAdmin</a>
        </>
        :<></>}

        <div className="heading">
            <h1 >ADMIN</h1>
        </div>
        <button className='btn' onClick={()=>{logout()}}>LOGOUT</button>
    </div>
  )
}
