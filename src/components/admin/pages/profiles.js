import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowRightCircleIcon } from "../../icons";

const Profiles = () => {
  const [data, setData] = useState([]);
  // gets the jobseeker id from params
  let { id } = useParams();
  // If id is present, fetch the jobseeker details and use the data
  useEffect(() => {
    fetch(`https://rails-d0vf.onrender.com/profiles/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setData(data);
        });
      }
    });
  }, []);
  return (
    <>
      {data.id !== undefined ? (
        <div className="text-gray-950 align-items-center p-5 admin-background">
          <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
            <div className="w-full lg:w-5/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-90 mx-6 lg:mx-0">
              <div className="p-4 md:p-12 text-center ">
                <div className="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center admin-jobseeker-picture"></div>
                <h1 className="text-3xl font-bold pt-8 lg:pt-0 uppercase">
                  {data.full_name}
                </h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                <p className="pt-4 text-base font-bold flex items-center justify-center ">
                  <ArrowRightCircleIcon />
                  Email - {data.email_address}
                </p>
                <p className="pt-4 text-base font-bold flex items-center justify-center ">
                  <ArrowRightCircleIcon />
                  Date of birth - {data.date_of_birth.split("T")[0]}
                </p>
                <p className="pt-4 text-base font-bold flex items-center justify-center ">
                  <ArrowRightCircleIcon />
                  Phone Number - {data.phone_number}
                </p>
                <p className="pt-4 text-base font-bold flex items-center justify-center  text-center ">
                  <ArrowRightCircleIcon />
                  Industry -
                  {data.tags.map((tag) => (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{tag.name}
                    </span>
                  ))}
                </p>
                <p className="pt-4 text-base font-bold flex items-center justify-center  text-center">
                  <ArrowRightCircleIcon />
                  Education
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-2">
                  {data.educations.map((edu) => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-3 mx-auto bg-cyan-200 bg-opacity-40">
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          {edu.institution}
                        </div>
                        <p className="text-gray-700 text-base">
                          {edu.year_of_admission} - {edu.year_of_completion}
                        </p>
                        <p className="text-gray-700 text-base">
                          {edu.qualification}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="pt-4 text-base font-bold flex items-center justify-center  text-center">
                  <ArrowRightCircleIcon />
                  Experiences
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-2">
                  {data.experiences.map((exp) => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-3 mx-auto bg-cyan-200 bg-opacity-40">
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          {exp.company}
                        </div>
                        <p className="text-gray-700 text-base">{exp.year}</p>
                        <p className="text-gray-700 text-base">
                          {exp.job_description}
                        </p>
                      </div>
                    </div>
                  ))}
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

export default Profiles;
