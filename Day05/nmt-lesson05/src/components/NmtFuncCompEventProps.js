import React from 'react'

export default function NmtFuncCompEventProps(nmtProps) {
   // hàm xử lý sự kiện
   const nmtHanldeButtonClick1 = ()=>{
    alert("Dữ liệu từ props:" + nmtProps.nmtRenderName);
    console.log("Xin chao:",nmtProps.nmtRenderName);
}

const nmtHanldeButtonClick2 = (param)=>{
    // Lấy dữ liệu từ props
    alert("Dữ liệu từ props (Button 2 click):" + nmtProps.nmtRenderName);
    // Dữ liệu từ tham số
    console.log('====================================');
    console.log("Hi:",param);
    console.log('====================================');
}
return (
<div className="alert alert-info">
    <button className='btn btn-primary mx-1'
        onClick={nmtHanldeButtonClick1}>Button 1</button>

    <button className='btn btn-success mx-1'
        onClick={()=>nmtHanldeButtonClick2("Button 2")}>Button 2</button>
</div>
  )
}
