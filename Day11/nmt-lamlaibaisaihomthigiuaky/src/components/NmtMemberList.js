import React from "react";

function NmtMemberList({ members, onEdit, onDelete, onView }) {
  return (
    <div>
      <h2>Danh sách tài khoản</h2>
      <table border="1">
        <thead>
          <tr>
            <th>NmtID</th>
            <th>NmtFullname</th>
            <th>NmtUsername</th>
            <th>NmtPassword</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.nmt_id}</td>
              <td>{member.nmt_fullname}</td>
              <td>{member.nmt_username}</td>
              <td>{member.nmt_password}</td>
              <td>
                <button onClick={() => onView(member)}>👀 Xem</button>
                <button onClick={() => onEdit(member)}>✏️ Sửa</button>
                <button onClick={() => onDelete(member.nmt_id)}>❌ Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NmtMemberList;
