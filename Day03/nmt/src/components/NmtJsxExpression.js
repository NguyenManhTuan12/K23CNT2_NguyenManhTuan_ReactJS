import React from 'react'

export default function NmtJsxExpression() {
    // biến 
    const name="Nguyễn Mạnh Tuấn";
    // biến đối tượng 
    const user ={
        firstName:"Tuấn",
        lastNamee:"Nguyễn"
    }
    // hàm 
    const fullName=(user)=>{
        return user.firstName + ' ' +user.lastNamee  ;
    }

    // element 
    const element =(
        <div>
            {/* Biểu thức jsx */}
           <h2> {fullName(user)} </h2>
            <hr/>
         <h3>Welcome to, {name}</h3>
        </div>
    );
    // ham 
    const sayWelcome =(name)=>{
        if(name){
            return <h3>Welcome to {name}</h3>
        }else{
            return <h3>Welcome to Kiti </h3>
        }
    }
  return (
    <div>
      <h1> NMT-JSX Expression</h1>
      {/* sử dụng biến element */}
      {element}

      <hr/>
      {sayWelcome()}
      <hr/>
      {sayWelcome("Nguyễn Mạnh Tuấn")}
    </div>
  )
}
