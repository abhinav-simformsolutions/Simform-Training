import React from "react";
import logo from "../../images/logo.png";
import "./Landing.css";
import { auth, provider } from "../../fire/firebase";

function Landing(props) {
  const signIn = () => {
    //    google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="landing">
      <div className="landing__logo">
        <img src={logo} alt="" />
        
      </div>
      <button className="landing__button" onClick={signIn}>
        Sign In
      </button>
      <h3 className="landing__developer">
          developed by:<a href="https://github.com/abhi3899"> Abhinav Mishra</a>
        </h3>
    </div>
  );
}
export default Landing;
