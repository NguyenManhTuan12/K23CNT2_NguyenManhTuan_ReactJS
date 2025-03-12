import React, { Component } from "react";
import NmtControl from "./components/NmtControl";
import NmtMemberList from "./components/NmtMemberList";
import NmtForm from "./components/NmtForm";

class NmtApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nmtMembers: JSON.parse(localStorage.getItem("nmtMembers")) || [
        { nmtId: "MB001", nmtMemberName: "Nguyễn Mạnh Tuấn", nmtAge: 20, nmtGender: "Nam", nmtBirthday: "2005-10-25", nmtBirthPlace: "HN", nmtAddress: "Thành viên Hà Nội" },
        { nmtId: "MB002", nmtMemberName: "Nguyen Manh Hung", nmtAge: 19, nmtGender: "Nam", nmtBirthday: "2006-05-20", nmtBirthPlace: "Tphcm", nmtAddress: "Thành viên HCM" },
      ],
      nmtMember: null,
      nmtSearchTerm: "",
      nmtSortType: "",
    };
  }

  componentDidMount() {
    const storedMembers = localStorage.getItem("nmtMembers");
    if (storedMembers) {
      this.setState({ nmtMembers: JSON.parse(storedMembers) });
    }
  }

  updateLocalStorage = (members) => {
    localStorage.setItem("nmtMembers", JSON.stringify(members));
  };

  nmtHandleAddNew = () => this.setState({ nmtMember: null });

  nmtHandleSearch = (nmtSearchTerm) => this.setState({ nmtSearchTerm });

  nmtHandleSort = (nmtSortType) => this.setState({ nmtSortType });

  nmtHandleView = (nmtMember) => {
    alert(`Thông tin thành viên:\n\nMã: ${nmtMember.nmtId}\nTên: ${nmtMember.nmtMemberName}\nTuổi: ${nmtMember.nmtAge}`);
  };

  nmtHandleDelete = (nmtId) => {
    this.setState(
      (prevState) => {
        const updatedMembers = prevState.nmtMembers.filter(member => member.nmtId !== nmtId);
        return { nmtMembers: updatedMembers };
      },
      () => this.updateLocalStorage(this.state.nmtMembers)
    );
  };

  nmtHandleAddOrUpdate = (member) => {
    this.setState(
      (prevState) => {
        const members = [...prevState.nmtMembers];
        const index = members.findIndex(m => m.nmtId === member.nmtId);

        index !== -1 ? (members[index] = member) : members.push(member);
        return { nmtMembers: members, nmtMember: null };
      },
      () => this.updateLocalStorage(this.state.nmtMembers)
    );
  };

  nmtHandleEdit = (nmtMember) => this.setState({ nmtMember });

  render() {
    let filteredMembers = this.state.nmtMembers.filter(member =>
      member.nmtMemberName.toLowerCase().includes(this.state.nmtSearchTerm.toLowerCase())
    );

    const sortMethods = {
      "name-asc": (a, b) => a.nmtMemberName.localeCompare(b.nmtMemberName),
      "name-desc": (a, b) => b.nmtMemberName.localeCompare(a.nmtMemberName),
      "age-asc": (a, b) => a.nmtAge - b.nmtAge,
      "age-desc": (a, b) => b.nmtAge - a.nmtAge,
    };

    if (this.state.nmtSortType) {
      filteredMembers.sort(sortMethods[this.state.nmtSortType]);
    }

    return (
      <div>
        <h1 className="text-center">Quản lý thành viên</h1>
        <section className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <NmtControl 
                  onNmtHandleSearch={this.nmtHandleSearch} 
                  onNmtHandleSort={this.nmtHandleSort} 
                  onNmtHandleAddNew={this.nmtHandleAddNew}
                />
                <NmtMemberList
                  renderNmtMembers={filteredMembers}
                  onNmtHandleView={this.nmtHandleView}
                  onNmtHandleEdit={this.nmtHandleEdit}
                  onNmtHandleDelete={this.nmtHandleDelete}
                />
              </div>
            </div>
            <div className="col-5 grid-margin">
              <NmtForm 
                renderNmtMember={this.state.nmtMember} 
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
