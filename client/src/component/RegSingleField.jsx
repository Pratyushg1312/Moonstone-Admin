import axios from 'axios'
import React from 'react'

export default function RegSingleField(props) {
    
    const confirm = () => {
        axios.get(`/admin/paymentcompleted/${props.item._id}`).then((res)=>{window.location.reload()})
    }

    const Failed = () => {
        axios.get(`/admin/paymentfailed/${props.item._id}`).then((res)=>{window.location.reload()})
    }

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
{props.Adminpre==="Superadmin"||props.Adminpre==="Accounts"?<>
<td>
    {/* <button id='bton' style={{display:"none"}}  ></button> */}
<label for="bton"  style={{color:"lightgreen" ,cursor:"POINTER"}} onClick={()=>{confirm()}} >accept</label>
</td>
<td>
    {/* <button id='bton' style={{display:"none"}}  onClick={()=>{Failed()}} ></button> */}
<label for="bton" style={{color:"red" ,cursor:"POINTER"}} onClick={()=>{Failed()}} >reject</label>
</td>
</>:<></>}
{/* <td><button id='bton' style={{display:"none"}} ></button>
<label for="bton" style={{color:"yellow" ,cursor:"POINTER"}}>pending</label>
</td> */}
  </tr>

  )
}
