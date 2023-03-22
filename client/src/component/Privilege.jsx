import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './privilege.css'
export default function Privilege(props) {
  const [show, setshow] = useState("")

    const changeit=(e)=>{
      props.setcontent({
        ...props.content,
        "privileges": [e.target.value]
      })
      }

  return (
    <div>
      <label class="form-check-label" for="Accounts">Finance Dept.</label>
          <select  type="text" name="status" onChange={changeit} required>
          <option value="">--Category--</option>
          <option value="cultural">Cultural Events</option>
          <option value="sports">Sports Events</option>
          <option value="techno">Techno Mgmt</option>
          <option value="night">Night Events</option>
          </select>
    </div>
  )
}
