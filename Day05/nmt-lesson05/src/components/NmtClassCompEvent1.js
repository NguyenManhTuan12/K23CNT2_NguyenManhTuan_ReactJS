import React, { Component } from 'react'

export default class NmtClassCompEvent1 extends Component {
    
    // Hàm xử lý sự kiện
    nmtEventHandleClick1 = ()=>{
        alert("Button 1 clicked");
    }

    nmtEventHandleClick2 = (name)=>{
        alert("Button 2 clicked; name="+name);
    }
  render() {
    return (
        <div className="alert alert-danger">
        <button className='btn btn-primary mx-1' onClick={this.nmtEventHandleClick1}>Button 1</button>
                <button className='btn btn-success mx-1' 
                    onClick={()=>this.nmtEventHandleClick2("Mạnh Tuấn")}>Button 2</button>
      </div>
    );
  }
}

