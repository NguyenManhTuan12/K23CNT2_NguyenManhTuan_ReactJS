import React, { useState } from 'react'
import axios from 'axios'
export default function NmtCreateMockAPI() {
    // khởi tạo state
    const [nmtFullName,setNmtFullName] = useState('')
    const [nmtAge,setNmtAge] = useState(0)
    const [nmtActive,setNmtActive] = useState(true)

    // api post
    const nmtCreateUserApi = "https://67d9b73435c87309f529e7a5.mockapi.io/k23cnt2_nguyenmanhtuan/nmt_users";

    // khi submit form
    const nmtHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("nmtActive:",nmtActive);
        let nmtNewUser = {nmtFullName,nmtAge,nmtActive};
        console.log(nmtNewUser);

        // ghi dữ liệu vào api
        axios
            .post(nmtCreateUserApi, nmtNewUser)
            .then((nmt_response)=>{
                
            })
        
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label for="nmtFullName">Full Name</label>
                <input type='text' name='nmtFullName' id="nmtFullName" 
                    value={nmtFullName}
                    onChange={(ev)=>setNmtFullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="nmtAge">Age</label>
                <input type='number' name='nmtAge' id="nmtAge" 
                    value={nmtAge}
                    onChange={(ev)=>setNmtAge(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="nmtActive">Active</label>
                <input type='radio' name='nmtActive' id="nmtActive_hd" value={'true'} 
                    onChange={(ev)=>setNmtActive(ev.target.value)} />
                    <label for="nmtActive_hd"> Hoạt động</label>
                <input type='radio' name='nmtActive' id="nmtActive_kh" value={'false'} 
                    onChange={(ev)=>setNmtActive(ev.target.value)}/>
                    <label for="nmtActive_kh"> Khóa</label>
            </div>
            <button onClick={nmtHandleSubmit}>Create</button>
        </form>
    </div>
  )
}
