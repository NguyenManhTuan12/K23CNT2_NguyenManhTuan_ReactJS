import React, { Component } from 'react'
import NmtFuncCompEvent1 from './components/NmtFuncCompEvent1'
import NmtClassCompEvent1 from './components/NmtClassCompEvent1';
import NmtFuncCompEventProps from './components/NmtFuncCompEventProps';
import NmtClassCompEventPropss from './components/NmtClassCompEventPropss';
import NmtClassCompEventState from './components/NmtClassCompEventState';
import NmtClassCompEventPostData from './components/NmtClassCompEventPostData';

class NmtApp extends Component {
  constructor(props){
      super(props);
      this.state = {
          nmtNoiDung:"Chưa có gì",
      }
  }
  // Hàm xử lý sự kiện khi component con chuyển dữ liệu lên
  nmtHandleDataToApp = (content)=>{
      alert(content);
      this.setState({
          nmtNoiDung:content,
      })
  }
  render() {
    return (
      <div className='container border my-3 bg-white'>
        <h1 className='text-center alert alert-info my-2'>Nguyen Manh Tuan</h1>
        <hr/>
        <div>
        <h2> Function Component -Event</h2>
        <NmtFuncCompEvent1/>
      </div>
      <hr/>
      <div>
      <h2> Class Component - Event</h2>
      <NmtClassCompEvent1/>
        </div>
        <div>
                    <h2>Function Component - Event; props</h2>
                    <NmtFuncCompEventProps nmtRenderName="Nguyễn Mạnh Tuấn " />
                </div>
                <hr/>
                <div>
                    <h2>Class Component - Event; props</h2>
                    <NmtClassCompEventPropss nmtRenderTitle = "Welcome to Manh Manh"/>
                </div>

                <div>
                    <h2>Class Component - Event; state</h2>
                    <NmtClassCompEventState />
                </div>
                <div>
                    <h1>{this.state.nmtNoiDung}</h1>
                    <h2>Class Component - Event; Post Data to App </h2>
                    <NmtClassCompEventPostData onTvcDataToApp={this.nmtHandleDataToApp} />
                </div>
      </div>
    );
  }
}
export default NmtApp;