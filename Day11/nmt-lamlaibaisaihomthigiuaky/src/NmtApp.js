import React, { useState } from "react";
import NmtMemberAdd from "./components/NmtMemberAdd";
import NmtMemberList from "./components/NmtMemberList";

const membersData = [
  { nmt_id: "2310900110", nmt_fullname: "Nguyễn Mạnh Tuấn", nmt_username: "Duy", nmt_password: "000205" },
  { nmt_id: "002", nmt_fullname: "Nguyễn Văn Anh", nmt_username: "Anh", nmt_password: "123456" },
  { nmt_id: "003", nmt_fullname: "Nguyễn Duy Phương", nmt_username: "Phương", nmt_password: "098722" }
];

export default function NmtApp() {
  const [members, setMembers] = useState(membersData);
  const [editingMember, setEditingMember] = useState(null);

  const addMember = (newMember) => {
    setMembers((prevMembers) => {
      const index = prevMembers.findIndex((m) => m.nmt_id === newMember.nmt_id);
      if (index !== -1) {
        const updatedMembers = [...prevMembers];
        updatedMembers[index] = newMember;
        return updatedMembers;
      } else {
        return [...prevMembers, newMember];
      }
    });
    setEditingMember(null);
  };

  const editMember = (member) => {
    setEditingMember(member);
  };

  const cancelEdit = () => {
    setEditingMember(null);
  };

  const deleteMember = (id) => {
    setMembers(members.filter((member) => member.nmt_id !== id));
  };

  const viewMember = (member) => {
    alert(`Thông tin tài khoản:\nID: ${member.nmt_id}\nHọ tên: ${member.nmt_fullname}\nUsername: ${member.nmt_username}\nPassword: ${member.nmt_password}`);
  };

  return (
    <div className="container">
      <h1 className="text-center">Quản lý tài khoản</h1>
      <NmtMemberAdd onAddMember={addMember} editingMember={editingMember} onCancelEdit={cancelEdit} />
      <NmtMemberList members={members} onEdit={editMember} onDelete={deleteMember} onView={viewMember} />
    </div>
  );
}
