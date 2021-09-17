import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography as Text,
  MenuItem,
  Badge,
  Grid,
  Button,
  Avatar,Box
} from "@material-ui/core";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles, createStyles } from "@material-ui/styles";

function ExperienceComponentt({ name, title, img, date, descr, left }) {
  const classes = experienceComponentStyles();
  const experience = require('./experience.json')
  const currentJob = experience.data[experience.data.length - 1]
  return (
    <VerticalTimeline>
{
    experience.data.slice(1).map((job) => 
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={job.jobDates}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 style={{color: '#cc0033'}} className="vertical-timeline-element-title">{job.jobTitle}</h3>
    <h4 style={{color: '#cc0033'}} className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
    {job.jobDescr}
    </p>
  </VerticalTimelineElement>  
    
    
    
    )
}
<VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={currentJob.jobDates}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">{currentJob.jobTitle}</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        {currentJob.jobDescr}
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff', width: 90, height: 90 }}
      icon={<h1>Be Part</h1>}
    />
  </VerticalTimeline>
  );
}

export default ExperienceComponentt;

const experienceComponentStyles = makeStyles((theme) =>
  createStyles({
    body: {
      marginTop: 100,
      marginBottom: 100,
      borderColor: '#cc0033',
      borderWidth: '3px',
    },
 
    avatar: {
      height: "13vw",
      width: "13vw",
      border: '7px solid lightgray',
      transitionDuration: '0.5s'
    },
    textBodyLeft: {
      height: "9vw",
      width: "35vw",
      marginRight: 24,
      textAlign: 'right'
    },
    textBodyRight: {
      height: "9vw",
      width: "35vw",
      marginLeft: 24,
      textAlign: 'left',
    },
    jobName:{
      fontSize: 20,
      fontWeight: '600',
      color: theme.palette.experience.jobName
    },
    jobTitle:{
      fontSize: 18,
      fontWeight: '500',
      color: theme.palette.experience.jobTitle

    },
    jobDate:{
      fontSize: 16,
      fontWeight: '500',
      color: theme.palette.experience.jobDate

    }
  })
);
