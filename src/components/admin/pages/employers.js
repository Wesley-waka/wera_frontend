import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowRightCircleIcon } from "../../icons";

const Employers = () => {
  const [data, setData] = useState({});
  // gets the employer id from params
  let { id } = useParams();
  // If id is present, fetch the employers details and use the data
  useEffect(() => {
    fetch(`https://rails-d0vf.onrender.com/employers/${id}`).then((res) => {
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
        <div className="min-h-screen flex text-gray-950 align-items-center admin-background">
          <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
            <div className="w-full lg:w-5/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-90 mx-6 lg:mx-0">
              <div className="p-4 md:p-12 text-center lg:text-left">
                <div className="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center admin-employer-picture"></div>
                <h1 className="text-3xl font-bold pt-8 lg:pt-0 uppercase">
                  {data.company_name}
                </h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                <p className="pt-4 text-base font-bold flex items-center justify-center ">
                  <ArrowRightCircleIcon />
                  Email - {data.email_address}
                </p>
                <p className="pt-4 text-base font-bold flex items-center justify-center ">
                  <ArrowRightCircleIcon />
                  Location - {data.company_location}
                </p>
                <p className="pt-4 text-base font-bold flex items-center justify-center ">
                  <ArrowRightCircleIcon />
                  Jobs Posted - {data.opportunities.length}
                </p>
                <p className="pt-8 text-base font-bold flex items-center justify-center  text-center">
                  <ArrowRightCircleIcon />
                  About
                </p>
                <p className="pt-2 ps-10 text-base text-left">
                  {data.company_description}
                </p>
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

export default Employers;
