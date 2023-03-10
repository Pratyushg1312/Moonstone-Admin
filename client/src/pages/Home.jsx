import React from 'react'
import { Regdetail } from '../component/Regdetail'
import { Registerstats } from '../component/Registerstats'

export const Home = () => {
  return (
    <div className="home">
        <Registerstats/>
        <Regdetail/>
    </div>
  )
}
