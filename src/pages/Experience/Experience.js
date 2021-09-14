import React from "react";
import LineTo from 'react-lineto';
import { Typography as Text, Grid } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import ExperienceComponent from "./experienceComponents";

function ExperiencePage() {
  const classes = experiencePageStyles();
  const experience = require('./experience.json')
  return (
    <div className={classes.body} id="experience">
      <Text style={{color:'#ffffff'}}>Work Experience</Text>
      <Grid container direction="column" alignItems="center" justify="center">
        <div style={{zIndex: 10}}>
        {
        experience.data.map((job, index) => 
          <div className={job.jobName}>
            <Grid item>
              <ExperienceComponent
                name={job.jobName}
                title={job.jobTitle}
                date={job.jobDates}
                descr={job.jobDescr}
                left={index % 2 == 0}
                img={job.img}
              />
            </Grid>
            <LineTo 
              zIndex={1} delay={true} borderWidth={3} from={experience.data[0].jobName} to={experience.data[experience.data.length-1].jobName} borderColor="#c5c5c5" />
            </div>
          )
        }
        </div>
      </Grid>
    </div>
  );
}

export default ExperiencePage;

const experiencePageStyles = makeStyles((theme) =>
  createStyles({
    body: {
      height: "300vh",
    },
    test: {
      backgroundColor: theme.palette.base.backgroundColor,
      fontSize: 50,
      color: "#f7f8f9",
    },
    line: {
      width: '112px',
      height: '47px',
      position: 'absolute',
      color: '#cc0033'
      }
  })
);
