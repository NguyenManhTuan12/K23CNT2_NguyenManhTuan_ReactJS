import React, { Component } from "react";

class NmtClassCompEventPostData extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý sự kiện
    nmtEventHandleClick = ()=>{
        // Chuyển dữ liệu lên App thông qua props
        this.props.onNmtDataToApp("Dữ liệu từ component con - NmtClassCompEventPostData");
    }
  render() {
    return (
      <div className="alert alert-success">
        <button className="btn btn-primary"
            onClick={this.nmtEventHandleClick}>
                Button 1 - Chuyển dữ liệu lên App
        </button>
      </div>
    );
  }
}

export default NmtClassCompEventPostData;