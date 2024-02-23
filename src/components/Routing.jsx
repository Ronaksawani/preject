import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Dashboard from "./api"


const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  )
}

export default Routing
