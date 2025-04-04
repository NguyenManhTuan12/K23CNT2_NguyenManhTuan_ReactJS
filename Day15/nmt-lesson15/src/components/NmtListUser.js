import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NmtListUser() {
    // state
    const [nmtListUser, setNmtListUser] = useState([])
    const nmtApi = "https://67ef324ec11d5ff4bf7c01fa.mockapi.io/nmt-k23cnt2-2310900110/nmt_users"

    useEffect(()=>{
        axios.get(nmtApi)
        .then(nmt_response => {
            // Xử lý dữ liệu trả về từ API
            console.log(nmt_response.data); // Dữ liệu từ API
            setNmtListUser(nmt_response.data)
        })
        .catch(error => {
            // Xử lý lỗi
            console.error('Có lỗi xảy ra:', error);
        });
    },[])
   
    
    const nmtHandleDelete = async (nmtId)=>{
        if(window.confirm('Bạn có muốn xóa không?')){
            await axios.delete(nmtApi+"/"+nmtId);

            let nmtListUserDelete = nmtListUser.filter(x=>x.id !=nmtId);
            setNmtListUser(nmtListUserDelete);
        }
    }
    const navigate = useNavigate();
    const nmtHandleUpdate = (nmtId) =>{
        navigate(`/nmt-edit-user/${nmtId}`);
    }
  return (
    <div>
        <h2>Danh sách user</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* // hiển thị danh sách user */}
                {
                    nmtListUser.map((nmtUserItem,index)=>{
                        return (
                            <tr>
                                <td>{nmtUserItem.id}</td>
                                <td>{nmtUserItem.nmt_name}</td>
                                <td>{nmtUserItem.nmt_email}</td>
                                <td>{nmtUserItem.nmt_phone}</td>
                                <td>
                                    {nmtUserItem.nmt_active?
                                    <span className='badge text-bg-success'>Hoạt động</span>
                                    :<span className='badge text-bg-danger'>Tạm khóa</span>}
                                </td>
                                <td>
                                    <button onClick={()=>nmtHandleUpdate(nmtUserItem.id)}>Edit</button>
                                    <button onClick={(ev)=> nmtHandleDelete(nmtUserItem.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
