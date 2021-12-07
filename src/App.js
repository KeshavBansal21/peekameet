import Login from "./components/Login";
import {BrowserRouter , Route ,Routes} from 'react-router-dom';

import UserProfile from "./components/UserProfile/UserProfile";
import React , {useState} from 'react';
import { Provider } from "react-redux";

function App() {
  
  return (
    <div className="wrapper">
    
        <h1>Application</h1>
        <BrowserRouter>
          <Login/>
          <Routes>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/userprofile" element={<UserProfile/>}></Route>
          </Routes>
        </BrowserRouter>
    
      
    </div>
  );
}


export default App;
