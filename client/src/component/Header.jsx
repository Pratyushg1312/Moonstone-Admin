import axios from 'axios'
import React from 'react'
import './header.css'
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  const navigate=useNavigate();
  const afterlogout=()=>{
    navigate("/")
    window.location.reload();
  }
  const logout = () => {
      axios.get(`/login/logout`).then((res)=>{
        afterlogout();    
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
        <a className='btn'  href="/">Home</a>
         <a className='btn' href='/event'>Events </a>
        <a className='btn' href="/createadmin">NewAdmin</a>
        </>
        :<div className="heading">
        <h1 >ADMIN</h1>
    </div>}
        
        <a className='btn' href="/registration">Register</a>
        
        <button className='btn' onClick={()=>{logout()}}>LOGOUT</button>
    </div>
  )
}
