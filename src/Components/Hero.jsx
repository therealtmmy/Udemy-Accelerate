import React from "react";
import { useState } from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [emailPassword, setEmailPassword] = useState({
    email: "",
    password: "",
  });
  const [showEmail, setShowEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [unveil, setUnveil] = useState(false);

  const showPasscode = () => {
    setUnveil(!unveil);
  };

  const submit = () => {
    if (emailPassword.email || emailPassword.password === "") {
      setShowEmail(true);
      setShowPassword(true);
    } else {
      setShowEmail(false);
      setShowPassword(false);
    }
  };

  return (
    <div className="Hero">
      <div>
        <h2>Login to your Account</h2>
        <p>Welcome back!</p>

        {/* Input Area */}

        <div id="EmailDiv">
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "13px" }} />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setEmailPassword({ ...emailPassword, email: e.target.value })
            }
            onBlur={() => setShowEmail(true)}
          />
        </div>
        {showEmail && emailPassword.email === "" ? (
          <p className="mailError">Email cannot be empty</p>
        ) : null}

        <div id="PasswordDiv">
          <FontAwesomeIcon icon={faLock} style={{ fontSize: "13px" }} />
          <input
            type={unveil ? "text" : "password"}
            placeholder="Password"
            onChange={(e) =>
              setEmailPassword({
                ...emailPassword,
                password: e.target.value,
              })
            }
            max={6}
            onBlur={() => setShowPassword(true)}
          />
          {!unveil ? (
            <FontAwesomeIcon
              onClick={showPasscode}
              icon={faEyeSlash}
              style={{ fontSize: "13px", cursor: "pointer" }}
            />
          ) : (
            <FontAwesomeIcon
              onClick={showPasscode}
              icon={faEye}
              style={{ fontSize: "13px", cursor: "pointer" }}
            />
          )}
        </div>
        {showPassword && emailPassword.password === "" ? (
          <p className="PasswordError">Password cannot be empty</p>
        ) : null}

        <a href="">Forgot Password?</a>
        <br />
        <button onClick={submit} className="LoginBtn">
          Log in
        </button>

        <br />

        {/* Footer */}
        <span className="footer">
          Don't have an account?
          <a href="#signup">Click on Sign Up</a>
        </span>
      </div>

      <div>
        <img
          className="otherimg"
          src="https://img.freepik.com/free-vector/business-man-working-hard-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39773.jpg?w=740&t=st=1701080500~exp=1701081100~hmac=738a97dd7dfd5b246191c4420eaefef44143dc6e239d3de37afda4780a2aa7e1"
          alt="A lady studying with a laptop"
        />
      </div>
    </div>
  );
};

export default Hero;
