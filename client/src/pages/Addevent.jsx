import axios from 'axios'
import React, { useState } from 'react'
import "./addevents.css"
export default function Addevent() {
    const [content, setcontent] = useState({
      "event":"",
      "instructions":"",
      "event_category":"",
      "max_team_size":null,
      "min_team_size":null,
      "fees":null,
      "status":"open",
      "date_of_event":""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setcontent({
            ...content,
            [name]: value
        })
      }
    
    const eventadded=(value)=>{
      alert(value);
      window.location.reload();
    }
    const submitit=()=>{
      if(content.event.length===0|content.event_category.length===0||content.max_team_size.length===0||content.min_team_size.length===0||content.fees.length===0||content.status.length===0||content.date_of_event.length===0){
        alert("Please Fill all the fields")
      }
      else{
        axios.post("/admin/addevent",content)
        .then((res)=>{eventadded(res.data)});
      }
        
    }

  return (
    <div className='reg-form'>
    <h1>Add Event </h1>
  <div class="form">
    <input class="input" name="event" value={content.event} placeholder="Event Name" onChange={handleChange} type="text" required/>
    <span class="input-border"></span>
 </div>
 <div class="form">
    <input class="input" name="instructions" value={content.instructions} placeholder="Instructions" onChange={handleChange} type="text" required/>
    <span class="input-border"></span>
 </div>

 <div class="form">
<select  class="input"name="event_category" value={content.event_category} onChange={handleChange} type="text" required>
<option value="">--Category--</option>
<option value="cultural">Cultural Events</option>
<option value="sports">Sports Events</option>
<option value="techno">Techno Mgmt</option>
<option value="night">Night Events</option>
</select>
<span class="input-border"></span>
 </div>

 <div class="form">
    <input class="input"name="max_team_size" value={content.max_team_size} placeholder="Maximum Team Size" onChange={handleChange} type="text" required/>
    <span class="input-border"></span>
 </div>

 <div class="form">
    <input class="input"name="min_team_size" value={content.min_team_size} placeholder="Minimum Team Size" onChange={handleChange} type="text" required/>
    <span class="input-border"></span>
 </div>

 <div class="form">
    <input class="input" name="fees" value={content.fees} placeholder="Fees" onChange={handleChange} type="text" required/>
    <span class="input-border"></span>
 </div>
 <div class="form">
  <label>Date of Event</label>
    <input class="input" name="date_of_event" value={content.date_of_event} placeholder="Date of Event" onChange={handleChange} type="date" required/>
    <span class="input-border"></span>
 </div>
 <button class="btn my-2" onClick={()=>{submitit()}}> Add</button>


    {/* <div className='addevents'>
        <h3>Create EVENT</h3>
         <input type="text"  placeholder="Enter Event Name" name="event" value={content.event} onChange={handleChange} required/>
         <input type="text"  placeholder="Enter Event Fees" name="fees" value={content.fees} onChange={handleChange} required/>
         <select  type="text" name="status" value={content.status} onChange={handleChange} required>
          <option value="open">OPEN</option>
          <option value="closed">CLOSED</option>
          </select>
          <button className='btn btn-primary' onClick={()=>{submitit()}}>Add</button>
    </div> */}
 
</div>

  )
}
