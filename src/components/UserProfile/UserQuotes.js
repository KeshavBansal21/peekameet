import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const UserQuotes = ()=>{
    const authCtx = useContext(AuthContext);
    // let {tagline}  = authCtx.userData;

    return(
        <div className="quotes">
            <q> "kj"</q>
        </div>
    )
}

export default UserQuotes;