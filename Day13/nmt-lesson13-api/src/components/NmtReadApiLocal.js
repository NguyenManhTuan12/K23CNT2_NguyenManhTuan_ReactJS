import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NmtReadApiLocal() {
    // khởi tạo state
    const [nmtListUser, setNmtListUser] = useState([])
    // đọc dữ liệu từ api local và set cho nmtListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((nmtResponse)=>{
                setNmtListUser(nmtResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    nmtListUser.map((nmtItem, index)=>{
                        return (
                            <tr key={index}>
                                <td>{nmtItem.fullName}</td>
                                <td>{nmtItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
