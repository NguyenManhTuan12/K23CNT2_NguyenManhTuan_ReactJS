import React, { Component } from 'react'
import NmtEventForm1 from './componments/NmtEventForm1'

export default class NmtApp extends Component {
  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <NmtEventForm1/>
      </div>
    )
  }
}
