import React from 'react'
import { Regdetail } from '../component/Regdetail'
import { Registerstats } from '../component/Registerstats'

export const Home = (props) => {
  return (
    <div className="home">
        <Registerstats />
        <Regdetail Adminpre={props.Adminpre}/>
    </div>
  )
}
