import React from 'react'
import {Link} from 'react-router-dom'
import NmtHome from './NmtHome'

export default function NmtNavBar() {
  return (
    <nav>
        <Link to='/'>Home</Link> |
        <Link to='/nmt-list-user' >List User</Link> |
        <Link to='/nmt-create-user' >Create User</Link>
    </nav>
  )
}