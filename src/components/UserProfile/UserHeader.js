import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import './UserProfile.css'
const UserHeader = () =>{
    const authCtx = useContext(AuthContext);
    const logoimg=authCtx.userData.profileImage.url
    // console.log(logoimg )    ;
    // console.log(authCtx.userData)
    // console.log(authCtx.userData.);
    
    let {firstName , lastName ,url ,  jobTitle} = authCtx.userData;
    console.log(firstName ,lastName , url )

    return(
        <div className="Header">
        <div className="im-container">
            <img src={logoimg} alt={logoimg}></img>
            <div className="details-container">
                <div className="name">
                    <p className="firstName">{firstName}</p>
                    <p className="lastName">{lastName}</p>
                </div>
                <div className="job">
                    <div className="companyName">{jobTitle}</div>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default UserHeader;