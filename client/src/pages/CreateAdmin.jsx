import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Header } from '../component/Header'
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

  const [Data, setData] = useState([]);
const [addpri,setpri]=useState("");
  useEffect(() => {
      axios.get("/api/allevent")
      .then((res)=>{setData(res.data)})
  }, [])

const submitit=()=>{
  if(content.admin_id.length===0||content.password.length===0||content.privileges.length===0){
    alert("invalid input")
  }
  else{
    axios.post("/admin/createadmin",content)
    .then((res)=>{alert(res.data)});
  }
    
}

const changeit=(e)=>{
  content.privileges.push(e.target.value);
  var newstr=addpri+', '+e.target.value;
  setpri(newstr)
}

  return (
    <div>
        <Header/>
        <div className='createadmin'>
        <h2>New Admin</h2>
            <input type="text"  placeholder="Enter Event Name" name="admin_id" value={content.admin_id} onChange={handleChange} required/>
            <input type="text"  placeholder="Enter Passsword" name="password" value={content.password} onChange={handleChange} required/>
            <h3>Privilege :</h3> {addpri}
            <select  type="text" name="status" onChange={changeit} required>
            {Data.map((item)=>{
              return <option value={item.event}>{item.event}</option>
            })}            
            </select>
            <button className='btn btn-primary' onClick={()=>{submitit()}}>Add Admin</button>
         </div>
    </div>
  )
}
