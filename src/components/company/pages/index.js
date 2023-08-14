import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Stack, Container, Box, Tabs, Tab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

// Functions
import { getRecruiterJobs } from "../api/company/index.js";

const JobsNav = ({ employer }) => {
  // const [employer_id, setEmployerId] = useState(employer.id);
  // console.log (employer.id)
  let employer_id = 1;

  const [selectedTab, setSelectedTab] = React.useState("company-jobs");
  const [jobsTotal, setJobsTotal] = useState("");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const pathnameArray = location.pathname.split("/");

  useEffect(() => {
    if (pathnameArray[3] === undefined) {
      setSelectedTab("company-jobs");
    } else {
      setSelectedTab(pathnameArray[3]);
    }
  }, [pathnameArray]);

  //  to check if the search job is function i need to change line 36 everytime

  const fetchJobsTotal = async () => {
    let companyJobs = await getRecruiterJobs(employer_id);

    setJobsTotal(companyJobs.data?.length);
  };

  useEffect(() => {
    fetchJobsTotal();
  }, []);

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          mt: 3,
          "& .MuiTab-root": {
            textTransform: "none",
          },
        }}
      >
        <Box>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            TabIndicatorProps={{ hidden: true }}
            sx={{
              "	&.MuiTabs-root": {},
              "& button": {
                marginRight: 0,
                color: "primary.main",
                backgroundColor: "primary.lightest_tint",
                fontSize: "1rem",
              },
              "& button.Mui-selected": {
                color: "white",
                backgroundColor: "#0D2644",
              },
            }}
          >
            <Tab
              value="company-jobs"
              icon={<PeopleAltOutlinedIcon fontSize="small" />}
              iconPosition="start"
              onClick={() => navigate("/company/jobs")}
              label={` Posted Jobs (${jobsTotal})`}
              sx={{ borderTopLeftRadius: 10 }}
            />{" "}
            <Tab
              icon={<AddIcon fontSize="small" />}
              iconPosition="start"
              value="new-job"
              onClick={() => {
                navigate("/company/add-job");
              }}
              label="Post Job Opening"
              sx={{ borderTopRightRadius: 10 }}
            />
          </Tabs>
        </Box>
      </Box>
      <Stack sx={{ bgcolor: "background.paper" }}>
        <Outlet />
      </Stack>
    </Container>
  );
};

export default JobsNav;
