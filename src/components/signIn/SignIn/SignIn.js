import React from "react";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import SignInForm from "../SignInForm/SignInForm";
const SignIn = () => {
  return (
    <>
      <div className="signinContainer">
        <Logo />
        <SignInForm />
        <Footer></Footer>
      </div>
    </>
  );
};

export default SignIn;
