import React, { useState, useEffect } from "react";

function NmtMemberAdd({ onAddMember, editingMember, onCancelEdit }) {
  const [form, setForm] = useState({
    nmt_id: "",
    nmt_fullname: "",
    nmt_username: "",
    nmt_password: "",
  });

  useEffect(() => {
    if (editingMember) {
      setForm(editingMember);
    }
  }, [editingMember]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMember(form);
    setForm({ nmt_id: "", nmt_fullname: "", nmt_username: "", nmt_password: "" });
  };

  return (
    <div>
      <h2>{editingMember ? "Chỉnh sửa tài khoản" : "Thêm tài khoản mới"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nmt_id" placeholder="ID" value={form.nmt_id} onChange={handleChange} required />
        <input type="text" name="nmt_fullname" placeholder="Họ và tên" value={form.nmt_fullname} onChange={handleChange} required />
        <input type="text" name="nmt_username" placeholder="Username" value={form.nmt_username} onChange={handleChange} required />
        <input type="password" name="nmt_password" placeholder="Mật khẩu" value={form.nmt_password} onChange={handleChange} required />
        <button type="submit">{editingMember ? "Cập nhật" : "Thêm"}</button>
        {editingMember && <button type="button" onClick={onCancelEdit}>Hủy</button>}
      </form>
    </div>
  );
}

export default NmtMemberAdd;
