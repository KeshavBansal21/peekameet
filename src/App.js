import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import UserProfile from "./components/UserProfile/UserProfile";
import React, { useContext, useState } from "react";
import { Provider } from "react-redux";
import AuthContext from "./components/context/AuthContext";
import SignIn from "./components/signIn/SignIn/SignIn";
import NotesSection from "./components/Notes/NotesSection";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {/* TODO refactor */}

          <Route exact path="/login" element={<SignIn />} />

          {console.log(authCtx.isLoggedIn)}

          <Route
            exact
            path="/userprofile"
            element={
              authCtx.isLoggedIn ? <UserProfile /> : <h1>"not permitted"</h1>
            }
          ></Route>
          <Route path="/notes" element={<NotesSection/>}></Route>
          <Route path="/notes/addnotes" element={<AddNotes/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
