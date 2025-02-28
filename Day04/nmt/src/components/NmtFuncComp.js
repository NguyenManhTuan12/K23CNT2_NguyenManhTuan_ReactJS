import React from 'react'

export default function NmtFuncComp(props) {
  return (
    <div>
      <h2>Demo: Function Component Props</h2>
      <p> Lấy dữ liệu từ props để hiển thị </p>
      <p>name: {props.name}</p>
      <p>address: {props.address}</p>
      <p>company: {props.company}</p>
      <p>note: {props.note}</p>
    </div>
  )
}