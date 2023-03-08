import axios from 'axios'
import React, { useState } from 'react'
import "./addevents.css"
export default function Addevent() {
    const [content, setcontent] = useState({
        "event":"",
        "fees":0,
        "status":"open"
    })
    const handleChange = e => {
        const { name, value } = e.target
        setcontent({
            ...content,
            [name]: value
        })
      }
    
    const submitit=()=>{
        axios.post("/admin/addevent",content)
        .then((res)=>{alert(res.data)});
    }

  return (
    <div className='addevents'>
        <h3>Create EVENT</h3>
         <input type="text"  placeholder="Enter Event Name" name="event" value={content.event} onChange={handleChange} required/>
         <input type="text"  placeholder="Enter Event Name" name="fees" value={content.fees} onChange={handleChange} required/>
         <select  type="text" name="status" value={content.status} onChange={handleChange} required>
          <option value="open">OPEN</option>
          <option value="closed">CLOSED</option>
          </select>
          <button className='btn btn-primary' onClick={()=>{submitit()}}>Add</button>
    </div>
  )
}
