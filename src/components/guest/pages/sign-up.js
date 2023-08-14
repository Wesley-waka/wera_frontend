import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Register({ setStoredToken }) {
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const searchParams = new URLSearchParams(document.location.search);
  console.log(searchParams.get("user-type"));

  const signUpFunctionality = (e) => {
    e.preventDefault();
    let formData = {
      password: password,
      full_name: fullName,
      email_address: emailAddress,
      password_confirmation: confirmPassword,
      user_type: searchParams.get("user-type"),
      disabled: false,
    };
    // console.log(formData);
    fetch("https://rails-d0vf.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data);
          navigate(`/sign-in?user-type=${searchParams.get("user-type")}`);
        });
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <main className="container px-3 py-4">
      <div className="container">
        <div className="row no-gutter">
          <div className="col-md-7 d-none d-md-block me-2">
            <img className="" src={"/images/signup.jpg"} alt="" />
          </div>

          <div className="col-md-4 bg-light">
            <div className="login py-3">
              <div className="col-lg-12 col-xl-10 mx-auto">
                <h4 className="text-3xl text-center mb-2">WELCOME TO WERA</h4>
                <p className="text-muted mb-4 text-center py-3">
                  Create {searchParams.get("user-type")} account
                </p>
                <form onSubmit={signUpFunctionality} novalidate>
                  <div className="mb-3">
                    <input
                      id="inputText"
                      onChange={(e) => setFullName(e.target.value)}
                      type="text"
                      placeholder="Full Name"
                      autofocus=""
                      className="form-control rounded-pill border-0 shadow-sm px-4"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      id="inputEmail"
                      onChange={(e) => setEmailAddress(e.target.value)}
                      type="email"
                      placeholder="Email Address"
                      className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      id="inputPassword"
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                      className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      id="inputPassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      required
                    />
                  </div>

                  <div className="d-grid gap-2 mt-3">
                    <button
                      type="submit"
                      className="py-2 bg-[#143C66] text-white text-uppercase rounded-pill shadow-sm"
                    >
                      Sign up
                    </button>
                    <ul>
                      {errors.length > 0
                        ? errors.map((err) => (
                            <li key={err} className="text-danger">
                              {err}
                            </li>
                          ))
                        : null}
                    </ul>
                    <span>
                      Already have an account?
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          navigate(
                            `/sign-in?user-type=${searchParams.get(
                              "user-type"
                            )}`
                          );
                        }}
                        className="ms-3 text-primary"
                      >
                        log In
                      </span>
                    </span>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/");
                      }}
                      className="ms-3 text-primary text-center"
                    >
                      Home
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;

// import React from 'react'

// const UserSignUp = () => {
//   return (
//     <div>UserSignUp</div>
//   )
// }

// export default UserSignUp
