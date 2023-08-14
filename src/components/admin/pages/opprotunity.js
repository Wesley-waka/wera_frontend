import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowRightCircleIcon } from "../../icons";

const Opprotunity = () => {
  const [data, setData] = useState([]);
  // gets the job id from params
  let { id } = useParams();
  // If id is present, fetch the job details and use the data
  useEffect(() => {
    fetch(`https://rails-d0vf.onrender.com/opportunities/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data);
          setData(data);
        });
      }
    });
  }, []);
  return (
    <>
      {data.id !== undefined ? (
        <div className="min-h-screen flex text-gray-950 align-items-center admin-background">
          <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 p-5 ">
            <div className="w-full lg:w-5/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-90 mx-6 lg:mx-0">
              <div className="p-4 md:p-12 text-center">
                <div className=" rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center admin-job-picture"></div>
                <h1 className="text-3xl font-bold pt-8 lg:pt-0 uppercase">
                  {data.title}
                </h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                <p className="pt-4 text-base font-bold flex items-center justify-center ">
                  <ArrowRightCircleIcon />
                  Job Type - {data.job_type}
                </p>
                <p className="pt-4 text-base font-bold flex items-center justify-center ">
                  <ArrowRightCircleIcon />
                  Application deadline -{" "}
                  {data.application_deadline.split("T")[0]}
                </p>
                <p className="pt-4 text-base font-bold flex items-center justify-center ">
                  <ArrowRightCircleIcon />
                  Estimated salary - {data.estimated_salary}
                </p>
                <p className="pt-4 text-base font-bold flex items-center justify-center  text-center ">
                  <ArrowRightCircleIcon />
                  Industry -{" "}
                  {data.tags.map((tag) => (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{tag.name}
                    </span>
                  ))}
                </p>
                <p className="pt-4 text-base font-bold flex items-center justify-center ">
                  <ArrowRightCircleIcon />
                  Description
                </p>
                <p>{data.description}</p>
                <p className="pt-4 text-base font-bold flex items-center justify-center ">
                  <ArrowRightCircleIcon />
                  Qualifications
                </p>
                <p>{data.qualifications}</p>
                <p className="pt-4 text-base font-bold flex items-center justify-center ">
                  <ArrowRightCircleIcon />
                  Responsibilities
                </p>
                <p>{data.responsibilities}</p>
                <p className="pt-8 text-base font-bold flex items-center justify-center  text-center">
                  <ArrowRightCircleIcon />
                  COMPANY
                </p>
                <div className="mt-3 max-w-sm rounded overflow-hidden shadow-lg mb-3 mx-auto bg-cyan-200 bg-opacity-40">
                  <div className="px-6 py-4">
                    <h1 className="text-3xl font-bold pt-8 lg:pt-0 uppercase">
                      {data.employer.company_name}
                    </h1>
                    <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                    <p className="pt-4 text-base font-bold flex items-center justify-center ">
                      <ArrowRightCircleIcon />
                      Email - {data.employer.email_address}
                    </p>
                    <p className="pt-4 text-base font-bold flex items-center justify-center ">
                      <ArrowRightCircleIcon />
                      Location - {data.employer.company_location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </>
  );
};

export default Opprotunity;
