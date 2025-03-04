import React, { Component } from 'react';
import NmtEventForm1 from './componments/NmtEventForm1';
import NmtEventForm2 from './componments/NmtEventForm2';
import NmtEventForm3 from './componments/NmtEventForm3';
import NmtEventForm4 from './componments/NmtEventForm4';
import NmtEventForm5 from './componments/NmtEventForm5';  



export default class NmtApp extends Component {
   // Hàm xử lý nhận dữ liệu từ form student
   nmtHandleSubmitForm = (param)=>{
    console.log("Student:",param);
   }
  render() {
  
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <NmtEventForm1/>
          <NmtEventForm2/> 
          <NmtEventForm3/>
          <NmtEventForm4/> 
          <NmtEventForm5 onNmtHandleSubmit={this.nmtHandleSubmitForm}/>

       
      </div>
    )
  }
}
