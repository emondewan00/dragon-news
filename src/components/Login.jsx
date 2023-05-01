import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import FindUs from "./FindUs";
import QZone from "./QZone";
import Ad from "./Ad";
import { AuthContext } from "./Provider/Provider";

const Login = () => {
  const { loginWithGoogle, githubLogin } = useContext(AuthContext);
  const googleLogin = () => {
    loginWithGoogle();
  };
  const githubLoginHandler = () => {
    githubLogin()
      .then((res) => {
        console.log(res)
      })
      .then((err) => {
        console.log(err)
      });
  };
  return (
    <div className="space-y-3 mt-2">
      <button
        className="btn btn-outline form-control
       w-full"
        onClick={googleLogin}
      >
        <span>
          <FaGoogle className="inline me-2" /> Login with Google
        </span>
      </button>
      <button
        className="btn btn-outline btn-primary form-control
       w-full "
        onClick={githubLoginHandler}
      >
        <span>
          <FaGithub className="inline me-2" /> Login with Github
        </span>
      </button>
      <FindUs />
      <QZone />
      <Ad />
    </div>
  );
};

export default Login;
