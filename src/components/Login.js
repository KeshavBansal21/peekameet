import React, { useContext, useState } from "react";
import "./Login.css";
import axios from 'axios';
import AuthContext from "./context/AuthContext";
import {useNavigate} from 'react-router-dom'
function Login({ user }) {
  const [userEmail, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [emailerr, setEmailError] = useState({});
  const [pwderr, setPasswordError] = useState({});
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const loginHandler = async(event) => {
    console.log("click");
    console.log(userEmail, userPassword);
    event.preventDefault();
    
    if (userEmail.trim().length === 0) {
      setEmailError({
        title: "Invalid Input",
        msg: "Please enter valid email(non-empty value.)",
      });
      // checkDisplayError = true;
      return;
    }

    if (userPassword.trim().length === 0) {
      setPasswordError({
        title: "Invalid Input",
        msg: "password (non-empty value.)",
      });
      return;
    }

    if (userPassword.trim().length < 8) {
      setPasswordError({
        title: "Invalid Password",
        msg: "Password must be of 8 charcaters!",
      });
      return;
    }

    const check = userPassword.match(/\d+/g);
    if (check === null) {
      setPasswordError({
        title: "Invalid Password",
        msg: "Password must contain a number!",
      });
      return;
    }
    
    const res = await checkLogin();

  
    // console.log(res);
    console.log(authCtx.data)

    if(res==true){
      const res =  await axios.get("http://localhost:3000/api/mocks/userLogin.json")
       
      authCtx.login(res.data.data[0].token);
      authCtx.getData(res.data.data[0].customer);
      console.log(authCtx.isLoggedIn)
      console.log(authCtx.token)
      console.log(authCtx.userData) 
      navigate('/userProfile');
        
    }

    /* 
        TODO
        - add validation: show invalid input error
        - add a mock file
        - call checkLogin method
          - call login api
        - success: store data in contextData api
        - fail: show error
        */
  };

  const checkLogin = async()=>{

      const res =  await axios.get("http://localhost:3000/api/mocks/userLogin.json")
      const email = "bhagyashree.srivastava@daffodilsw.com";
      console.log(email+"")
      try{
          if(email===userEmail ){
            return true;
          }else{
            return false;
          }

      }catch(err){
            alert("Invalid api call");
      }


   
  }
  return (
    <div className="login-wrapper">
      <form onSubmit={loginHandler}>
        <label>
          <p>Username</p>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <div> {emailerr && emailerr.msg}</div>

          {/* {err ? <p>"invalid input"</p> : ""} */}
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div> {pwderr && pwderr.msg}</div>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}



export default Login;
