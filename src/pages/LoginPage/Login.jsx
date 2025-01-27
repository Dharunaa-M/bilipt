import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import Assets from "../../assets/assets";
import "./login.css";

const Login = () => {
  const [icon, setIcon] = useState(false);
  const [changePasswordSection, setChangePasswordSection] = useState(false);

  const handlePasswordToggle = () => {
    setIcon((prevState) => !prevState);
  };

  const handleChangePasswordToggle = () => {
    setChangePasswordSection(true);
  };

  return (
    <>
      <div className="login">
        <div className="login-section">
          <img src={Assets.Logo} alt="" />
          <div className="login-div">
            {changePasswordSection ? "" : <h1>SIGN IN</h1>}
            <form className="input-section">
              {changePasswordSection ? (
                <>
                  <div className="change-pass-section">
                    <div className="back" onClick={() => setChangePasswordSection(false)}>
                      <MdArrowBackIos className="ms-2" />
                    </div>
                    <div>
                      <h2>Reset your password</h2>
                      <p>
                        For resetting your password, Please check your email. We
                        have generated a password.
                      </p>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary px-5 py-2"
                    onClick={() => setChangePasswordSection(false)}
                  >
                    Continue
                  </button>
                </>
              ) : (
                <>
                  <div className="input-group">
                    <div>
                      <label>USER NAME</label>
                      <input
                        type="text"
                        placeholder="ENTER YOUR NAME"
                        required
                      />
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
                        style={{ right: "18px", bottom: "58px" }}
                        onClick={handlePasswordToggle}
                      >
                        {icon ? <FaEye /> : <FaEyeSlash />}
                      </span>
                      <div className="d-flex justify-content-end">
                        <p onClick={handleChangePasswordToggle}>
                          FORGOT PASSWORD?
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary w-25 p-2" type="submit">
                    LOGIN
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
