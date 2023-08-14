import React, { useState, useEffect } from "react";
import JobseekerNavbar from "../jobseekernavbar";
import { useParams, useNavigate } from "react-router";
// Page displaying details of a specific job
const JobCard = () => {
  const navigator = useNavigate();
  const [profileData, setProfileData] = useState({});
  const [hasApplied, setHasApplied] = useState(false);
  const [job, setJob] = useState(null);
  const [profileId, setProfileId] = useState(null);
  const [showApply, setShowApply] = React.useState(false);
  // The first character of the job title renders with random colors
  const randColors = ["#89DAFF", "#373D20", "#70B77E", "#561F37", "#AB8476"];
  // gets the job id from params
  let { id } = useParams();
  // Get jobseeker's id stored in the local storage
  useEffect(() => {
    const jsId = localStorage.getItem("jobseekerId");
    setProfileId(jsId);
  }, []);
  // If id is present, fetch the jobseeker details and use the data, mainly the id, for application
  useEffect(() => {
    if (profileId !== null) {
      fetch(`https://rails-d0vf.onrender.com/profiles/${profileId}`).then(
        (res) => {
          if (res.ok) {
            res.json().then((data) => {
              setProfileData(data);
            });
          }
        }
      );
    }
  }, [profileId]);
  // Fetch a particular job details
  useEffect(() => {
    fetch(`https://rails-d0vf.onrender.com/opportunities/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setJob(data);
        });
      }
    });
  }, []);
  // job application functionality
  function handleApply() {
    // create an application using job id and the jobseeker's id
    const applicationData = {
      profile_id: profileId,
      opportunity_id: parseInt(id),
    };
    // post request to the server to handle the application
    fetch("https://rails-d0vf.onrender.com/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("job successfully applied");
      })
      .catch((error) => console.error(error));
  }
  // If job has been applied, the apply button should not be displayed
  useEffect(() => {
    if (profileData["id"] !== undefined) {
      let applications = profileData.applications;
      const answer = applications.filter((element) => {
        return element.opportunity.id == job.id;
      });

      if (answer.length == 0) {
        setHasApplied(true);
      }
    }
  }, [profileData]);

  return (
    <>
      <div className="relative">
        {job ? (
          <>
            <header className="hidden md:block">
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat admin-background"
                style={{
                  minHeight: "20vh",
                }}
              ></div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-3">
              <div className="relative">
                {job.employer.company_logo ? (
                  <div className="logo-jobcard">
                    <img
                      src={job.employer.company_logo}
                      alt="company_logo"
                      className="profile-picture m-4"
                    />
                  </div>
                ) : (
                  <h1
                    className="text-light m-10 text-center hidden md:block jobcard-logo"
                    style={{
                      backgroundColor:
                        randColors[
                          Math.floor(Math.random() * randColors.length)
                        ],
                    }}
                  >
                    {job.employer.company_name.charAt(0)}
                  </h1>
                )}
                <div className="w-3/4 mx-auto my-5 md:my-20">
                  <div className="max-w-sm rounded overflow-hidden shadow-lg text-white relative theme-blue">
                    <div className="px-6 py-4 ">
                      <div className="">
                        <h4 className="uppercase rounded-full text-center">
                          {job.employer.company_name}
                        </h4>

                        <div className="my-4 bg-gray-600 h-[1px]"></div>
                        <p className="text-left  mb-4">
                          Date Posted: {job.created_at.split("T")[0]}
                        </p>
                        <p className="text-left  mb-4">
                          Location: {job.employer.company_location}
                        </p>
                        <p className="text-left  mb-4 ">
                          Industry:{" "}
                          {job.tags.map((tag) => (
                            <span className="ms-2">{tag.name}</span>
                          ))}
                        </p>
                        <p className="text-left  mb-4">
                          Estimated salary: {job.estimated_salary}
                        </p>
                        <p className="text-left  mb-4">
                          Application Deadline: 30/12/2023
                        </p>
                        {/* Apply button will not be displayed if job has been applied */}
                        {!hasApplied ? null : (
                          <div className="flex align-items-center justify-content-center">
                            <button
                              className="bg-white text-gray-950 active:bg-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowApply(true)}
                            >
                              APPLY
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 order-first md:order-last">
                <div>
                  <div className="bg-gray-100">
                    <div className="">
                      <div
                        className="md:my-5 text-left p-4"
                        style={{ width: "100%" }}
                      >
                        <h4 className="font-semibold tracking-wide text-gray-900 uppercase rounded-full mb-4">
                          {job.title}
                        </h4>
                        <h5 className="inline-block font-semibold tracking-wide text-gray-900 uppercase rounded-full">
                          About the company
                        </h5>
                        <p className="mb-4">
                          {job.employer.company_description}
                        </p>
                        <h5 className="font-semibold tracking-wide text-gray-900 uppercase rounded-full mb-4">
                          Job Description
                        </h5>
                        <p className="text-base mb-4">{job.description}</p>

                        <h5 className="font-semibold tracking-wide text-gray-900 uppercase rounded-full mb-4">
                          Responsibilities
                        </h5>
                        <ul className="mb-4">
                          <li className="mt-2">
                            <i className="bi bi-arrow-up-right-circle-fill me-3 text-sm "></i>
                            {job.responsibilities}
                          </li>
                        </ul>
                        <h5 className="font-semibold tracking-wide text-gray-900 uppercase rounded-full mb-4">
                          Minimum Qualifications
                        </h5>
                        <ul>
                          <li className="mt-2">
                            <i className="bi bi-arrow-up-right-circle-fill me-3"></i>
                            {job.qualifications}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          "Please wait"
        )}
      </div>
      {/* modal that appears after clicking the apply button to confirm application */}
      {showApply ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500  text-gray-950 text-lg leading-relaxed">
                    Your resume and profile will be sent to the recruiter.
                    Confirm you want to apply
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowApply(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 theme-blue"
                    type="button"
                    onClick={() => {
                      handleApply();
                      setShowApply(false);
                      navigator("/jobsapplied");
                    }}
                  >
                    Yes, apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default JobCard;
