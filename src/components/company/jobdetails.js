import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
    Chip,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Avatar,
    Typography,
    IconButton
} from '@mui/material';


import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// import ShareIcon from '@mui/icons-material/Share';





import { useSelector } from 'react-redux';
import { selectCurrentJob } from '../../features/jobs/jobSlice';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function JobDetails() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const currentJob = useSelector(selectCurrentJob)

    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              MS
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={currentJob.title}
          subheader={currentJob.application_deadline}
        />
        <CardMedia
          component="img"
          height="10"
          image="https://img.freepik.com/free-vector/job-vacancy-background-with-chair_23-2147868094.jpg?size=626&ext=jpg"
          alt="Moringa Logo"
          style={{ height: "200px" }}
        />
        <CardContent>
          <Typography paragraph>
            Qualifications:{" "}
            <Chip
              label={currentJob.qualifications}
              color="success"
              variant="outlined"
            />
          </Typography>
          <Typography paragraph>
            Responsibilities:{" "}
            <Chip
              label={currentJob.responsibilities}
              color="success"
              variant="outlined"
            />
          </Typography>
          <Typography paragraph>
            Salary Range:{" "}
            <Chip
              label={currentJob.estimated_salary}
              color="success"
              variant="outlined"
            />
          </Typography>
          <Typography paragraph>
            Job Type:{" "}
            <Chip
              label={currentJob.job_type}
              color="success"
              variant="outlined"
            />
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>Description</Typography>
            <Typography variant="body2" color="text.secondary">
              {currentJob.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
}