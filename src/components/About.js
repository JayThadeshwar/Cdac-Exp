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
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',    
    width: '100%',
    '& > *': {
      backgroundColor: purple[50],
      marginBottom: theme.spacing(1),      
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
        marginBottom: theme.spacing(3),   
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: '100%'
      },   
      [theme.breakpoints.between('md', 'lg')]: {
        width: '45%'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '47%'
      },      
    },
  },

  orangecolor: {
    color: red[500]
  },

  diagImg: {
    height:"300",
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '90%'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '300px'
    },    
    [theme.breakpoints.between('md', 'lg')]: {
      width: '70%'
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: '60%'
    },    
  }
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
          <img src={diagram} alt="Experiment Diagram" className={classes.diagImg}/>
          <center><Typography style={{fontSize:28}} className={classes.orangecolor}>Experiment Setup</Typography></center>
        </center>
        </Box>
      </Paper>
    </div>
  );
}
export default AboutComp;