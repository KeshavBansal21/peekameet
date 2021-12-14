import React from "react";

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