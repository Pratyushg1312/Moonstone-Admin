import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Header } from '../component/Header'
import Privilege from '../component/Privilege'
import "./createadmin.css"
export default function CreateAdmin() {
  const [content, setcontent] = useState({
    "admin_id":"",
    "password":"",
    "privileges":[]
})
const handleChange = e => {
    const { name, value } = e.target
    setcontent({
        ...content,
        [name]: value
    })
  }


const submitit=()=>{
  if(content.admin_id.length===0||content.password.length===0||content.privileges.length===0){
    alert("invalid input")
  }
  else{
    axios.post("/admin/createadmin",content)
    .then((res)=>{alert(res.data)});
  }
    
}

const [SuperAdmin, setSuperAdmin] = useState(false);
const [Accounts, setAccounts] = useState(false);
const Superadmincreated=()=>{
  if(!SuperAdmin){
    setcontent({
      ...content,
      "privileges":["Superadmin"]
    })
  }
  else{
    setcontent({
      ...content,
      "privileges":[]
    })
  }
  setSuperAdmin(!SuperAdmin);
}

const Accountcreated=()=>{
  if(!Accounts){
    setcontent({
      ...content,
      "privileges":["Accounts"]
    })
  }
  else{
    setcontent({
      ...content,
      "privileges":[]
    })
  }
  setAccounts(!Accounts);
}
  return (
    <div>
        <div className='createadmin'>
        <h2>New Admin</h2>
            <input type="text"  placeholder="Enter Admin Id" name="admin_id" value={content.admin_id} onChange={handleChange} required/>
            <input type="text"  placeholder="Enter Passsword" name="password" value={content.password} onChange={handleChange} required/>
            <h3>Privilege :</h3> 
 
            {Accounts?<></>:<div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="superadmin" onChange={()=>{Superadmincreated()}} />
              <label class="form-check-label" for="superadmin">Super Admin</label>
            </div>}

            {SuperAdmin?<></>:<div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="Accounts"  onChange={()=>{Accountcreated()}}/>
              <label class="form-check-label" for="Accounts">Accounts</label>
            </div>}

            {SuperAdmin||Accounts?<></>:<Privilege content={content}  setcontent={ setcontent}/>}
            <button className='btn btn-primary' onClick={()=>{submitit()}}>Add Admin</button>
         </div>
    </div>
  )
}
