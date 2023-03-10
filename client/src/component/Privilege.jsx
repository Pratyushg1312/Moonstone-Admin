import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './privilege.css'
export default function Privilege(props) {
  const [show, setshow] = useState("")
   const [Data, setData] = useState([]);
    useEffect(() => {
        axios.get("/api/allevent")
        .then((res)=>{setData(res.data)})
    }, [])

    const changeit=(e)=>{
      // props.content.privileges.push(e.target.value);
      var st=new Set(props.content.privileges);
      st.add(e.target.value);
      // console.log(st);
      props.setcontent({
        ...props.content,
        "privileges": Array.from(st)
      })
        setshow(Array.from(st).join(','))
      }

  return (
    <div>
      <div>{show}</div>
          <select  type="text" name="status" onChange={changeit} required>
          <option value="">-- Select Option --</option>
            {Data.map((item)=>{
                  return  <option value={item.event}>{item.event}</option>
          })}            
          </select>
    </div>
  )
}
