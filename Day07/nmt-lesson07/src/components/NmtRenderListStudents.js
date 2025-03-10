import React, { Component } from 'react';

class NmtRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            nmtStudents:[
                {tcvId:"NTU001",tvcName:"Nguyễn Mạnh Tuấn", nmtAge:46, nmtClass:"K23CNT2"},
                {tcvId:"NTU002",tvcName:"Nguyễn Thị A", nmtAge:22, nmtClass:"K23CNT2"},
                {tcvId:"NTU003",tvcName:"Nguyễn Văn B", nmtAge:21, nmtClass:"K23CNT2"},
                {tcvId:"NTU004",tvcName:"Nguyễn Khương  C", nmtAge:23, nmtClass:"K23CNT2"},
            ],
        }
    }
    render() {
        let nmtElement = this.state.nmtStudents.map((nmtItem, index)=>{
            return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{nmtItem.tcvId}</td>
                        <td>{nmtItem.nmtName}</td>
                        <td>{nmtItem.nmtAge}</td>
                        <td>{nmtItem.nmtClass}</td>
                        <td>
                            <button>Sửa</button>
                            <button>Xóa</button>
                        </td>
                    </tr>
            )
        })
        return (
            <div className='alert alert-info'>
                <h2>Danh sách sinh viên</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>tcvId</th>
                            <th>nmtName</th>
                            <th>nmtAge</th>
                            <th>nmtClass</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nmtElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NmtRenderListStudent;