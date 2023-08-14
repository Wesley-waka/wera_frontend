import React from "react";
import { useNavigate, useParams} from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-[#0D2644] shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-white capitalize dark:text-gray-300">
        <a href="#" className="text-white dark:text-gray-200 mx-1.5 sm:mx-6">
          <img
            src={"/images/Logo5.png"}
            alt="Wera"
            style={{
              maxWidth: "100%",
              height: "50px",
              width: "auto",
              marginLeft: "0.5rem",
            }}
          />
        </a>

        <a
          href="/jobseeker"
          className=" border-transparent text-white mx-1.5 sm:mx-6"
          style={{ textDecoration: "none" }}
        >
          Home
        </a>

        <button className="bg-[#143C66] hover:bg-[#87C0F2] text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
