import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NmtReadMockAPI() {
    // khởi tạo state 
    const [nmtListUser, setNmtListUser] = useState([])
    // api
    const nmtApiOnline = "https://67d9b73435c87309f529e7a5.mockapi.io/k23cnt2_nguyenmanhtuan/nmt_users"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(nmtApiOnline)
            .then((nmt_response)=>{
                setNmtListUser(nmt_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const nmtElementUser = nmtListUser.map((nmt_item, index)=>{
        return(
            <tr key={index}>
                <td>{nmt_item.nmtId}</td>
                <td>{nmt_item.nmtFullName}</td>
                <td>{nmt_item.nmtAge}</td>
                <td>{nmt_item.nmtActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   nmtElementUser
                }
            </tbody>
        </table>
    </div>
  )
}
