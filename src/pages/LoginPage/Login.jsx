import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Assets from "../../assets/assets";
import "./login.css";

const Login = () => {
  const [icon, setIcon] = useState(false);

  const handlePasswordToggle = () => {
    setIcon((prevState) => !prevState);
  };

  return (
    <>
      <div className="login">
        <div className="login-section">
          <img src={Assets.Logo} alt="" />
          <div className="login-div">
            <h1>SIGN IN</h1>
            <form className="input-section">
              <div className="input-group">
                <div>
                  <label>USER NAME</label>
                  <input type="text" placeholder="ENTER YOUR NAME" required />
                </div>
                <div>
                  <label>PASSWORD</label>
                  <input
                    type="password"
                    placeholder="ENTER THE PASSWORD"
                    autoComplete="current-password"
                    required
                  />
                  <span
                    className="position-absolute"
                    style={{ right: "14px", bottom: "44px" }}
                    onClick={handlePasswordToggle}
                  >
                    {icon ? <FaEye /> : <FaEyeSlash />}
                  </span>
                  <div className="d-flex justify-content-end">
                    <p>FORGOT PASSWORD?</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary w-25 p-2" type="submit">
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
