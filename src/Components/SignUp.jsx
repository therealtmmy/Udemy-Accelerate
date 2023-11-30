import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faCircleUser,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { faLock, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./SignUp.css";
import { auth } from "../firebase";

const SignUp = () => {
  const [signup, setSignup] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [unveil, setUnveil] = useState(false);
  const [unveilOne, setUnveilOne] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorOne, setPasswordErrorOne] = useState(false);
  const [hide, setHide] = useState(true);

  const [empty, setEmpty] = useState(false);

  const submit = (e) => {
    // Display Error
    if (signup.firstName || signup.password === "") {
      setEmpty(true);
    }

    if (signup.firstName || signup.password !== "") {
      setEmpty(false);
    }

    if (signup.password !== signup.confirmPassword) {
      setHide(false);
      setPasswordErrorOne(true);
      setPasswordError(true);
    } else {
      setHide(true);
      setPasswordError(false);
      setPasswordErrorOne(false);
    }

    // Firebase Authentication
    e.preventDefault();
    createUserWithEmailAndPassword(auth, signup.email, signup.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signup">
      <div>
        <h2>Create Account</h2>
        <p>It's quick and easy</p>

        {empty ? (
          <div className="empty">
            <FontAwesomeIcon icon={faCircleExclamation} />
            <p>Input Fields Cannot be Empty</p>
          </div>
        ) : null}

        {/* Input Area */}
        <div className="NameDiv">
          <FontAwesomeIcon icon={faUser} style={{ fontSize: "13px" }} />
          <input
            type="text"
            placeholder="First Name"
            value={signup.firstName}
            onChange={(e) =>
              setSignup({ ...signup, firstName: e.target.value })
            }
          />
        </div>

        <div className="IconDiv">
          <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "13px" }} />
          <input
            type="text"
            placeholder="Surname"
            value={signup.surname}
            onChange={(e) => setSignup({ ...signup, surname: e.target.value })}
          />
        </div>

        <div className="IconDiv">
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "13px" }} />
          <input
            type="email"
            placeholder="Email"
            value={signup.email}
            onChange={(e) => setSignup({ ...signup, email: e.target.value })}
          />
        </div>

        <div className="IconDiv">
          <FontAwesomeIcon icon={faLock} style={{ fontSize: "13px" }} />
          <input
            type={unveilOne ? "text" : "password"}
            placeholder="Password"
            value={signup.password}
            onChange={(e) => setSignup({ ...signup, password: e.target.value })}
            max={6}
          />
          {!unveilOne ? (
            <FontAwesomeIcon
              onClick={(e) => setUnveilOne(!unveilOne)}
              icon={faEyeSlash}
              style={{ fontSize: "13px", cursor: "pointer" }}
            />
          ) : (
            <FontAwesomeIcon
              onClick={(e) => setUnveilOne(!unveilOne)}
              icon={faEye}
              style={{ fontSize: "13px", cursor: "pointer" }}
            />
          )}
        </div>
        {hide ? (
          <p className="password">Password must be more than 6 characters</p>
        ) : null}
        {passwordError ? (
          <p className="passwordError">Password doesnt match</p>
        ) : null}

        <div className="IconDiv">
          <FontAwesomeIcon icon={faLock} style={{ fontSize: "13px" }} />
          <input
            type={unveil ? "text" : "password"}
            placeholder="Confirm Password"
            value={signup.confirmPassword}
            onChange={(e) =>
              setSignup({ ...signup, confirmPassword: e.target.value })
            }
            max={6}
          />
          {!unveil ? (
            <FontAwesomeIcon
              onClick={(e) => setUnveil(!unveil)}
              icon={faEyeSlash}
              style={{ fontSize: "13px", cursor: "pointer" }}
            />
          ) : (
            <FontAwesomeIcon
              onClick={(e) => setUnveil(!unveil)}
              icon={faEye}
              style={{ fontSize: "13px", cursor: "pointer" }}
            />
          )}
        </div>
        {passwordErrorOne ? (
          <p className="passwordErrorOne">Password doesnt match</p>
        ) : null}
        <button onClick={submit} className="SignUpBtn">
          Sign Up
        </button>
      </div>

      <div>
        <img
          className="otherimg"
          src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?w=740&t=st=1701212723~exp=1701213323~hmac=b7eca25e579f284f1b761f94bc2a80b06c447dca1ef4c8b6977d5bacccaa74c4"
          alt="A Boy studying with his book"
        />
      </div>
    </div>
  );
};

export default SignUp;
