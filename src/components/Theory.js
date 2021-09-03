import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Typography from '@material-ui/core/Typography';
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  theorypaper: {
    display: 'flex',
    '& > *': {
      backgroundColor: blue[50],
      margin: theme.spacing(2),
      width: theme.spacing(200),
      height: theme.spacing(110),
    },
  },
  orangecolor: {
    color: red[500]
  },

}));

function Content(props){
  return(
    <Box display='flex' alignItems='center'>
      <DoubleArrowIcon />
      <Typography style={{fontSize:20}}>
        {props.info}
      </Typography>      
    </Box>    
  );
}

function TheoryComp() {
  const classes = useStyles();

  return (
    <div className={classes.theorypaper}>
      <Paper elevation={13}>
        <Box p={3}>
          <center><Typography variant="h4" className={classes.orangecolor}>Theory</Typography></center>

          <Typography style={{fontSize:20}}>All acids have similar chemical properties. All acids generate hydrogen gas on reacting with metals, so
            hydrogen seems to be common to all acids.</Typography>
          <br />
          <Typography variant="h5" className={classes.orangecolor}>What we have to do?</Typography>

          <Content info='Investigate whether all compounds containing hydrogen are acidic.'/>    
          
          <br />
          <Typography variant="h5" className={classes.orangecolor}>What do we need?</Typography>
          <Content info='Solutions of  glucose, alcohol, hydrochloric acid, sulphuric acid'/>    
          <Content info='Two nails on a cork'/>    
          <Content info='Beaker'/>    
          <Content info='6 volt battery'/>    
          <Content info='A bulb and a switch'/>
          
          <br />
          <Typography variant="h5" className={classes.orangecolor}>What do we observe?</Typography>
          <Typography variant="h6"><DoubleArrowIcon />The bulb will start glowing in the case of acids.
            <br /><DoubleArrowIcon />Glowing of the bulb indicates that there is a flow of electric current through the solution.
            <br /><DoubleArrowIcon />The electric current is carried through the acidic solution by ions.
            <br /><DoubleArrowIcon />But glucose and alcohol solutions do not conduct electricity.</Typography>
          <br />
          <Typography variant="h5" className={classes.orangecolor}>What do we conclude?</Typography>
          <Typography variant="h6"><DoubleArrowIcon />Acids contain H+ ion as cation and anion such as Cl– in HCl,
            <br /><DoubleArrowIcon />NO3– in HNO3,
            <br /><DoubleArrowIcon />SO–in H2SO4
            <br /><DoubleArrowIcon />Since the cation present in acids is H+, this suggests that acids produce hydrogen ions, H+(aq), in solution, which are responsible for their acidic properties.</Typography>

        </Box>
      </Paper>
    </div>
  );
}

export default TheoryComp;