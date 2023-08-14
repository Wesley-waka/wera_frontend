import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileIcon } from "../icons";

const JobseekerNavbar = () => {
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState(null);
  // Get jobseeker's id stored in the local storage
  useEffect(() => {
    const jsId = localStorage.getItem("jobseekerId");
    setId(jsId);
  }, []);
  // If id is present, fetch the jobseeker details and use the full name to display on the navbar
  useEffect(() => {
    if (id !== null) {
      fetch(`https://rails-d0vf.onrender.com/profiles/${id}`)
        .then((res) => res.json())
        .then((data) => setName(data.full_name));
    }
  }, [id]);
  return (
    <nav className="theme-blue">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-stretch justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                src={"/images/Logo5.png"}
                alt="wera"
                href="/landingpage"
                className="md:cursor-pointer h-12 "
              />
            </div>
            <div className="sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-1 sm:px-3 py-2 text-base font-medium hover:no-underline no-underline"
                  onClick={() => {
                    navigator("/jobseeker");
                  }}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-1 sm:px-3 py-2 text-base font-medium hover:no-underline no-underline"
                  onClick={() => {
                    navigator("/jobsapplied");
                  }}
                >
                  Jobs Applied
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-1 sm:px-3 py-2 mb-1 sm:mb-0 text-base font-medium hover:no-underline no-underline"
              onClick={() => {
                localStorage.clear();
                navigator("/");
              }}
            >
              Logout
            </a>
            <div
              className="relative ml-0 lg:ml-3"
              onClick={() => {
                navigator("/jobseekerprofile");
              }}
            >
              <div className="ms-2">
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mx-auto"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <ProfileIcon />
                </button>
                <p className="text-gray-300">{name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default JobseekerNavbar;
