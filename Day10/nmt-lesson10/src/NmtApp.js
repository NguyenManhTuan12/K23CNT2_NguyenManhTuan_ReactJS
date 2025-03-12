import React from 'react'
import NmtUseState from './components/NmtUseState'
import NmtUseEffect from './components/NmtUseEffect'

export default function NmtApp() {
  return (
    <div className='container border my-2'>
      <h1>Demo React hook </h1>
      <NmtUseState/>
      <NmtUseEffect/>
    </div>
  )
}
