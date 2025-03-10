import React from 'react'

export default function NmtRenderList() {
    const nmtList = ["Mạnh Tuấn ", "ReactJS","Fit-NTU"];

    const nmtElement = nmtList.map(item=>{
        return <li>{item}</li>
    })

  return (
    <div className='alert alert-success'>
        <h2> Danh sách:</h2>
        <ul>
            {
                nmtList.map(item=>{
                    return <li>{item}</li>
                })
            }
        </ul>
        <hr/>
        {nmtElement}
    </div>
  )
}