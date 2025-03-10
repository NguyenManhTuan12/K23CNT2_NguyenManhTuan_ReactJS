import React, { Component } from "react";
import NmtControl from "./components/NmtControl";
import NmtStudentList from "./components/NmtStudentList";
import NmtForm from "./components/NmtForm";

class NmtApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nmtStudents: JSON.parse(localStorage.getItem("nmtStudents")) || [
        { nmtId: "SV001", nmtStudentName: "Nguyễn Mạnh Tuấn", nmtAge: 20, nmtGender: "Nam", nmtBirthday: "2005-10-25", nmtBirthPlace: "HN", nmtAddress: "Sinh viên Hà Nội" },
        { nmtId: "SV002", nmtStudentName: "Nguyen Manh Hung", nmtAge: 19, nmtGender: "Nam", nmtBirthday: "2006-05-20", nmtBirthPlace: "Tphcm", nmtAddress: "Sinh viên HCM" },
      ],
      nmtStudent: null,
      nmtSearchTerm: "",
      nmtSortType: "",
    };
  }

  componentDidMount() {
    const storedStudents = localStorage.getItem("nmtStudents");
    if (storedStudents) {
      this.setState({ nmtStudents: JSON.parse(storedStudents) });
    }
  }

  updateLocalStorage = (students) => {
    localStorage.setItem("nmtStudents", JSON.stringify(students));
  };

  nmtHandleAddNew = () => this.setState({ nmtStudent: null });

  nmtHandleSearch = (nmtSearchTerm) => this.setState({ nmtSearchTerm });

  nmtHandleSort = (nmtSortType) => this.setState({ nmtSortType });

  nmtHandleView = (nmtStudent) => {
    alert(`Thông tin sinh viên:\n\nMã: ${nmtStudent.nmtId}\nTên: ${nmtStudent.nmtStudentName}\nTuổi: ${nmtStudent.nmtAge}`);
  };

  nmtHandleDelete = (nmtId) => {
    this.setState(
      (prevState) => {
        const updatedStudents = prevState.nmtStudents.filter(student => student.nmtId !== nmtId);
        return { nmtStudents: updatedStudents };
      },
      () => this.updateLocalStorage(this.state.nmtStudents)
    );
  };

  nmtHandleAddOrUpdate = (student) => {
    this.setState(
      (prevState) => {
        const students = [...prevState.nmtStudents];
        const index = students.findIndex(s => s.nmtId === student.nmtId);

        index !== -1 ? (students[index] = student) : students.push(student);
        return { nmtStudents: students, nmtStudent: null };
      },
      () => this.updateLocalStorage(this.state.nmtStudents)
    );
  };

  nmtHandleEdit = (nmtStudent) => this.setState({ nmtStudent });

  render() {
    let filteredStudents = this.state.nmtStudents.filter(student =>
      student.nmtStudentName.toLowerCase().includes(this.state.nmtSearchTerm.toLowerCase())
    );

    const sortMethods = {
      "name-asc": (a, b) => a.nmtStudentName.localeCompare(b.nmtStudentName),
      "name-desc": (a, b) => b.nmtStudentName.localeCompare(a.nmtStudentName),
      "age-asc": (a, b) => a.nmtAge - b.nmtAge,
      "age-desc": (a, b) => b.nmtAge - a.nmtAge,
    };

    if (this.state.nmtSortType) {
      filteredStudents.sort(sortMethods[this.state.nmtSortType]);
    }

    return (
      <div>
        <h1 className="text-center">Quản lý sinh viên</h1>
        <section className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <NmtControl 
                  onNmtHandleSearch={this.nmtHandleSearch} 
                  onNmtHandleSort={this.nmtHandleSort} 
                  onNmtHandleAddNew={this.nmtHandleAddNew}
                />
                <NmtStudentList
                  renderNmtStudents={filteredStudents}
                  onNmtHandleView={this.nmtHandleView}
                  onNmtHandleEdit={this.nmtHandleEdit}
                  onNmtHandleDelete={this.nmtHandleDelete}
                />
              </div>
            </div>
            <div className="col-5 grid-margin">
              <NmtForm 
                renderNmtStudent={this.state.nmtStudent} 
                onNmtHandleAddOrUpdate={this.nmtHandleAddOrUpdate}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NmtApp;