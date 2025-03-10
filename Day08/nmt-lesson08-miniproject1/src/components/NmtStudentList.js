import React, { Component } from "react";
import NmtStudent from "./NmtStudent";

class NmtStudentList extends Component {
  // Hàm xử lý sự kiện xem
  nmtHandleView = (nmtStudent) => {
    if (this.props.onNmtHandleView) {
      this.props.onNmtHandleView(nmtStudent);
    } else {
      console.error("❌ Lỗi: onNmtHandleView chưa được truyền từ NmtApp!");
    }
  };

  // Hàm xử lý sự kiện chỉnh sửa
  nmtHandleEdit = (nmtStudent) => {
    if (this.props.onNmtHandleEdit) {
      this.props.onNmtHandleEdit(nmtStudent);
    } else {
      console.error("❌ Lỗi: onNmtHandleEdit chưa được truyền từ NmtApp!");
    }
  };

  // Hàm xử lý sự kiện xóa
  nmtHandleDelete = (nmtId) => {
    if (this.props.onNmtHandleDelete) {
      this.props.onNmtHandleDelete(nmtId);
    } else {
      console.error("❌ Lỗi: onNmtHandleDelete chưa được truyền từ NmtApp!");
    }
  };

  render() {
    let { renderNmtStudents } = this.props;

    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {renderNmtStudents.map((nmtItem, index) => (
                <NmtStudent
                  key={nmtItem.nmtId} // Dùng phnId thay vì index để tránh lỗi key
                  index={index}
                  renderNmtStudent={nmtItem}
                  onNmtHandleView={() => this.nmtHandleView(nmtItem)}
                  onNmtHandleEdit={() => this.nmtHandleEdit(nmtItem)}
                  onNmtHandleDelete={() => this.nmtHandleDelete(nmtItem.nmtId)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default NmtStudentList;
