import React, { Component } from 'react'

export default class NmtEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nmtName:'Tuấn',
            nmtAge:45,
            nmtGender:'Female',
            nmtCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    nmtHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    nmtHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.nmtName + "\n" + this.state.nmtAge);

        // Chuyển dữ liệu trên form lên App component (TvcApp);
        this.props.onNmtHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='nmtName'>Student Name:</label>
                        <input type='text' name='nmtName' id='nmtName' 
                            value={this.state.nmtName}
                            onChange={this.nmtHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nmtAge'>Student Age:</label>
                        <input type='text' name='nmtAge' id='nmtAge' 
                            value={this.state.nmtAge}
                            onChange={this.nmtHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nmtGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='nmtGender' id='nmtMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.nmtGender === 'Male'}
                                onChange={this.nmtHandleChange} />
                            <label htmlFor='nmtMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='nmtGender' id='nmtFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.nmtGender === 'Female'}
                                onChange={this.nmtHandleChange} />
                            <label htmlFor='nmtFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='nmtGender' id='nmtNone' className='mx-2'
                                value={'None'}
                                checked={this.state.nmtGender === 'None'}
                                onChange={this.nmtHandleChange} />
                            <label htmlFor='nmtNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='nmtCourse'>
                            <select name='nmtCourse' id='nmtCourse' 
                                    value={this.state.nmtCourse}
                                    onChange={this.nmtHandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.nmtHandleSubmit}>Submit</button>
                </form>
            </div>
    )
  }
}
