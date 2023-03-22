import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './regstat.css'

export const Registerstats = () => {
    const [Count, setCount] = useState([{user: 0, registration: 0}]);
    useEffect(() => {
        axios.get("/admin/allcount")
        .then((res)=>{setCount(res.data)})
    }, [])
    
    // useEffect(() => {
    //     console.log(Count)
    // }, [Count])

  return (
    <div className="regstat">
        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>{Count[0].visitor}</p>
        </div>
        <div className="box">
            <p className='tagname'>REGISTRATION</p>
            <p className='tagamt'>{Count[0].registration}</p>
        </div>
        <div className="box">
            <p className='tagname'>Cultural Events Registrations</p>
            <p className='tagamt'>{Count[0].cultural_registration}</p>
        </div>

        <div className="box">
            <p className='tagname'>Sports Events Registrations</p>
            <p className='tagamt'>{Count[0].sports_registration}</p>
        </div>

        <div className="box">
            <p className='tagname'>Techno Mgmt Events Registrations</p>
            <p className='tagamt'>{Count[0].techno_registration}</p>
        </div>

        <div className="box">
            <p className='tagname'>Nights Events Registrations</p>
            <p className='tagamt'>{Count[0].nights_registration}</p>
        </div>

        <div className="box">
            <p className='tagname'>Cultural Events Registrations</p>
            <p className='tagamt'>{Count[0].cultural_registration}</p>
        </div>

        {/* <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>

        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>
        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>

        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>

        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>
        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div> */}

    </div>
  )
}
