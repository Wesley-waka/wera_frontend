import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// guest views
import Guest from "../components/guest";
import GuestLanding from "./guest/pages";
import GuestSignIn from "./guest/pages/sign-in";
import GuestSignUp from "./guest/pages/sign-up";

// jobseeker views
import JobSeeker from "../components/jobseeker";
import JobSeekerLanding from "./jobseeker/pages";
import JobsApplied from "./jobseeker/pages/jobsapplied";
import JobseekerProfile from "./jobseeker/pages/jobseekerprofile";
import JobCard from "./jobseeker/pages/jobcard";

// Admin views
import Admin from "../components/admin";
import Dashboard from "./admin/pages";
import Application from "./admin/pages/application";
import Employers from "./admin/pages/employers";
import Opprotunity from "./admin/pages/opprotunity";
import Profiles from "./admin/pages/profiles";

// employer views
import AddJob from "./company/pages/addjob";
import JobListing from "./company/pages/joblisting";
import JobsNav from "./company/pages";
import CompanyNav from "../components/company";
import RecruiterJobsTable from "./company/recruitersjobtable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Guest />,
    children: [
      {
        path: "/",
        element: <GuestLanding />,
      },
      {
        path: "/sign-in",
        element: <GuestSignIn />,
      },
      {
        path: "/sign-up",
        element: <GuestSignUp />,
      },
    ],
  },
  {
    path: "/",
    element: <JobSeeker />,
    children: [
      {
        path: "/jobseeker",
        element: <JobSeekerLanding />,
      },
      {
        path: "/jobseekerprofile",
        element: <JobseekerProfile />,
      },
      {
        path: "/jobsapplied",
        element: <JobsApplied />,
      },
      {
        path: "/jobs/:id",
        element: <JobCard />,
      },
    ],
  },
  {
    path: "/",
    element: <Admin />,
    children: [
      {
        path: "/admin-dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profiles/:id",
        element: <Profiles />,
      },
      {
        path: "/employers/:id",
        element: <Employers />,
      },
      {
        path: "/applications/:id",
        element: <Application />,
      },
      {
        path: "/opportunities/:id",
        element: <Opprotunity />,
      },
    ],
  },
  {
    path: "/",
    element: <CompanyNav />,
    children: [
      {
        path: "/company",
        element: <JobsNav />,
      },
      {
        path: "/company/add-job",
        element: <AddJob />,
      },
      {
        path: "/company/:id/jobs",
        element: <JobListing />,
      },
      {
        path: "/company/jobs",
        element: <RecruiterJobsTable />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
