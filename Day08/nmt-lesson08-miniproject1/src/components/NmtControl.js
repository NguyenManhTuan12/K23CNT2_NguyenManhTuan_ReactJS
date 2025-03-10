import React, { Component } from 'react';

class NmtControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      sortType: "",
    };
  }

  handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
    this.props.onNmtHandleSearch(searchTerm);
  };

  handleSortChange = (event) => {
    const sortType = event.target.value;
    this.setState({ sortType });
    this.props.onNmtHandleSort(sortType);
  };
  handleAddNewStudent = () => {
    if (this.props.onNmtHandleAddNew) {
      this.props.onNmtHandleAddNew();
    } else {
      console.error("onNmtHandleAddNew không được truyền từ NmtApp");
    }
  };  
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3">
            <button 
              type="button" 
              className="btn btn-primary btn-icon-text"
              onClick={this.handleAddNewStudent} // Gọi hàm khi click
            >
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6">
            <form className="search-form">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Tìm kiếm sinh viên"
                value={this.state.searchTerm}
                onChange={this.handleSearchChange}
              />
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control" value={this.state.sortType} onChange={this.handleSortChange}>
              <option value="">Sắp xếp</option>
              <option value="name-asc">Tên A-Z</option>
              <option value="name-desc">Tên Z-A</option>
              <option value="age-asc">Tuổi tăng dần</option>
              <option value="age-desc">Tuổi giảm dần</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default NmtControl;