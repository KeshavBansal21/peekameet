import axios from "axios";
import "../../../assets/styles/SignInForm.scss";

import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router";
import React, { useContext, useState } from "react";
import group18 from "../../../assets/images/group-18.jpg";
import ButtonGrp from "../ButtonGrp/ButtonGrp";

const buttonInfo = [
  {
    title: "Freelancer",
    bgColor: "rgba(241, 124, 43, 0.18)",
    color: "#f17c2b",
  },
  {
    title: "Job Seeker",
    bgColor: "rgba(150, 54, 143, 0.18)",
    color: "#96368f",
  },
  {
    title: "Enterpreneur",
    bgColor: "rgba(26, 150, 145, 0.18)",
    color: "#1a9691",
  },
  {
    title: "Mompreneur",
    bgColor: "rgba(230, 49, 131, 0.18)",
    color: "#e63183",
  },
  {
    title: "Internship Seeker",
    bgColor: "rgba(0, 128, 175, 0.17)",
    color: "#0080af",
  },
  {
    title: "Environmental Change Maker",
    bgColor: "rgba(231, 33, 44, 0.18)",
    color: "#e7212c",
  },
];

const SignInForm = ({ user }) => {
  const [userEmail, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [emailerr, setEmailError] = useState({});
  const [pwderr, setPasswordError] = useState({});
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginHandler = async (event) => {
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

    console.log(res);
    console.log(authCtx.data);

    if (res == true) {
      const res = await axios.get(
        "http://localhost:3000/api/mocks/userLogin.json"
      );
      console.log(true);
      authCtx.login(res.data.data[0].token);
      authCtx.getData(res.data.data[0].customer);
      navigate("/userProfile");
    }
    console.log(authCtx.isLoggedIn);
    console.log(authCtx.token);
    console.log(authCtx.userData);

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

  const checkLogin = async () => {
    const res = await axios.get(
      "http://localhost:3000/api/mocks/userLogin.json"
    );
    const email = "bhagyashree.srivastava@daffodilsw.com";
      console.log(email===userEmail)
    if (email === userEmail) {
      console.log("hello from true")
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="container signinFormContainer">
      <div className="leftSignInContainer">
        <img src={group18} alt="abc" />
      </div>

      <div className="rightSignInContainer">
        <div className="rightSignInHeading">
          <span>PEEKaMEET</span> lets you network more effectively to achieve
          your business and career goals
        </div>
        <div className="btnGroup">
          {buttonInfo.map((btn) => (
            <ButtonGrp btn={btn} key={btn.title} />
          ))}
        </div>
        <div className="buildText">
          Build and manage your network with PEEKaMEET
        </div>

        <div className="formDiv">
          <form onSubmit={loginHandler}>
            <label className="inputLabel">Email</label>
            <p> Username</p>
            <input
              type="text"
              className="inputField"
              noValidate
              onChange={(e) => setUserName(e.target.value)}
            ></input>
            <div> {emailerr && emailerr.msg}</div>

            {/* {err ? <p>"invalid input"</p> : ""} */}

            <input
              type="password"
              className="inputField"
              noValidate
              onChange={(e) => setPassword(e.target.value)}
            />
            <div> {pwderr && pwderr.msg}</div>
            <div>
              <button type="submit" className="signinBtn">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="rememberForgot">
          <div className="remember">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <div className="forgotPassword">Forgot Password?</div>
          <div className="dontHaveAccount">
            Don’t have an account?<span className="signUp">Sign up?</span>
          </div>
        </div>
        <div className="dontHaveAccount">
          Don’t have an account?<span className="signUp">Sign up?</span>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
