import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./registration.css"
export default function Registration() {
    const [Data, setData] = useState([]);
    useEffect(() => {
        axios.get("/api/allevent")
        .then((res)=>{setData(res.data)})
    }, [])
  
    const [content, setcontent] = useState({"name":"","phoneno":"","email":"","event":"","college":""});

    const handleChange = e => {
        const { name, value } = e.target
        setcontent({
            ...content,
            [name]: value
        })
      }

      const afterreg=(res)=>{
        alert(res.data)
         setcontent({"name":"","phoneno":"","email":"","event":"","college":""})
      }

      const submitit=()=>{
        if (content.name.length===0||content.phoneno.length===0||content.email.length===0||content.event.length===0||content.college.length===0) {      
          alert("Please Fill the data");
        }
        else{
          axios.post("/api/registeruser",content)
          .then((res)=>{afterreg(res)})
        }
      }
  return (
    <div className='reg-form'>
        {/* <h1>Registration</h1>
      <div class="form">
        <input class="input" name="name" value={content.name} placeholder="Full Name" onChange={handleChange} type="text" required/>
        <span class="input-border"></span>
     </div>
     <div class="form">
        <input class="input" name="email" value={content.email} placeholder="Eamil" onChange={handleChange} type="email" required/>
        <span class="input-border"></span>
     </div>
     <div class="form">
        <input class="input"name="phoneno" value={content.phoneno} placeholder="Phone No" onChange={handleChange} type="tel" required/>
        <span class="input-border"></span>
     </div>

     <div class="form">
        <input class="input" name="college" value={content.college} placeholder="Enter College Name" onChange={handleChange} type="text" required/>
        <span class="input-border"></span>
     </div>

     <div class="form">
    <select  class="input" name="event" value={content.event} onChange={handleChange} required>
    <option value="">--Select option--</option>
        {Data.map((item)=>{
            // {console.log(item)}
           return  <option value={item.event}>{item.event} {item.fees}₹</option>
        })}
    </select>
    <span class="input-border"></span>

     </div>
     <button class="btn" onClick={()=>{submitit()}}>
    Register
</button> */}
     
    </div>
  )
}
