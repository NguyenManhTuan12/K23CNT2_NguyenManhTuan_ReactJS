import React, { Component } from "react";

class NmtForm extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      nmtId: "",
      nmtStudentName: "",
      nmtAge: "",
      nmtGender: "",
      nmtBirthday: "",
      nmtBirthPlace: "",
      nmtAddress: "",
    };
    this.state = { ...this.defaultState };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.renderNmtStudent !== this.props.renderNmtStudent) {
      this.setState(this.props.renderNmtStudent || this.defaultState);
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onNmtHandleAddOrUpdate } = this.props;
    if (onNmtHandleAddOrUpdate) {
      onNmtHandleAddOrUpdate({
        ...this.state,
        nmtBirthday: this.state.nmtBirthday.trim() || "Chưa cập nhật",
      });
    } else {
      console.error("Lỗi: onNmtHandleAddOrUpdate không được truyền vào!");
    }
    this.setState({ ...this.defaultState });
  };

  render() {
    const fields = [
      { name: "nmtId", label: "ID", type: "text", required: true },
      { name: "nmtStudentName", label: "Tên", type: "text", required: true },
      { name: "nmtAge", label: "Tuổi", type: "number", required: true },
      { name: "nmtBirthday", label: "Ngày sinh", type: "text", required: true },
      { name: "nmtBirthPlace", label: "Nơi sinh", type: "text", required: true },
      { name: "nmtAddress", label: "Địa chỉ", type: "text", required: true },
    ];

    return (
      <div className="card p-3">
        <h4 className="text-center">{this.state.nmtId ? "Chỉnh sửa sinh viên" : "Thêm sinh viên"}</h4>
        <form onSubmit={this.handleSubmit}>
          {fields.map(({ name, label, type, required }) => (
            <div key={name} className="form-group">
              <label>{label}:</label>
              <input type={type} name={name} className="form-control" value={this.state[name]} onChange={this.handleChange} required={required} />
            </div>
          ))}
          <div className="form-group">
            <label>Giới tính:</label>
            <select name="nmtGender" className="form-control" value={this.state.nmtGender} onChange={this.handleChange} required>
              <option value="">Chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            {this.state.nmtId ? "Cập nhật" : "Thêm mới"}
          </button>
        </form>
      </div>
    );
  }
}

export default NmtForm;