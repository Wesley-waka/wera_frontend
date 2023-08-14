import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        backgroundSize: "cover",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.7),rgba(0,0,0.95,1), #0D2644), url('images/landing-background-image.jpeg')",
      }}
      className="py-16"
    >
      <div className=" text-white pb-10">
        <div className="container ">
          <div className="mb-2 flex align-items-center">
            <h1 className="text-left text-blue-200 text-5xl md:text-8xl">/Wera</h1>

            <span
              style={{ width: 14, height: 14 }}
              className="mx-3 bg-blue-900 rounded-circle"
            ></span>

            <h2 className="text-left">(we-ra)</h2>
          </div>

          <h1 className="text-left text-gray-50 mb-4">
            a.k.a /mboka/ is a Kenyan slang meaning work . Commonly associated
            with the youth and some native languages
          </h1>

          <div className="flex gap-4">
            <Link
              to={"/sign-up?user-type=jobseeker"}
              className="text-xl bg-blue-500 hover:bg-blue-900 text-white hover:text-blue-900 rounded shadow hover:shadow-lg py-3 px-8 outline-none border-0 text-decoration-none"
            >
              FIND A JOB
            </Link>

            <Link
              to={"/sign-up?user-type=employer"}
              className="text-xl bg-blue-500 hover:bg-blue-900 text-white hover:text-blue-900 rounded shadow hover:shadow-lg py-3 px-8 outline-none border-0 text-decoration-none"
            >
              HIRE THE BEST
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
