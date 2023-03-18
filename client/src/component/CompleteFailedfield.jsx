import React from 'react'

export default function CompleteFailedfield(props) {
    
  const date=Date(props.item.date_added)
  return (
    <tr>
    <th scope="row">{props.reg}</th>              
<td style={{textAlign:"initial"}}>
  <div> Reg_ID : {props.item.reg_id}</div>
<div>Mail Name : {props.item.auth_name}</div>
<div>Name : {props.item.name}</div>
<div>Phone : {props.item.phoneno}</div>
<div>Google Mail : {props.item.auth_email}</div>
 <div>Gmail : {props.item.email}</div>
<div>Dob : {props.item.date_of_birth}</div>
<div>Gender : {props.item.gender}</div>
<div>Event : {props.item.event}</div>
<div>College : {props.item.college}</div>
</td>
<td style={{textAlign:"initial"}}>
<div>FEES : {props.item.fees} ₹</div>
<div>UTR : {props.item.utr}</div>
<div>STATUS : {props.item.payment_status}</div>
</td>
<td>
<div>Date : { date.slice(4, 10)}</div>
   <div>Time : { date.slice(16, 21)}</div>
  </td>
{/* <td><button id='bton' style={{display:"none"}} ></button>
<label for="bton" style={{color:"yellow" ,cursor:"POINTER"}}>pending</label>
</td> */}
  </tr>

  )
}
