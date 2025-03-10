import React, { Component } from 'react';
import NmtLoginControl from './components/NmtLoginControl';
import NmtRenderList from './components/NmtRender.List';
import NmtRenderListStudent from './components/NmtRenderListStudents';


class NmtApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
          <h1 className='text-center'>Nguyễn Mạnh Tuấn - Render condition, List key</h1>
          <hr/>
          <NmtLoginControl />
          <NmtRenderList/>
          <NmtRenderListStudent/>
      </div>
    );
  }
}

export default NmtApp;

