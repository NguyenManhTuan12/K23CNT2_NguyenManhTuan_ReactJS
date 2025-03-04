import React, { Component } from 'react'

export default class NmtEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            nmtCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    nmtHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            nmtCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    nmtHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.nmtCourse);
        event.preventDefault();
    }

  render() {
    return (
      <div className='alert alert-danger'>
        <h2> Form Select</h2>
        <form  >
                    <label htmlFor=''>
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
                    <button className='btn btn-primary' onClick={this.nmtHandleSubmit}>Click here</button>
                </form>
        
      </div>
    )
  }
}
