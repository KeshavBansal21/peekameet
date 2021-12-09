import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import UserProfile from "./components/UserProfile/UserProfile";
import React, { useContext, useState } from "react";
import { Provider } from "react-redux";
import AuthContext from "./components/context/AuthContext";
import SignIn from "./components/signIn/SignIn/SignIn";

function App() {
  const authCtx = useContext(AuthContext)
  
  return (
    <div className="container">
      <BrowserRouter>
       
          <Routes>
            {/* TODO refactor */}
      
            <Route exact path="/login" element={<SignIn />}/> 

             {  console.log(authCtx.isLoggedIn)}
              <Route exact path="/userprofile" element={authCtx.isLoggedIn?<UserProfile />: <h1>"not permitted"</h1>}></Route>
            
          </Routes>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
