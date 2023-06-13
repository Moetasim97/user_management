import React from "react"
import "./Modal.css"

class Modal extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={}
    }

    do_something=()=>{
        
        console.log(this.state)
    }


    render(){
        if(this.props.state==false){
            return(<div></div>)
        }
        else {
            return(
                <>
                <div className="modal_background ">
               <div className="header_modal d-flex justify-content-between  p-3">
                    <div className="text-light pt-1  h4">Add New User</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-x" onClick={this.do_something} viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
               </div>
               <div>
               <div className="d-flex justify-content-start mt-4"><label htmlFor="fullName">Full Name</label></div>
               <input className="fullusername custom_style mb-3" type="text" placeholder="Enter Full Name" id="fullName"></input>
               </div>
               <div>
               <div className="d-flex justify-content-start"><label htmlFor="userName">User Name</label></div>
               <input className="username custom_style mb-3" type="text" placeholder="Enter username" id="userName"></input>
               </div>
               <div>
               <div className="d-flex justify-content-start"><label htmlFor="email_address">Email Address</label></div>
               <input className="emailaddress custom_style mb-3" type="text" placeholder="Enter email address" id="email_address"></input>
               </div>
               <div>
               <div className="d-flex justify-content-start"><label htmlFor="user_group">User Group</label></div>
               <select className="  custom_style mb-3" id="user_group">
                    <option>Default select</option>
                </select>
               </div>
               <div>
               <div className="d-flex justify-content-start"><label htmlFor="user_profile">Assign Profile</label></div>
               <select className="  custom_style mb-3" id="user_profile">
                    <option>Default select</option>
                </select>
               </div>
                </div>
                

                
                
                </>
            )

        }
        
       
    }

}
export default Modal