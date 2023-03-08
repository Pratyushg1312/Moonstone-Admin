import React, { useEffect, useState } from 'react'
import { Header } from '../component/Header'
import Addevent from './Addevent'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import SingleEventField from '../component/SingleEventField';

export default function Events() {
  const [Data, setData] = useState([]);
  useEffect(() => {
      axios.get("/api/allevent")
      .then((res)=>{setData(res.data)})
  }, [])

  return (
    <div>
        <Header/>
        <Addevent/>
        {/* show Events and change its status */}
        <div className="regdetail">
      <h1>Event Details</h1>
      <div className="lists">
        
        <Table striped bordered hover variant="dark" responsive="sm">
          <thead>
            <tr>
              <th scope="col">Sr no.</th>
              <th scope="col">Name</th>
              <th scope="col">Fees</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((item)=>{
              return <SingleEventField item={item} />           
            })}
          </tbody>
        </Table>

      </div>
    </div>

    </div>
  )
}
