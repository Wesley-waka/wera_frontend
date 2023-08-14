import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Typography,
  LinearProgress,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import Chip from "@mui/material/Chip";
import { red, green } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CustomDataGrid from "./CustomDataGrid.js";
import JobViewerDialog from "./JobViewerDialog.js";
import JobDetailsDialog from "./JobDetailsDialog.js";

import { getRecruiterJobs } from "./api/company/index.js";

import { selectCurrentRecruiter } from "../../features/recruiters/recruiterSlice.js";
import { setCurrentJob } from "../../features/jobs/jobSlice.js";

// function getChipProps(params) {
//     const deadline = new Date(params.value);
//     const now = new Date();
//     console.log(params)
//     if (now <= deadline) {
//         return {
//             label: "ACTIVE",
//             style: {
//                 width: "200px",
//                 color: green[600],
//                 borderColor: green[100],
//                 backgroundColor: green[100],
//                 borderRadius: 5,
//             },
//         };
//     } else {
//         return {
//             label: "ELAPSED",
//             style: {
//                 width: "200px",
//                 color: red[600],
//                 borderColor: red[100],
//                 backgroundColor: red[100],
//                 borderRadius: 5,
//             },
//         };
//     }
// }

const RecruiterJobsTable = ({ employer }) => {
  // const [employer_id, setEmployerId] = useState(employer.id);
  // console.log (employer.id)
  let employer_id = 1;
  const [id, setId] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rowParams, setRowParams] = useState({});
  const [openJobDetailsDialog, setOpenJobDetailsDialog] = useState(false);
  const [openJobViewerDialog, setOpenJobViewerDialog] = useState(false);

  const [openDeleteJobModal, setOpenDeleteJobModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const pathnameArr = location.pathname.split("/");

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };
  const closeJobDetailsDialog = () => {
    setOpenJobDetailsDialog(false);
  };
  const closeJobViewerDialog = () => {
    setOpenJobViewerDialog(false);
  };

  const handleJobActionsClick = (params) => (event) => {
    setRowParams(params.row);
    console.log(rowParams.status);
    setAnchorElNav(event.currentTarget);
  };
  useEffect(() => {
    const employerId = localStorage.getItem("employerId");
    setId(employerId);
  }, []);

  const handleDeleteJob = (prop) => {
    console.log(prop);
    handleCloseMenu();
    setOpenDeleteJobModal(true);
  };

  const handleEditClick = (prop) => {
    console.log(`${prop}`, rowParams);

    if (prop === "edit") {
      dispatch(setCurrentJob({ currentJob: rowParams }));
      setOpenJobDetailsDialog(true);
    } else {
      dispatch(setCurrentJob({ currentJob: rowParams }));
    }
    handleCloseMenu();
  };

  const handleViewClick = (prop) => {
    console.log(`${prop} click params`, rowParams);
    dispatch(setCurrentJob({ currentJob: rowParams }));
    setOpenJobViewerDialog(true);
    handleCloseMenu();
    // navigate(prop);
  };

  // const fetchCompanyJobs = () => {
  //     setLoading(true);

  //     getRecruiterJobs(employer_id).then((res) => {
  //         console.log(res)
  //         setJobsData(res.data);
  //         setLoading(false);
  //     });
  // };
  // useEffect(() => {
  //    setLoading(true);
  //     fetch(`https://rails-d0vf.onrender.com/employers/${employer_id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setJobsData(data.opportunities);
  //         setLoading(false);
  //       });

  // }, []);

  useEffect(() => {
    setLoading(true);
    if (id !== null) {
      fetch(`https://rails-d0vf.onrender.com/employers/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setJobsData(data.opportunities);
          setLoading(false);
        });
    }
  }, [id]);

  // useEffect(() => {
  //     fetchCompanyJobs();
  // }, []);
  const JobActions = () => {
    return (
      <>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={() => handleViewClick("view")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <VisibilityOutlinedIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              View
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleEditClick("edit")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <EditIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Edit
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleDeleteJob("Deactivate")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <DeleteOutlineIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Delete
            </Box>
          </MenuItem>
        </Menu>{" "}
      </>
    );
  };

  const columns = [
    {
      field: "title",
      headerName: "Job Title",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Avatar sx={{ mr: 2 }} src={params.value} alt={params.value} />
            {params.value}
          </>
        );
      },
    },
    {
      field: "job_type",
      headerName: "Type",
      width: 150,
    },
    {
      field: "estimated_salary",
      headerName: "Salary Range",
      width: 200,
    },
    // {
    //     field: "application_deadline",
    //     headerName: "Status",
    //     width: 200,
    //     renderCell: (params) => {
    //         return (
    //             <Chip variant="outlined" size="medium" {...getChipProps(params)} />
    //         );
    //     },
    // },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <IconButton onClick={handleJobActionsClick(params)}>
              <MoreVertIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <>
      <section className=" py-1 bg-blueGray-50">
        <div className="w-full lg:w-10/12 px-4 mx-auto mt-6 text-left">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 p-5">
            <JobViewerDialog
              openJobViewerDialog={openJobViewerDialog}
              closeJobViewerDialog={closeJobViewerDialog}
            />
            {/* <JobDetailsDialog
                openJobDetailsDialog={openJobDetailsDialog}
                closeJobDetailsDialog={closeJobDetailsDialog}
            /> */}
            {/* <DeleteJob
                    openDeleteJobModal={openDeleteJobModal}
                    closeDeactivateModal={closeDeactivateModal}
                    school_code={rowParams.code}
                    deactivationStatus={deactivationStatus}
                    fetchSchools={fetchSchools}
                /> */}
            <Typography variant="h6" sx={{ ml: 2 }}>
              Find all your posted jobs
            </Typography>
            <Box
              sx={{
                mt: 5,
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "primary.lightest_gray",
                  fontSize: 16,
                },
              }}
            >
              <JobActions />
              {loading && <LinearProgress />}
              {!loading && <CustomDataGrid rows={jobsData} columns={columns} />}
            </Box>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecruiterJobsTable;
