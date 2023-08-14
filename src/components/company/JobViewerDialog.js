import React from "react";
import {
    Box,
    Dialog,
    IconButton,
    Typography,
    Grid,
    TextField,
    OutlinedInput,
} from "@mui/material";
import JobDetails from "./jobdetails"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";


const JobViewerDialog = ({
    openJobViewerDialog,
    closeJobViewerDialog,
}) => {

    const handleClose = async () => {
        closeJobViewerDialog();
      };
    
    return (
        <Dialog
            maxWidth="xl"
            fullWidth
            open={openJobViewerDialog}
            onClose={handleClose}
        >
            <Box
                sx={{
                    p: 4,
                    height: "80%",
                }}
            >
                <Box sx={{ position: "absolute", top: 5, right: 5 }}>
                    {" "}
                    <IconButton onClick={handleClose}>
                        <CloseOutlinedIcon />
                    </IconButton>
                </Box>

                <Grid xs={12} md={6}>
                    <Box><JobDetails /></Box>
                </Grid>
            </Box>
        </Dialog>
    )
}

export default JobViewerDialog;