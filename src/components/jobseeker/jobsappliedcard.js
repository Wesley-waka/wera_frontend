import React from "react";
import { useNavigate } from "react-router-dom";
import { TickIcon } from "../icons";
// Card rendered in JobsApplied section with the applied job details
const JobAppliedCard = ({ application }) => {
  const navigator = useNavigate();
  // The first character of the job title renders with random colors
  const randColors = ["#89DAFF", "#373D20", "#70B77E", "#561F37", "#AB8476"];
 
  return (
    <div
      className="rounded p-3 cursor-pointer bg-gray-200 bg-opacity-90 text-blue-950 "
      style={{
        minHeight: "20vh",
      }}
      onClick={() => {
        navigator(`/jobs/${application.opportunity.id}`);
      }}
    >
      <div className="flex items-center justify-center  mx-auto">
        {application.company_logo ? (
          <img
            src={application.company_logo}
            alt=""
            className="profile-picture m-4"
          />
        ) : (
          <h1
            className="px-4 py-3 text-light text-4xl"
            style={{
              backgroundColor:
                randColors[Math.floor(Math.random() * randColors.length)],
              borderRadius: "10px",
            }}
          >
            {application.company_name.charAt(0)}
          </h1>
        )}
      </div>
      <div className="pe-3 py-2">
        <div className="flex-grow sm:text-left sm:mt-0">
          <h1 className="text-2xl title-font text-center font-bold">
            {application.title}
          </h1>
          <div className="mb-4 bg-gray-600 h-[1px]"></div>

          <div className="py-1 mb-2">
            <div className=" inline-block mr-2">
              <div className="flex  pr-2 h-full items-center">
                <TickIcon />
                <p className="title-font font-medium">
                  {application.company_name}
                </p>
              </div>
            </div>
            <div className="inline-block mr-2">
              <div className="flex  pr-2 h-full items-center">
                <TickIcon />
                <p className="title-font font-medium">
                  {application.created_at.split("T")[0]}
                </p>
              </div>
            </div>
            <div className=" inline-block mr-2">
              <div className="flex  pr-2 h-full items-center">
                <TickIcon />
                <p className="title-font font-medium">
                  {application.opportunity.job_type}
                </p>
              </div>
            </div>
            <div className=" inline-block mr-2">
              <div className="flex  pr-2 h-full items-center">
                <TickIcon />
                <p className="title-font font-medium">
                  {application.opportunity.estimated_salary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAppliedCard;

