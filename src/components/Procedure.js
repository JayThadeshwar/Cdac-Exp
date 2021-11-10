import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import red from "@material-ui/core/colors/red";
import { makeStyles } from '@material-ui/core/styles';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';
import Filter6Icon from '@material-ui/icons/Filter6';
import Filter7Icon from '@material-ui/icons/Filter7';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import beaker from '../images/beaker.png';
import cork from '../images/cork.png';
import nails from '../images/nail.png';
import wires from '../images/nailtokey.png';
import battery from '../images/battery.png';
import bulb from '../images/bulb.png';
import switch2 from '../images/switch2.jpg';
import testtube from '../images/testtube.png';

const useStyles = makeStyles((theme) => ({
  procedurepaper: {
    display: 'flex',    
  },
  orangecolor: {
    color: red[500]
  },
  cardstyle: {
    maxWidth: 250
  },
  cardimage: {
    height: '170px',
    width: '60%',
    margin: '5px auto'
  },
  battery: {
    height: '170px',
    width: '70%',
    margin: '5px auto'
  },
  beaker: {
    height: '170px',
    width: '60%',
    margin: '5px auto'
  },
  testube: {
    height: '170px',
    width: '12%',
    margin: '5px auto'
  }
})
);

function StepsInfo(props) {
  return (
    <Box display='flex'>
      <div style={{marginTop:'3px'}}>
        {props.children}
      </div>
      
      &nbsp;
      <Typography style={{ fontSize: 20 }}>
        {props.info}
      </Typography>
    </Box>
  );
}


function ProcedureComp() {
  const classes = useStyles();

  return (
    <div className={classes.procedurepaper}>
      <Paper elevation={13}>
        <Box p={3}>
          <center><Typography variant="h4" className={classes.orangecolor}>Procedure</Typography></center>
          <Typography variant="h5" className={classes.orangecolor}>Materials Required</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.cardstyle} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.beaker}
                    image={beaker}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5"><center>Beaker</center></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.cardstyle} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.cardimage}
                    image={cork}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5"><center>Cork</center></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.cardstyle} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.cardimage}
                    image={nails}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5"><center>Iron Nails</center></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.cardstyle} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.cardimage}
                    image={wires}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5"><center>Conducting Wires</center></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.cardstyle} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.battery}
                    image={battery}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5"><center>Battery</center></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.cardstyle} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.cardimage}
                    image={bulb}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5"><center>Bulb</center></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.cardstyle} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.cardimage}
                    image={switch2}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5"><center>Switch</center></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.cardstyle} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.testube}
                    image={testtube}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5"><center>Testubes with acids</center></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <Typography variant="h5" className={classes.orangecolor}><br />Real Lab Procedure :</Typography>
          <Typography variant="h6">
            <StepsInfo info='Take solutions of glucose, alcohol, hydrochloric acid, sulphuric acid, etc.'>
              <Filter1Icon />
            </StepsInfo>
            <StepsInfo info='Fix two nails on a cork, and place the cork in a 100 mL beaker.'>
              <Filter2Icon />
            </StepsInfo>
            <StepsInfo info='Connect the nails to the two terminals of a 6 volt battery through a bulb and a switch.'>
              <Filter3Icon />
            </StepsInfo>
            <StepsInfo info='Now pour some dilute HCl in the beaker and switch on the current.'>
              <Filter4Icon />
            </StepsInfo>
            <StepsInfo info='Repeat with dilute sulphuric acid. What do you observe?'>
              <Filter5Icon />
            </StepsInfo>
            <StepsInfo info='Repeat the experiment separately with glucose and alcohol solutions. What do you observe now?'>
              <Filter6Icon />
            </StepsInfo>
            <StepsInfo info='Does the bulb glow in all cases?'>
              <Filter7Icon />
            </StepsInfo>
          </Typography>

          <Typography variant="h5" className={classes.orangecolor}><br />Procedure for Simulation :</Typography>
          <Typography variant="h6">
            <StepsInfo info='Connect a wire between nail and negative terminal of the battery.'>
              <Filter1Icon />
            </StepsInfo>
            <StepsInfo info='Then, connect a wire between positive terminal of battery and bulb.'>
              <Filter2Icon />
            </StepsInfo>
            <StepsInfo info='Now, connect a wire between another nail and switch.'>
              <Filter3Icon />
            </StepsInfo>
            <StepsInfo info='Finally, connect a wire between switch and bulb.'>
              <Filter4Icon />
            </StepsInfo>
            <StepsInfo info='Connect the key to complete the circuit.'>
              <Filter5Icon />
            </StepsInfo>
          </Typography>

          <Typography variant="h5" className={classes.orangecolor}><br />Observation :</Typography>
          <Typography variant="h6">
            <StepsInfo info='The bulb will start glowing in the case of acids.'>
              <Filter1Icon />
            </StepsInfo>
            <StepsInfo info=' Glucose and alcohol solutions do not conduct electricity.'>
              <Filter2Icon />
            </StepsInfo>
          </Typography>

          <Typography variant="h5" className={classes.orangecolor}><br />Inference :</Typography>
          <Typography variant="h6">
            <StepsInfo info='Glowing of the bulb indicates that there is a flow of electric current through the solution'>
              <Filter1Icon />
            </StepsInfo>
            <StepsInfo info='The electric current is carried through the acidic solution by ions.'>
              <Filter2Icon />
            </StepsInfo>
            <StepsInfo info='Acids contain H+ ion as cation, this suggests that acids produce hydrogen ions, which are responsible for their acidic properties.'>
              <Filter3Icon />
            </StepsInfo>
          </Typography>

        </Box>
      </Paper>
    </div>

  );
}

export default ProcedureComp;