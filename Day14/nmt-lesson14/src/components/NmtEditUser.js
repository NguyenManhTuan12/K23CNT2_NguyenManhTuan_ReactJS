import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function NmtEditUser({ userId, onUpdate, onCancel }) {
    const [user, setUser] = useState({ nmtName: '', nmtEmail: '', nmtPhone: '', nmtActive: false });
    const apiURL = ``;

    useEffect(() => {
        axios.get(apiURL)
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching user:', error));
    }, [apiURL]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: name === 'nmtActive' ? value === 'true' : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(apiURL, user)
            .then(() => onUpdate())
            .catch(error => console.error('Error updating user:', error));
    };

    return (
        <div className='edit-form-container'>
            <h2>Chỉnh sửa người dùng</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Họ và tên:</label>
                    <input type='text' name='nmtName' value={user.nmtName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' name='nmtEmail' value={user.nmtEmail} onChange={handleChange} required />
                </div>
                <div>
                    <label>Số điện thoại:</label>
                    <input type='text' name='nmtPhone' value={user.nmtPhone} onChange={handleChange} required />
                </div>
                <div>
                    <label>Trạng thái:</label>
                    <select name='nmtActive' value={user.nmtActive} onChange={handleChange}>
                        <option value='true'>Hoạt động</option>
                        <option value='false'>Khóa</option>
                    </select>
                </div>
                <button type='submit'>Cập nhật</button>
                <button type='button' onClick={onCancel}>Hủy</button>
            </form>
        </div>
    );
}
