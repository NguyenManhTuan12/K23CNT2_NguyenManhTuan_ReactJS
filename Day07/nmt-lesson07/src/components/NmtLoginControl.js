import React, { Component } from 'react';
import NmtLoginComp from './NmtLoginComp';
import NmtLogoutComp from './NmtLogoutComp';

class NmtLoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    nmtHandleLogin = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:true,
        })
    }
    render() {
        let {isLoggedIn}=this.state
        let nmtElement = isLoggedIn?<NmtLoginComp /> : <NmtLogoutComp />
        return (
            <div className='alert alert-danger'>
                {nmtElement}
                {
                    isLoggedIn? 
                        <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button> 
                        :<button onClick={this.nmtHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default NmtLoginControl;