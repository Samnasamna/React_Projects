import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import datas from "./data.js"


export default function App() {
  const dataArray = datas.map((data)=> {
    return <MainContent
    key={data.id}
    {...data}
    />
  })

  return (
    <>
      <div className='main_container'>
        <Header/>
        {dataArray}  
      </div>
    </>
  )
}

