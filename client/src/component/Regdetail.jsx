import React from 'react'
import './regdetail.css'
import Table from 'react-bootstrap/Table';
import { Button } from 'bootstrap';

export const Regdetail = () => {
  return (
    <div className="regdetail">
      <h1>Registration Detail</h1>

      <div className="search">

        <label for="event"></label>

        <select className='selectform' id="event" name="event">
          <option value="None">event</option>
          <option value="Techno">Techno</option>
          <option value="Sports">Sports</option>
          <option value="Cultural">Cultural</option>
        </select>
      </div>
      <div className="lists">
        
        <Table striped bordered hover variant="dark" responsive="sm">
          <thead>
            <tr>
              <th scope="col">Sr no.</th>
              <th scope="col">Reg_id</th>
              <th scope="col">Name</th>
              <th scope="col">Phoneno</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
              <th scope="col">Gender</th>
              <th scope="col">event</th>
              <th scope="col">college</th>
              <th scope="col">Fees</th>
              <th scope="col">UTR</th>
              <th scope="col">Payment_status</th>
              <th scope="col">Date_added</th>
              <th scope="col">Control</th>
              <th scope="col">payment</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              
          <td>Reg_id</td>
          <td>pratyush</td>
          <td>90123456</td>
          <td>xyz@gmail.com</td>
          <td>13-12-2000</td>
          <td>male</td>
          <td>Event</td>
          <td>MU</td>
          <td>2rs</td>
          <td>UTR</td>
          <td>Accepted</td>
          <td>Date_added</td>
          <td><button id='bton' style={{display:"none"}} ></button>
          <label for="bton"  style={{color:"lightgreen" ,cursor:"POINTER"}} >accept</label>
          </td>
          <td><button id='bton' style={{display:"none"}} ></button>
          <label for="bton" style={{color:"red" ,cursor:"POINTER"}} >reject</label>
          </td>
          <td><button id='bton' style={{display:"none"}} ></button>
          <label for="bton" style={{color:"yellow" ,cursor:"POINTER"}}>pending</label>
          </td>
            </tr>
           
          </tbody>
        </Table>

      </div>
    </div>
  )
}
