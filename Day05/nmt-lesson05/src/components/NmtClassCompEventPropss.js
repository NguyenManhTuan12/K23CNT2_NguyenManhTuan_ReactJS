import React, { Component } from 'react';

class NmtClassCompEventPropss extends Component {

    // Hàm xử lý sự kiện
    nmtEventHandleClick1 = ()=>{
        alert("Hello...." + this.props.nmtRenderTitle);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.nmtEventHandleClick1}>Button 1</button>
            </div>
        );
    }
}

export default NmtClassCompEventPropss;
