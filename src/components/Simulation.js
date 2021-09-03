import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import red from "@material-ui/core/colors/red";
import { makeStyles } from '@material-ui/core/styles';
import purple from "@material-ui/core/colors/purple";
import Container from './Container';

const useStyles = makeStyles((theme) => ({
  orangecolor: {
    color: red[500]
  },

  simulationpaper: {
    display: 'flex',
    '& > *': {
      backgroundColor: purple[50],
      margin: theme.spacing(2),
      width: theme.spacing(190),
      height: theme.spacing(100),
    },
  },

}));

function SimulationComp() {
  const classes = useStyles();
  return (
    <div className={classes.simulationpaper}>
      <Paper elevation="8">
        <Box p={3}>
          <Typography variant="h4" className={classes.orangecolor} align='center'>Simulation</Typography>
          <br/>
          <Container />
        </Box>
      </Paper>
    </div>

  );
}
export default SimulationComp;