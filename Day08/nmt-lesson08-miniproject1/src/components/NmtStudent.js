import React, { Component } from "react";

class NmtStudent extends Component {
  render() {
    const { renderNmtStudent, index, onNmtHandleView, onNmtHandleEdit, onNmtHandleDelete } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{renderNmtStudent.nmtId}</td>
        <td>{renderNmtStudent.nmtStudentName}</td>
        <td>{renderNmtStudent.nmtAge}</td>
        <td>{renderNmtStudent.nmtBirthday}</td>
        <td>{renderNmtStudent.nmtGender}</td>
        <td>
          {/* Nút Xem */}
          <button className="btn btn-info mx-1" onClick={() => onNmtHandleView()}>
            Xem
          </button>

          {/* Nút Chỉnh Sửa */}
          <button className="btn btn-warning mx-1" onClick={() => onNmtHandleEdit()}>
            Sửa
          </button>

          {/* Nút Xóa */}
          <button className="btn btn-danger mx-1" onClick={() => onNmtHandleDelete()}>
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default NmtStudent;