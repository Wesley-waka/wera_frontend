import React, { useEffect, useState } from "react";
import "../Admin.css";
import { useNavigate } from "react-router-dom";
import Tabledata from "../tabledata";
import {
  PersonIcon,
  BuildingIcon,
  BriefcaseIcon,
  FilesIcon,
} from "../../icons";

const Dashboard = () => {
  const navigator = useNavigate();
  const [summary, setSummary] = useState([]);
  const [slug, setSlug] = useState("");
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [keys, setKeys] = useState([]);
  // Gives a summary sum of all the users, jobs and applications in the program
  useEffect(() => {
    fetch(`https://rails-d0vf.onrender.com/all_summaries`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setSummary(data);
        });
      }
    });
  }, []);
  //Fetch data depending on which item is selected
  useEffect(() => {
    fetch(`https://rails-d0vf.onrender.com/${slug}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setData(data);
        });
      }
    });
  }, [slug]);
  // Sets the specific attributes required for the table
  useEffect(() => {
    if (data.length > 0) {
      if (slug === "profiles") {
        let selected = data.map((object) => {
          return (({
            id,
            full_name,
            phone_number,
            email_address,
            created_at,
            disabled,
          }) => ({
            id,
            full_name,
            phone_number,
            email_address,
            created_at,
            disabled,
          }))(object);
        });
        setFiltered(selected);
      } else if (slug === "opportunities") {
        let selected = data.map((object) => {
          return (({ id, title, job_type, estimated_salary, created_at }) => ({
            id,
            title,
            job_type,
            estimated_salary,
            created_at,
          }))(object);
        });
        setFiltered(selected);
      } else if (slug === "employers") {
        let selected = data.map((object) => {
          return (({
            id,
            company_name,
            company_location,
            email_address,
            created_at,
            disabled,
          }) => ({
            id,
            company_name,
            company_location,
            email_address,
            created_at,
            disabled,
          }))(object);
        });
        setFiltered(selected);
      } else {
        let selected = data.map((object) => {
          return (({ id, applicant, title, company_name, created_at }) => ({
            id,
            applicant,
            title,
            company_name,
            created_at,
          }))(object);
        });
        setFiltered(selected);
      }
    }
  }, [data]);
  // For the attributes selected above, the keys will be the column headers in our table
  useEffect(() => {
    if (filtered[0] !== undefined) {
      setKeys(Object.keys(filtered[0]));
    }
  }, [filtered]);

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-start-1 col-end-2">
          <div>
            <div className="fixed top-0 bottom-0 md:w-[300px] w-[100px] dashboard-main">
              <div className="text-gray-100 text-xl">
                <div className=" py-2.5 md:p-2.5 mt-1 flex items-center">
                  <img
                    src={"/images/Logo5.png"}
                    alt="wera"
                    href="/landingpage"
                    className="md:cursor-pointer h-10 md:h-20"
                  />
                </div>
                <div className="my-2 bg-gray-600 h-[1px]"></div>
              </div>

              <div
                className=" py-2.5 md:p-2.5 mt-3 flex items-center rounded-md sm:px-0  md:px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("");
                }}
              >
                <i className="hidden md:inline bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-2 md:ml-4 text-gray-200 font-bold">
                  Dashboard
                </span>
              </div>
              <div className="my-4 bg-gray-600 h-[1px]"></div>
              <div className=" py-2.5 md:p-2.5 mt-3 flex items-center rounded-md sm:px-0  md:px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white">
                <i className=" hidden md:inline bi bi-bookmark-fill"></i>
                <span
                  className="text-[15px] ml-2 md:ml-4 text-gray-200 font-bold"
                  onClick={() => {
                    setSlug("profiles");
                  }}
                >
                  Jobseekers
                </span>
              </div>
              <div
                className=" py-2.5 md:p-2.5 mt-3 flex items-center rounded-md sm:px-0  md:px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("employers");
                }}
              >
                <i className="hidden md:inline bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-2 md:ml-4 text-gray-200 font-bold">
                  Employers
                </span>
              </div>
              <div
                className=" py-2.5 md:p-2.5 mt-3 flex items-center rounded-md sm:px-0  md:px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("opportunities");
                }}
              >
                <i className=" hidden md:inline bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-2 md:ml-4 text-gray-200 font-bold">
                  Jobs
                </span>
              </div>
              <div
                className=" py-2.5 md:p-2.5 mt-3 flex items-center rounded-md sm:px-0  md:px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("applications");
                }}
              >
                <i className=" hidden md:inline bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-2 md:ml-4 text-gray-200 font-bold">
                  Applications
                </span>
              </div>
              <div className="my-4 bg-gray-600 h-[1px]"></div>

              <div
                className=" py-2.5 md:p-2.5 mt-3 flex items-center rounded-md sm:px-0  md:px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  navigator("/");
                }}
              >
                <i className="hidden md:inline bi bi-box-arrow-in-right"></i>
                <span className="text-[15px] ml-2 md:ml-4 text-gray-200 font-bold">
                  Logout
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-end-7 col-span-5  md:px-5 admin-background min-h-screen">
          {slug === "" ? (
            <div>
              <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 p-20 mt-20">
                  <div className="relative bg-gray-400 py-6 px-6 rounded-2xl w-32 md:w-48 my-4 shadow-xl ">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <PersonIcon />
                    </div>
                    <div className="mt-8">
                      <p className="text-4xl text-center text-white-400">
                        {summary.profiles}
                      </p>
                      <p className="text-xl font-semibold my-2 text-blue-950 text-center text-center">
                        Job Seekers
                      </p>
                    </div>
                  </div>
                  <div className="relative bg-gray-400 py-6 px-6 rounded-2xl w-32 md:w-48 my-4 shadow-xl">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <BuildingIcon />
                    </div>
                    <div className="mt-8">
                      <p className="text-4xl text-center text-white-400">
                        {summary.employers}
                      </p>

                      <p className="text-xl font-semibold my-2 text-blue-950 text-center">
                        Employers
                      </p>
                    </div>
                  </div>
                  <div className="relative bg-gray-400 py-6 px-6 rounded-2xl w-32 md:w-48 my-4 shadow-xl">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <BriefcaseIcon />
                    </div>
                    <div className="mt-8">
                      <p className="text-4xl text-center text-white-400">
                        {summary.opportunities}
                      </p>
                      <p className="text-xl font-semibold my-2 text-blue-950 text-center">
                        Jobs
                      </p>
                    </div>
                  </div>
                  <div className="relative bg-gray-400 py-6 px-6 rounded-2xl w-32 md:w-48 my-4 shadow-xl">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <FilesIcon />
                    </div>
                    <div className="mt-8">
                      <p className="text-4xl text-center text-white-400">
                        {summary.applications}
                      </p>
                      <p className="text-xl font-semibold my-2 text-blue-950 text-center">
                        Applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="antialiased font-sans text-white md:px-5 md:ms-20 mt-4">
              <div className="container px-4 sm:px-8">
                <div className="py-8">
                  <div>
                    <h2 className="text-2xl text-gray-200 font-semibold leading-tight text-center uppercase">
                      {slug == "profiles"
                        ? "Job Seekers"
                        : slug == "opportunities"
                        ? "Jobs"
                        : slug}
                    </h2>
                  </div>
                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                      <table className="min-w-full leading-normal">
                        <thead>
                          <tr>
                            {keys.map((key) => (
                              <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-sm font-semibold text-gray-950 capitalize tracking-wider">
                                {keys[0] == key
                                  ? null
                                  : keys[5] == key
                                  ? null
                                  : key.split("_").length > 1
                                  ? key.split("_").join(" ")
                                  : key}
                              </th>
                            ))}
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-950 uppercase tracking-wider">
                              View
                            </th>
                            {slug == "employers" || slug == "profiles" ? (
                              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-950 uppercase tracking-wider">
                                Action
                              </th>
                            ) : null}
                          </tr>
                        </thead>
                        <tbody>
                          {filtered.map((val) => {
                            return <Tabledata val={val} slug={slug} />;
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
