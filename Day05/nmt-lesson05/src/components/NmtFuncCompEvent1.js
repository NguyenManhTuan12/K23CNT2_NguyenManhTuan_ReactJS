import React from 'react'

export default function NmtFuncCompEvent1() {
    // Hàm xử lý sự kiện
  const nmtEventButton1Click = () => {
    alert("Button 1 - Clicked");
  };

  const nmtEventButton2Click = () => {
    alert("Button 2 - Clicked");
  };

  const nmtEventButton3Click = (name)=>{
    alert("Name:" + name)
}

  return (
    <div className="alert alert-info">
    {/* <button className="btn btn-primary" onClick={nmtEventButton1Click()}>
      Button 1
    </button> */}
    <button className="btn btn-primary mx-1" onClick={nmtEventButton2Click}>
      Button 2
    </button>
    {/* <button className="btn btn-success" onClick={nmtEventButton3Click("Mạnh Tuấn")}>
      Button 3
    </button> */}
    <button className="btn btn-success  mx-1" onClick={()=>nmtEventButton3Click("Nguyễn Mạnh Tuấn ")}>
      Button 4
    </button>
  </div>
  );
}
