import React, { useState } from 'react'

export default function NmtUseState() {
    // khởi tạo state 
    const [nmtCount, setNmtCount] = useState(0);

    // khởi tạo state là một mảng 
    const nmtArr = [10,12,20,22];
    const [nmtArray, setNmtArray] = useState(nmtArr);

    // khởi tạo state với mảng object
    const nmtStudents = [
        {nmtId:"SV001",nmtName:"Mạnh Tuấn", nmtAge:46},
        {nmtId:"SV002",nmtName:"Nguyễn Văn Nam", nmtAge:146},
    ];
    const [nmtStudentList, setNmtStudentList] = useState(nmtStudents);

    // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng
    const nmtHandleAddList=()=>{
        setNmtArray([
            ...nmtArray,
            parseInt(Math.random()*100),
        ])
    }

    // Hàm xử lý sự kiện thêm mới sinh viên
    const nmtHandleAddNewStudent = ()=>{
        let nmtStudent = {
            nmtId:"SV003",
            nmtName:"Nguyễn Quang B",
            nmtAge:22
        };
        // Thêm vào state tvcStudentList
        setNmtStudentList([
            ...nmtStudentList,
            nmtStudent
        ])

        console.log("List: ", nmtStudentList);
        
    }
  return (
    <div className='alert alert-danger '>
        <h2>useState Demo</h2>
        <div>
            <h3>Count: {nmtCount}</h3>
            <button onClick={()=>setNmtCount(nmtCount+1)}>Tăng + </button>
            <button onClick={()=>setNmtCount(nmtCount-1)}>Giảm - </button>
        </div>
        <div>
            <h3>Array: {nmtArray.toString()}</h3>
            <button onClick={nmtHandleAddList}>Thêm phần từ</button>
        </div>
        <div>
            <h3>Danh sách sinh viên</h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nam</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nmtStudentList.map((nmtStudent,index)=>{
                            return <>
                                <tr>
                                    <td>{nmtStudent.nmtId}</td>
                                    <td>{nmtStudent.nmtName}</td>
                                    <td>{nmtStudent.nmtAge}</td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
                <tfoot>
                    <button onClick={nmtHandleAddNewStudent}>Thêm mới sinh viên</button>
                </tfoot>
            </table>
        </div>
    </div>
  )
}