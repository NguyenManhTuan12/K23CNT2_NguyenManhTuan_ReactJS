import React, { Component } from 'react';

class NmtClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            nmtFullName:"Nguyễn Manh Tuấn",
            nmtAge:45,
        }
    }

    // Hàm xử lý sự kiện
    nmtEventHandleClick1 = ()=>{
        // Lấy dữ liệu trong state
        alert("FullName: " +this.state.nmtFullName + "\n Age:" + this.state.nmtAge);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.nmtEventHandleClick1}>Button 1 - Dữ liệu trong state</button>
            </div>
        );
    }
}

export default NmtClassCompEventState;
