import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowRightCircleIcon } from "../../icons";

const Application = () => {
  const [data, setData] = useState([]);
  // gets the application id from params
  let { id } = useParams();
  // If id is present, fetch the application details and use the data
  useEffect(() => {
    fetch(`https://rails-d0vf.onrender.com/applications/${id}`).then((res) => {
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
        <div className=" text-gray-950 align-items-center admin-background">
          <div className="max-w-4xl h-auto lg:h-screen mx-auto my-32 lg:my-0 py-5 ">
            <div className="w-full lg:w-5/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-90 mx-6 lg:mx-0">
              <div className="p-4 text-center">
                <div className="rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center admin-application-picture"></div>
                <h1 className="text-3xl font-bold pt-8 lg:pt-0 uppercase">
                  {data.profile.full_name}
                </h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                <p className="pt-4 text-base font-bold flex items-center justify-center ">
                  <ArrowRightCircleIcon />
                  Email - {data.profile.email_address}
                </p>
                <p className="pt-4 text-base font-bold flex items-center justify-center ">
                  <ArrowRightCircleIcon />
                  Date of birth - {data.profile.date_of_birth.split("T")[0]}
                </p>
                <p className="pt-4 text-base font-bold flex items-center justify-center ">
                  <ArrowRightCircleIcon />
                  Phone Number - {data.profile.phone_number}
                </p>
                <p className="pt-4 text-base font-bold flex items-center justify-center  text-center ">
                  <ArrowRightCircleIcon />
                  Biography
                </p>
                <p>{data.profile.biography}</p>
                <div className="mt-3 rounded overflow-hidden shadow-lg mb-3 mx-auto bg-cyan-200 bg-opacity-40">
                  <div className="px-6 py-4">
                    <h1 className="text-3xl font-bold pt-8 lg:pt-0 uppercase">
                      {data.opportunity.title}
                    </h1>
                    <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                    <p className="pt-4 text-base font-bold flex items-center justify-center ">
                      <ArrowRightCircleIcon />
                      Job Type - {data.opportunity.job_type}
                    </p>
                    <p className="pt-4 text-base font-bold flex items-center justify-center ">
                      <ArrowRightCircleIcon />
                      Application deadline -{" "}
                      {data.opportunity.application_deadline.split("T")[0]}
                    </p>
                    <p className="pt-4 text-base font-bold flex items-center justify-center ">
                      <ArrowRightCircleIcon />
                      Estimated salary - {data.opportunity.estimated_salary}
                    </p>
                    <p className="pt-4 text-base font-bold flex items-center justify-center ">
                      <ArrowRightCircleIcon />
                      Description
                    </p>
                    <p>{data.opportunity.description}</p>
                    <p className="pt-4 text-base font-bold flex items-center justify-center ">
                      <ArrowRightCircleIcon />
                      Qualifications
                    </p>
                    <p>{data.opportunity.qualifications}</p>
                    <p className="pt-4 text-base font-bold flex items-center justify-center ">
                      <ArrowRightCircleIcon />
                      Responsibilities
                    </p>
                    <p>{data.opportunity.responsibilities}</p>
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

export default Application;
