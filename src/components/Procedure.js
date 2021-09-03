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

const useStyles = makeStyles((theme) => ({
  procedurepaper: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(190),
      height: theme.spacing(180),
    },
  },
  orangecolor: {
    color: red[500]
  },
  cardstyle: {
    maxWidth: 250
  },
  cardimage: {
    height: 140
  },
}));


function ProcedureComp() {
  const classes = useStyles();

  return (
    <div className={classes.procedurepaper}>
      <Paper elevation={13}>
        <Box p={3}>
          <center><Typography variant="h4" className={classes.orangecolor}>Procedure</Typography></center>
          <Typography variant="h5" className={classes.orangecolor}>Materials Required</Typography>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Card className={classes.cardstyle} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.cardimage}
                    image={beaker}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5"><center>Beaker</center></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6} sm={3}>
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

            <Grid item xs={6} sm={3}>
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

            <Grid item xs={6} sm={3}>
              <Card className={classes.cardstyle} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.cardimage}
                    image={nails}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5"><center>Conducting Wires</center></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Card className={classes.cardstyle} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.cardimage}
                    image={nails}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5"><center>Battery</center></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Card className={classes.cardstyle} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.cardimage}
                    image={nails}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5"><center>Bulb</center></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Card className={classes.cardstyle} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.cardimage}
                    image={nails}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5"><center>Switch</center></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Card className={classes.cardstyle} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.cardimage}
                    image={nails}
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
            <Filter1Icon /> Take solutions of glucose, alcohol, hydrochloric acid, sulphuric acid, etc.
            <br /><Filter2Icon /> Fix two nails on a cork, and place the cork in a 100 mL beaker.
            <br /><Filter3Icon /> Connect the nails to the two terminals of a 6 volt battery through a bulb and a switch.
            <br /><Filter4Icon /> Now pour some dilute HCl in the beaker and switch on the current.
            <br /><Filter5Icon /> Repeat with dilute sulphuric acid. What do you observe?
            <br /><Filter6Icon /> Repeat the experiment separately with glucose and alcohol solutions. What do you observe now?
            <br /><Filter7Icon /> Does the bulb glow in all cases?
          </Typography>

          <Typography variant="h5" className={classes.orangecolor}><br />Procedure for Simulation :</Typography>
          <Typography variant="h6">
            <Filter1Icon />'Connect a wire between nail and negative terminal of the battery.
            <br /><Filter2Icon /> Then, connect a wire between positive terminal of battery and bulb.
            <br /><Filter3Icon /> Now, connect a wire between another nail and switch.
            <br /><Filter4Icon /> Finally, connect a wire between switch and bulb.
            <br /><Filter5Icon /> Connect the key to complete the circuit.
          </Typography>

          <Typography variant="h5" className={classes.orangecolor}><br />Observation :</Typography>
          <Typography variant="h6">
            <Filter1Icon /> The bulb will start glowing in the case of acids.
            <br /><Filter2Icon /> Glucose and alcohol solutions do not conduct electricity.
          </Typography>

          <Typography variant="h5" className={classes.orangecolor}><br />Inference :</Typography>
          <Typography variant="h6">
            <Filter1Icon /> Glowing of the bulb indicates that there is a flow of electric current through the solution
            <br /><Filter2Icon /> The electric current is carried through the acidic solution by ions.
            <br /><Filter3Icon /> Acids contain H+ ion as cation, this suggests that acids produce hydrogen ions, which are responsible for their acidic properties.
          </Typography>

        </Box>
      </Paper>
    </div>

  );
}

export default ProcedureComp;