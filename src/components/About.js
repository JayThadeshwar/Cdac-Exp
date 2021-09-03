import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import red from "@material-ui/core/colors/red";
import { makeStyles } from '@material-ui/core/styles';
import purple from "@material-ui/core/colors/purple";
import diagram from '../images/ciruitdiag.png';

const useStyles = makeStyles((theme) => ({
  descpaper: {
    display: 'flex',
    '& > *': {
      backgroundColor: purple[50],
      margin: theme.spacing(2),
      width: theme.spacing(90),
      height: theme.spacing(50),
    },
  },

  orangecolor: {
    color: red[500]
  },

}));

function AboutComp() {
  const classes = useStyles();
  return (
    <div className={classes.descpaper}>
      <Paper elevation="8">
        <Box p={3}>
          <Typography variant="h4" className={classes.orangecolor}>About Experiment</Typography>
          <p>
            <Typography style={{fontSize:20}}>
              In this experiment, we try and pass different solutions through the adjacent setup
              to see how different solutions react to the situation and what type of ions do they release which in turn tell us about
              what kind of solutions they are.
            </Typography>
          </p>
          <p><Typography style={{fontSize:20}}>
            Acidic and basic solutions when passed through the setup release H<sup>+</sup> and OH<sup>-</sup> ions respectively
            and conduct electricity wherease neutral solutions like Alcohol and Glucose do not release any ions and as a result
            they do not conduct electricity.</Typography></p>
        </Box>
      </Paper>
      <Paper elevation="8">
        <Box p={3}><center>
          <img src={diagram} alt="Experiment Diagram" height="300" />
          <center><Typography style={{fontSize:28}} className={classes.orangecolor}>Experiment Setup</Typography></center>
        </center>
        </Box>
      </Paper>
    </div>
  );
}
export default AboutComp;