import React, { useState } from 'react';
import axios from 'axios';

export function NmtCreateUser({ onCreate }) {
    const [nmtName, setNmtName] = useState('');
    const [nmtEmail, setNmtEmail] = useState('');
    const [nmtPhone, setNmtPhone] = useState('');
    const [nmtActive, setNmtActive] = useState(false);

    const nmtCreateUserApi = "https://67d9b73435c87309f529e7a5.mockapi.io/k23cnt2_nguyenmanhtuan/:endpoint";

    const nmtHandleSubmit = (event) => {
        event.preventDefault();
        let nmtNewUser = { nmtName, nmtEmail, nmtPhone, nmtActive };
        console.log("Dữ liệu gửi lên:", nmtNewUser);
        axios.post(nmtCreateUserApi, nmtNewUser)
            .then(() => onCreate())
            .catch(error => console.error('Error creating user:', error));
    };

    return (
        <div className='form-container'>
            <h2>Thêm mới User</h2>
            <form>
                <div className='form-group'>
                    <label>Họ và tên: <input type='text' name='nmtName' value={nmtName} onChange={(ev) => setNmtName(ev.target.value)} required /></label>
                </div>
                <div className='form-group'>
                    <label>Email: <input type='email' name='nmtEmail' value={nmtEmail} onChange={(ev) => setNmtEmail(ev.target.value)} required /></label>
                </div>
                <div className='form-group'>
                    <label>Số điện thoại: <input type='text' name='nmtPhone' value={nmtPhone} onChange={(ev) => setNmtPhone(ev.target.value)} required /></label>
                </div>
                <div className='form-group'>
                    <label>Hoạt động: 
                        <select name='nnh_active' value={nmtActive} onChange={(ev) => setNmtActive(ev.target.value === 'true')}>
                            <option value='true'>Hoạt động</option>
                            <option value='false'>Khoá</option>
                        </select>
                    </label>
                </div>
                <button type='submit' onClick={nmtHandleSubmit}>Thêm mới</button>
            </form>
        </div>
    );
}
