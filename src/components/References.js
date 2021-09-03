import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles((theme) => ({
    referencespaper:{
        display:'flex',
        '& > *': {
          margin: theme.spacing(2),
          width: theme.spacing(190),
          height: theme.spacing(18),
        },
      },
      orangecolor:{
        color: red[500]
      },
  }));

function RefComp(){
    const classes = useStyles();
    return(
        <div className={classes.referencespaper}>
      <Paper elevation={13}>
        <Box p={3}>
        <center><Typography variant="h4" className={classes.orangecolor}>References</Typography></center>
          <Typography variant="h6">
            <Filter1Icon /> https://ncert.nic.in/textbook.php?jesc1=2-16
            <br /><Filter2Icon /> https://youtu.be/Ikin3sBPU34
          </Typography>  
        </Box>
      </Paper>
      </div>
    );
}
export default RefComp;