import axios from 'axios';
import React, { useState } from 'react'

export default function SingleEventField(props) {
    const [status, setstatus] = useState(props.item.status)
    
    const changeit=(e)=>{
        setstatus(e.target.value);
        axios.post(`/admin//changeeventstatus/${props.item._id}`,{"status":e.target.value})
        .then((res)=>{alert(res.data)});
    }
    
  return (
    <tr>
        <th scope="row">1</th>              
        <td>{props.item.event}</td>
        <td>{props.item.fees}</td>
        {/* <td>{props.item.status}</td> */}
        <td>
        <select  type="text" name="status" value={status} onChange={changeit} required>
          <option value="open">OPEN</option>
          <option value="closed">CLOSED</option>
        </select>
        </td>
    </tr>
  )
}
