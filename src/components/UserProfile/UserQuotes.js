import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const UserQuotes = ()=>{
    const authCtx = useContext(AuthContext)
    let {tagline} = authCtx.userData;
    console.log(tagline)
    return(
        <div className="quotes">
            <q>{tagline}</q>
       
        </div>
    )
}

export default UserQuotes;