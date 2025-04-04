import React from 'react'
import { BrowserRouter as NmtRouter, Route, Routes } from 'react-router-dom'
import NmtNavBar from './components/NmtNavBar'
import NmtHome from './components/NmtHome'
import NmtEditUser from './components/NmtEditUser'
import NmtCreateUser from './components/NmtCreateUser'
import NmtListUser from './components/NmtListUser'

export default function NmtApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-danger text-center'>K23CNT2 - Nguyễn Mạnh Tuấn  - 2310900110</h1>
      <hr/>
      <NmtRouter>
          <NmtNavBar />
          <hr/>
          <Routes>
              <Route path='/' element={<NmtHome/>} />
              <Route path='/nmt-list-user' element={<NmtListUser/>} />
              <Route path='/nmt-create-user' element={<NmtCreateUser/>} />
              <Route path='/nmt-edit-user/:id' element={<NmtEditUser/>} />
          </Routes>
      </NmtRouter>
    </div>
  )
}
