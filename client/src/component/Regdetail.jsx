import React, { useEffect, useState } from 'react'
import './regdetail.css'
import Table from 'react-bootstrap/Table';
import { Button } from 'bootstrap';
import axios from 'axios';
import RegSingleField from './RegSingleField';

export const Regdetail = (props) => {
  const [Data, setData] = useState([]);
    useEffect(() => {
        axios.get("/admin/allregistration")
        .then((res)=>{setData(res.data)})
    }, [])

      //   useEffect(() => {
      //   console.log(Data)
      // }, [Data])
   

  return (
    <div className="regdetail">
      <h1>Registration Detail</h1>

      {/* <div className="search">
        <label for="event"></label>
        <select className='selectform' id="event" name="event">
          <option value="None">event</option>
          <option value="Techno">Techno</option>
          <option value="Sports">Sports</option>
          <option value="Cultural">Cultural</option>
        </select>
      </div> */}

      <div className="lists">
        
        <Table striped bordered hover variant="dark" responsive="sm">
          <thead>
            <tr>
              <th scope="col">Sr no.</th>
              <th scope="col">Reg_id</th>
              <th scope="col">Auth_Name</th>
              <th scope="col">Name</th>
              <th scope="col">Phoneno</th>
              {/* <th scope="col">Auth_Email</th> */}
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
              <th scope="col">Gender</th>
              <th scope="col">event</th>
              <th scope="col">college</th>
              <th scope="col">Fees</th>
              <th scope="col">UTR</th>
              <th scope="col">Payment_status</th>
              <th scope="col">Date_added</th>
              {props.Adminpre==="Superadmin"||props.Adminpre==="Accounts"?<>
              <th scope="col">Confirm</th>
              <th scope="col">Failed</th>
              </>:<></>}
              {/* <th scope="col">Status</th> */}
            </tr>
          </thead>
          <tbody>
            {Data.map((item)=>{
              return <RegSingleField item={item} Adminpre={props.Adminpre} />           
            })}
          </tbody>
        </Table>

      </div>
    </div>
  )
}
