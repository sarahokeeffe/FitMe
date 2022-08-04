import React from "react";
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles' ;
import Grid from '../components/Grid'
import "../App.css";
import WellnessImage from "../images/wellness.jpg";


//custom imports from material-ui
import WeekendIcon from '@material-ui/icons/Weekend';
import EventNoteIcon from '@material-ui/icons/EventNote';
import MoodIcon from '@material-ui/icons/Mood';
import PoolIcon from '@material-ui/icons/Pool';
import CakeIcon from '@material-ui/icons/Cake';
import SpaIcon from '@material-ui/icons/Spa';

const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})



function Wellness() {

    const classes = styles();
  
    return (
      <div className="Wellness">
        <img src= {WellnessImage} alt="Fit Me - Wellness"></img>
        <h2>Welcome to the Fit Me Wellness Centre!</h2>
        <h2>Below resources will help you on your wellness journey.</h2>
        <ThemeProvider theme={theme}> 
          <div className={`${classes.grid} ${classes.bigSpace}`}>
            <a href="https://www.lifehack.org/articles/featured/how-to-find-time-for-yourself.html">
              <Grid icon={<WeekendIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Taking Time" btnTitle="Show me More" />
            </a>
            <a href="https://www.rochester.edu/emerging-leaders/11-tips-for-organization-and-productivity/">
              <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Keeping Organised" btnTitle="Show me More"/>
            </a>
            <a href="https://www.oprahdaily.com/life/relationships-love/g25629970/positive-affirmations/">
              <Grid icon={<MoodIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Affirmations" btnTitle="Show me More"/>
            </a>
          </div>
          <div className={`${classes.grid} ${classes.littleSpace}`}>
            <a href="https://www.healthline.com/health/fitness-exercise/10-best-exercises-everyday#start-here">  
              <Grid icon={<PoolIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Exercise" btnTitle="Show me More"/>
            </a>
            <a href="https://extension.umn.edu/two-you-video-series/celebrate-small-stuff">
              <Grid icon={<CakeIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Celebrate the Small Things!" btnTitle="Show me More"/>
            </a>
            <a href="https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/relaxation-technique/art-20045368#:~:text=It's%20a%20process%20that%20decreases,as%20heart%20disease%20and%20pain.">
              <Grid icon={<SpaIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Relaxation" btnTitle="Show me More"/>
            </a>
          </div> 
        </ThemeProvider>
        <br>
        </br>
        <br>
        </br>
        <p>© Fit-Me Ltd. 2022</p>
      </div>

     );
  }
  
export default Wellness;