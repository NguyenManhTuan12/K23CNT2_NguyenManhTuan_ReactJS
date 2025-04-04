import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function NmtEditUser() {
     const nmtUser = {
            id:0,
            'nmt_name':'',
            'nmt_email':'',
            'nmt_phone':'',
            'nmt_active':true
        }
    
        const [nmt_user, setNmt_User] = useState(nmtUser);
        const nmtApi = "https://67ef324ec11d5ff4bf7c01fa.mockapi.io/nmt-k23cnt2-2310900110/nmt_users"

        const {id} = useParams();

        useEffect(()=>{
            axios.get(nmtApi+"/"+`${id}`)
            .then(nmt_response => {
                // Xử lý dữ liệu trả về từ API
                console.log(nmt_response.data); // Dữ liệu từ API
                setNmt_User(nmt_response.data)
            })
            .catch(error => {
                // Xử lý lỗi
                console.error('Có lỗi xảy ra:', error);
            });
        },[])
        const navigate = useNavigate();
        const nmtHandlSubmit = (ev)=>{
            ev.preventDefault();
            console.log(nmt_user);
            axios
            .put(nmtApi+`/${id}`, nmt_user)
            .then((nmt_response) => {
                alert('Cập nhật thành công!');
                navigate('/nmt-list-user'); // Sau khi lưu, chuyển về trang danh sách
            })
        }
  return (
    <div>
      <h2>Sửa thông tin user</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="nmt_name" className="col-sm-2 col-form-label">FullName</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nmt_name"
                name="nmt_name"
                value={nmt_user.nmt_name} 
                onChange={(ev)=>setNmt_User({...nmt_user,nmt_name:ev.target.value})} 
                />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="nmt_email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nmt_email" 
             name="nmt_email"
             value={nmt_user.nmt_email} 
             onChange={(ev)=>setNmt_User({...nmt_user,nmt_email:ev.target.value})} 

             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="nmt_phone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nmt_phone" 
             name="nmt_phone"
             value={nmt_user.nmt_phone} 
             onChange={(ev)=>setNmt_User({...nmt_user,nmt_phone:ev.target.value})} 
             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="nmt_active" className="col-sm-2 col-form-label">Active</label>
          <div className="col-sm-10">
            <input type="radio" id="nmt_active_true"  className="mx-3"   
                onChange={(ev)=>setNmt_User({...nmt_user,nmt_active:ev.target.value})}
                value={true}
                name="nmt_active"  /> 
            <label htmlFor="nmt_active_true">Hoạt động</label>
            <input type="radio" id="nmt_active_false"  className="mx-3"
                onChange={(ev)=>setNmt_User({...nmt_user,nmt_active:ev.target.value})}
                value={false} 
                name="nmt_active" /> 
            <label htmlFor="nmt_active_false">Tạm khóa</label>
          </div>
        </div>

        <div className="mb-3 row">
            <label htmlFor="" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <button className="btn btn-primary mx-2 px-3" name="btnNmtCreate" 
                    onClick={nmtHandlSubmit}
                    >Update</button>
                <button className="btn btn-secondary mx-2 px-3" name="btnNmtBack">Back</button>
            </div>
        </div>
      </form>
    </div>
  )
}
