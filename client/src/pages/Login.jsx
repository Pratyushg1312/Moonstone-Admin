import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "./login.css"
export default function Login(props) {
    const navigate=useNavigate();
    const [Admin, setAdmin] = useState({
        "admin_id":"",
        "password":""
    })
    
    const handleChange = e => {
      const { name, value } = e.target
      setAdmin({
          ...Admin,
          [name]: value
      })
  }
       
    useEffect(() => {
      if(props.login){
        navigate("/")
      }
    }, [])
   
    const adminlogin= async()=>{
        await axios.post("/login",Admin)
        .then((res)=>{
          window.location.reload();
        })
        .catch(error => {
          alert("INVALID USER")
          console.error('There was an error!', error);
      });
    }
    const entersubmit=(e)=> {
      if (e.keyCode === 13) {
        adminlogin();
      }
    }

  return (
    <>
     <section>
  <div className="leaves">
    <div className="set">
      <div>
        <img src="https://i.imgur.com/Oc3aYTb.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/sjEjxPI.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/Z0YR03s.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/fVYvICL.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/Oc3aYTb.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/sjEjxPI.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/Z0YR03s.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/fVYvICL.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/Oc3aYTb.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/sjEjxPI.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/Z0YR03s.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/fVYvICL.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/Oc3aYTb.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/sjEjxPI.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/Z0YR03s.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/fVYvICL.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/Oc3aYTb.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/sjEjxPI.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/Z0YR03s.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/fVYvICL.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/Oc3aYTb.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/sjEjxPI.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/Z0YR03s.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/fVYvICL.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/Oc3aYTb.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/sjEjxPI.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/Z0YR03s.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/fVYvICL.png" />
      </div>
    </div>
  </div>
  <img src="https://i.imgur.com/MosCSIH.png" className="bg" />
  <img src="https://i.imgur.com/Q50tX3l.png" className="girl" />
  <img src="https://i.imgur.com/J3FAXDV.png" className="girl1" />
  <img src="https://i.imgur.com/DjVcJFA.png" className="bikerboy" />
  <img src="https://i.imgur.com/tLXIflv.png" className="trees" />
  <div className="login">
    <h2>Sign In</h2>
    <div className="inputBox">
      <input type="text" placeholder="Admin ID" name="admin_id" value={Admin.admin_id} onChange={ handleChange } />
    </div>
    <div className="inputBox">
      <input type="password" placeholder="password" onKeyDown={(e) => entersubmit(e)}  value={Admin.password} onChange={ handleChange } name="password" />
    </div>
    <div className="inputBox">
         {/* <button className='btn btn-primary' >Login</button> */}
         <input onClick={()=>{adminlogin()}} type="submit" defaultValue="Login" id="btn" />
    </div>
    <div className="group">
      <a  href="#">         Developed By Software Cell</a>
      {/* <a href="#"></a> */}

    </div>
  </div>
</section>

        </>
  )
}
