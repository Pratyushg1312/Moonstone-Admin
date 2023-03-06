import React from 'react'
import { Header } from '../component/Header'
import { Regdetail } from '../component/Regdetail'
import { Registerstats } from '../component/Registerstats'

export const Home = () => {
  return (
    <div className="home">
        <Header/>
        <Registerstats/>
        <Regdetail/>
    </div>
  )
}
