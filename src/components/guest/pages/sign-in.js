import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RightArrowIcon } from "../../icons";

function Login({ setUser, setCompany }) {
  const navigate = useNavigate();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [userType, setUserType] = useState(searchParams.get("user-type"));

  const [errors, setErrors] = useState([]);
  console.log(userType);

  const signUpFunctionality = (e) => {
    e.preventDefault();
    let formData = {
      email_address: emailAddress,
      password: password,
      user_type: userType,
    };
    // console.log(formData);
    fetch("https://rails-d0vf.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          if (userType == "jobseeker") {
            navigate("/jobseeker");
            localStorage.setItem("jobseekerId", JSON.stringify(data.id));
            setUser(data);
          } else {
            if (data.user_type !== undefined) {
              navigate("/admin-dashboard");
              localStorage.setItem("adminId", JSON.stringify(data.id));
            } else {
              console.log(data);
              localStorage.setItem("employerId", JSON.stringify(data.id));
              navigate("/company/jobs");
            }
          }
        });
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <div className="container p-3">
      <div className="container">
        <div className="row no-gutter">
          <div className="col-md-7 d-none d-md-block  me-2">
            <img className="login" src={"images/sign-in-02.svg"} alt="" />
          </div>

          <div className="col-md-4 bg-light bg-image">
            <div className="login py-5">
              <div className="col-lg-12 col-xl-10 mx-auto">
                <p className="text-3xl text-center mb-2">
                  WELCOME BACK TO WERA
                </p>
                <p className="text-muted text-center py-3 mb-6">
                  You are logging in as a {userType}
                </p>
                <form onSubmit={signUpFunctionality} novalidate>
                  <div className="mb-6">
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
                  <div className="d-grid gap-2 mt-2">
                    <br />

                    <button
                      type="submit"
                      className=" py-2 bg-[#143C66] text-white text-uppercase rounded-pill shadow-sm"
                    >
                      Log In
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
                    <span className="text-center block">
                      Not yet registered?
                      <span
                        onClick={() => {
                          navigate(`/sign-up?user-type=${userType}`);
                        }}
                        className="ms-3 text-primary"
                        style={{ cursor: "pointer" }}
                      >
                        Sign up
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
    </div>
  );
  //   return (
  //     <div className="container maincontainer">
  //       <div className="container-fluid">
  //         <div className="row no-gutter">
  //           <div className="col-md-6 d-none d-md-flex bg-image">
  //             <img
  //               className="img-fluid mx-auto d-block max-height-100vh"
  //               src={LoginImg}
  //               alt=""
  //             />
  //           </div>

  //           <div className="col-md-6 bg-light d-flex align-items-center justify-content-center">
  //             <div className="container">
  //               <div className="row">
  //                 <div className="col-lg-10 col-xl-7">
  //                   <h4 className="display-6">WELCOME BACK TO WERA</h4>
  //                   <p className="text-muted mb-4">Login your account</p>
  //                   <form>
  //                     <div className="mb-3">
  //                       <input
  //                         id="inputEmail"
  //                         type="email"
  //                         placeholder="Email Address"
  //                         required=""
  //                         className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
  //                       />
  //                     </div>
  //                     <div className="mb-3">
  //                       <input
  //                         id="inputPassword"
  //                         type="password"
  //                         placeholder="Password"
  //                         required=""
  //                         className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
  //                       />
  //                     </div>

  //                     <div className="flex flex-col text-black-900 py-1 form-control rounded-pill border-0 shadow-sm px-4 text-primary">
  //                       <label htmlfor="users">Who are you?</label>
  //                       <select id="users" name="users" className="form-control">
  //                         <option value="1">Admin</option>
  //                         <option value="2">Recruiter</option>
  //                         <option value="3">Job Seeker</option>
  //                       </select>
  //                     </div>
  //                     <div className="d-grid gap-2 mt-2">
  //                       <br />

  //                       <button
  //                         type="submit"
  //                         className="btn btn-primary btn-sm  text-uppercase mb-3 rounded-pill shadow-sm custom button"
  //                       >
  //                         Sign in
  //                       </button>
  //                       <h7>
  //                         Not yet registered?{" "}
  //                         <a href="http://localhost:4000/register">
  //                           <button type="button" className="btn-primary">
  //                             SIGN UP
  //                           </button>
  //                         </a>
  //                       </h7>
  //                     </div>
  //                   </form>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
}

export default Login;

// import React from 'react'

// const UserLogin = () => {
//   return (
//     <div>UserLogin</div>
//   )
// }

// export default UserLogin
