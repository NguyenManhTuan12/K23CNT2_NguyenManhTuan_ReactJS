import React, { Component } from 'react';

class NmtEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nmtGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    nmtHandleChange = (event)=>{
        this.setState({
            nmtGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    nmtHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.nmtGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='nmtGioiTinh'  id='nmtNam' className='mx-2'
                            value="Nam" checked={this.state.nmtGioiTinh === 'Nam'} onChange={this.nmtHandleChange}/> 
                            <label htmlFor='nmtNam'>Nam</label>  
                        <input type='radio' name='nmtGioiTinh'  id='nmtNu' className='mx-2'
                            value="Nữ" checked={this.state.nmtGioiTinh === 'Nữ'} onChange={this.nmtHandleChange}/> 
                            <label htmlFor='nmtNu'>Nữ</label>  
                        <input type='radio' name='nmtGioiTinh' id='nmtKhac' className='mx-2'
                            value="Khác" checked={this.state.nmtGioiTinh === 'Khác'} onChange={this.nmtHandleChange}/> 
                            <label htmlFor='nmtKhac'>Khác</label>
                    </div>
                    <button onClick={this.nmtHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NmtEventForm3;