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
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";


const JobDetailsDialog = ({
    openJobDetailsDialog,
    closeJobDetailsDialog,
}) => {

    const handleClose = async () => {
        closeJobDetailsDialog();
      };
    
    return (
        <Dialog
            maxWidth="xl"
            fullWidth
            open={openJobDetailsDialog}
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
                <Box>
                    <Typography sx={{ fontWeight: "500", m: 4 }}>
                        Edit Job details
                    </Typography>
                </Box>
                <Grid xs={12} md={6}>    
                </Grid>
            </Box>
        </Dialog>
    )
}

export default JobDetailsDialog;