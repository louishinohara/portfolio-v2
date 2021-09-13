import React from "react";
import { Typography as Text, Grid,Divider } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import {
  jobImg,
  jobName,
  jobTitle,
  jobDates,
  jobDescr,
} from "../../../constants/constants";

import ExperienceComponent from "./experienceComponents";

function ExperiencePage() {
  const classes = experiencePageStyles();
  return (
    <div className={classes.body} id="experience">
      <Text style={{color:'#ffffff'}}>Work Experience</Text>
      <Grid container direction="column" alignItems="center" justify="center">
        {
          jobName.forEach((job, index) => {
            console.log(jobName[index])
            return (
              <Grid item>
              {/* <ExperienceComponent
                name={jobName[index]}
                title={jobTitle[index]}
                date={jobDates[index]}
                descr={""}
                left={index % 2 == 0}
                img={jobImg[index]}
              /> */}
              <h1>{jobName[index]}</h1>
            </Grid>
            )
          })
        }

        <Grid item>
          <ExperienceComponent
            name={jobName[1]}
            title={jobTitle[1]}
            date={jobDates[1]}
            descr={""}
            left={false}
            img={jobImg[1]}
          />
        </Grid>
        <Grid item>
          <ExperienceComponent
            name={jobName[2]}
            title={jobTitle[2]}
            date={jobDates[2]}
            descr={""}
            left={true}
            img={jobImg[2]}
          />
        </Grid>
        <Grid item>
          <ExperienceComponent
            name={jobName[3]}
            title={jobTitle[3]}
            date={jobDates[3]}
            descr={""}
            left={false}
            img={jobImg[3]}
          />
        </Grid>
        <Grid item>
          <ExperienceComponent
            name={jobName[4]}
            title={jobTitle[4]}
            date={jobDates[4]}
            descr={""}
            left={true}
            img={jobImg[4]}
          />
        </Grid>
        <Grid item>
          <ExperienceComponent
            name={jobName[5]}
            title={jobTitle[5]}
            date={jobDates[5]}
            descr={""}
            left={false}
            img={jobImg[5]}
          />
        </Grid>
        <Grid item>
          <ExperienceComponent
            name={jobName[6]}
            title={jobTitle[6]}
            date={jobDates[6]}
            descr={""}
            left={true}
            img={jobImg[6]}
          />
        </Grid>
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
