import React from "react";
import Location from "./Location";
import Salary from "./Salary";
import JobPostingData from "./JobPostingData";
import WorkExperience from "./WorkExperience";
import EmploymentType from "./EmploymentType";
import { Box, Typography } from "@mui/material";

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <Box sx={{ px: 4, py: 2, bgcolor: "#FFF", borderRadius: 1, boxShadow: 1 }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Filters
      </Typography>
      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick={handleClick} />
      <JobPostingData handleChange={handleChange} />
      <WorkExperience handleChange={handleChange} />
      <EmploymentType handleChange={handleChange} />
    </Box>
  );
};

export default Sidebar;
