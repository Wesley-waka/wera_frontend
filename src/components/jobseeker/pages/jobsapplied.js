import React, { useState, useEffect } from "react";
import JobAppliedCard from "../jobsappliedcard";
import JobseekerNavbar from "../jobseekernavbar";
import { SearchIcon, searchIcon } from "../../icons";

const JobsApplied = () => {
  const [id, setId] = useState(null);
  const [search, setSearch] = useState("");
  const [applications, setApplications] = useState([]);
  // Get jobseeker's id stored in the local storage
  useEffect(() => {
    const jsId = localStorage.getItem("jobseekerId");
    setId(jsId);
  }, []);
  // If id is present, fetch the jobseeker details and get the applications made
  useEffect(() => {
    if (id !== null) {
      fetch(`https://rails-d0vf.onrender.com/profiles/${id}`).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setApplications(data.applications);
          });
        }
      });
    }
  }, [id]);
  // Sets the input search term
  function handleSearch(event) {
    setSearch(event.target.value);
  }
  // If search=="", it displays all applications, else it displays applications related to the search term
  let found = applications.filter((application) => {
    // Search is only valid for a company name or job title
    let applicationName = application.title.toLocaleLowerCase();
    let applicationCompany = application.company_name.toLocaleLowerCase();
    if (search === "") {
      return true;
    } else if (
      applicationName.includes(search) ||
      applicationCompany.includes(search)
    ) {
      return application;
    }
  });

  return (
    <>
      <div>
        <div className="container" style={{ minHeight: "50vh" }}>
          <div className="my-3 px-10 w-full lg:w-1/2 mx-auto">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg- bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search by job title or company name"
                value={search}
                onChange={handleSearch}
              />

              <button
                className="relative z-[2] flex items-center rounded-r  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg theme-blue"
                type="button"
              >
                <SearchIcon />
              </button>
            </div>
          </div>
          <h5 className="py-3 text-center text-blue-950 text-lg">
            Your Application History
          </h5>
          <div className="container p-4">
            {/* Render jobs applied or message */}
            {applications.length > 0 ? (
              found.map((application) => (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                  <JobAppliedCard application={application} />
                </div>
              ))
            ) : (
              <p className="text-center ">You have not applied for any jobs</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsApplied;
