import React, { Component } from 'react'

export default class NmtEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nmtStudentName:'Mạnh Tuấn',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (nmtStudentName) thay đổi
    nmtHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            nmtStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    nmtHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.nmtStudentName);
        ev.preventDefault();
    }

    render() {
    return (
        <div className='alert alert-info'>
        <h2>Form Input</h2>
        <form  onSubmit={this.nmtHandleSubmit}>
            <label htmlFor='nmtStudentName'>
                <input type='text' name='nmtStudentName' id='nmtStudentName' 
                    value={this.state.nmtStudentName}
                    onChange={this.nmtHandleChange}
                />
            </label>
            <button className='btn btn-primary'>Click here</button>
        </form>
      </div>
    )
  }
}
