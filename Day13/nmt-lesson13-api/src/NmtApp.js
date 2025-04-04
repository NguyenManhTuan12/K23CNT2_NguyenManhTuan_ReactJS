import React, { useState } from 'react';
import NmtHome from './components/NmtHome';
import NmtListUser from './components/NmtListUser';
import { NmtCreateUser } from './components/NmtCreateUser';
import { NmtEditUser } from './components/NmtEditUser';
import NmtNavBar from './components/NmtNavBar';
import './style.css';

function NmtApp() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [editingUserId, setEditingUserId] = useState(null);

    const handleEditUser = (userId) => {
        setEditingUserId(userId);
        setSelectedUser('edit');
    };

    const handleCancelEdit = () => {
        setEditingUserId(null);
        setSelectedUser('list');
    };

    return (
        <div className='container border my-3 p-3'>
            <h1>Mini Project - Nguyễn Văn Khải  - K23CNT2</h1>
            <NmtNavBar setSelectedUser={setSelectedUser} />
            <hr />
            {selectedUser === null && <NmtHome />}
            {selectedUser === 'list' && <NmtListUser onEditUser={handleEditUser} />}
            {selectedUser === 'create' && <NmtCreateUser onCreate={() => setSelectedUser('list')} />}
            {selectedUser === 'edit' && <NmtEditUser userId={editingUserId} onUpdate={() => setSelectedUser('list')} onCancel={handleCancelEdit} />}
        </div>
    );
}

export default NmtApp;