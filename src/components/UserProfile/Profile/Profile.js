import React from "react";
import "../../../assets/styles/Profile.scss"
export const Profile = (props) =>{
    let { children } = props;
    return (
        <>
            <Logo/>
            <div className="profileContainer">
                <UserInfo/>
                {children}
            </div>
        </>
    )
}