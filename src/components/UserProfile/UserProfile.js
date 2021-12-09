import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
export default function UserProfile(){
    const authCtx = useContext(AuthContext);
    console.log(authCtx.userData)
    console.log(authCtx.userData.additionalImages[0].url);
    
    return(
        <div className="Header">
            <h1> {authCtx.userData.firstName}</h1>
                <img src={authCtx.userData.additionalImages[0].url} alt="imgage here"></img>
            <div className="image">
                {/* {authCtx.userData} */}
            </div>
        </div>
    )
    
}