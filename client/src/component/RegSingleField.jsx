import axios from 'axios'
import React from 'react'

export default function RegSingleField(props) {
    
    const confirm = () => {
        axios.get(`/admin/paymentcompleted/${props.item._id}`).then((res)=>{window.location.reload()})
    }

    const Failed = () => {
        axios.get(`/admin/paymentfailed/${props.item._id}`).then((res)=>{window.location.reload()})
    }


  return (
    <tr>
    <th scope="row">1</th>              
<td>{props.item.reg_id}</td>
<td>{props.item.auth_name}</td>
<td>{props.item.name}</td>
<td>{props.item.phoneno}</td>
<td>{props.item.auth_email}</td>
<td>{props.item.email}</td>
<td>{props.item.date_of_birth}</td>
<td>{props.item.gender}</td>
<td>{props.item.event}</td>
<td>{props.item.college}</td>
<td>{props.item.fees}</td>
<td>{props.item.utr}</td>
<td>{props.item.payment_status}</td>
<td>{props.item.date_added}</td>
<td>
    {/* <button id='bton' style={{display:"none"}}  ></button> */}
<label for="bton"  style={{color:"lightgreen" ,cursor:"POINTER"}} onClick={()=>{confirm()}} >accept</label>
</td>
<td>
    {/* <button id='bton' style={{display:"none"}}  onClick={()=>{Failed()}} ></button> */}
<label for="bton" style={{color:"red" ,cursor:"POINTER"}} onClick={()=>{Failed()}} >reject</label>
</td>
{/* <td><button id='bton' style={{display:"none"}} ></button>
<label for="bton" style={{color:"yellow" ,cursor:"POINTER"}}>pending</label>
</td> */}
  </tr>

  )
}
