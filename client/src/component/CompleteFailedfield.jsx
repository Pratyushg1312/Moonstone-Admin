import React from 'react'

export default function CompleteFailedfield(props) {
    

  return (
    <tr>
    <th scope="row">1</th>              
<td>{props.item.reg_id}</td>
<td>{props.item.auth_name}</td>
<td>{props.item.name}</td>
<td>{props.item.phoneno}</td>
{/* <td>{props.item.auth_email}</td> */}
<td>{props.item.auth_email} {props.item.email}</td>
<td>{props.item.date_of_birth}</td>
<td>{props.item.gender}</td>
<td>{props.item.event}</td>
<td>{props.item.college}</td>
<td>{props.item.fees}</td>
<td>{props.item.utr}</td>
<td>{props.item.payment_status}</td>
<td>{props.item.date_added}</td>
{/* <td><button id='bton' style={{display:"none"}} ></button>
<label for="bton" style={{color:"yellow" ,cursor:"POINTER"}}>pending</label>
</td> */}
  </tr>

  )
}
