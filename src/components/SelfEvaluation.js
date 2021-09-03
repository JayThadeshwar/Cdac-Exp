import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import blue from "@material-ui/core/colors/blue";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles((theme) => ({
  evaluationpaper: {
    display: 'flex',
    '& > *': {
      backgroundColor: blue[50],
      margin: theme.spacing(2),
      width: theme.spacing(200),
      height: theme.spacing(185),
    },
  },
  orangecolor: {
    color: red[500]
  },
}));

function SelfEvalComp() {
  const classes = useStyles();
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  const [value4, setValue4] = React.useState('');
  const [value5, setValue5] = React.useState('');

  const handleChange1 = (event, newVal) => {
    setValue1(newVal);
  };
  const handleChange2 = (event, newVal) => {
    setValue2(newVal);
  };
  const handleChange3 = (event, newVal) => {
    setValue3(newVal);
  };
  const handleChange4 = (event, newVal) => {
    setValue4(newVal);
  };
  const handleChange5 = (event, newVal) => {
    setValue5(newVal);
  };

  return (
    <div className={classes.evaluationpaper}>
      <Paper elevation={13}>
        <Box p={3}>
          <center><Typography variant="h4" className={classes.orangecolor}>Self Evaluation</Typography></center>
          <br/>
          <Grid container spacing={3}>

            <Grid item xs={12}>
              <Paper elevation={2}>
                <Box p={1.5}>
                  <FormControl component="fieldset">
                    <Typography variant="h6">1) Acidic solution in water conducts electricity because they produce ___ ions.</Typography>
                    <RadioGroup aria-label="q1" name="q1" value={value1} onChange={handleChange1}>
                      <FormControlLabel value="barium" control={<Radio />} label="Barium" />
                      <FormControlLabel value="copper" control={<Radio />} label="Copper" />
                      <FormControlLabel value="aluminum" control={<Radio />} label="Aluminum" />
                      <FormControlLabel value="hydrogen" control={<Radio />} label="Hydrogen" />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={2}>
                <Box p={1.5}>
                  <FormControl component="fieldset">
                    <Typography variant="h6">2) Which of the following statement(s) is (are) correct?
                      <br />(i) Bulb will not glow because electrolyte is not acidic.
                      <br />(ii) Bulb will glow because HCl is a strong acid and furnishes ions for conduction.
                      <br />(iii) Bulb will not glow because circuit is incomplete.
                      <br />(iv) Bulb will not glow because it depends upon the type of electrolytic solution.</Typography>
                    <RadioGroup aria-label="q2" name="q2" value={value2} onChange={handleChange2}>
                      <FormControlLabel value="a1" control={<Radio />} label="(i) and (iii)" />
                      <FormControlLabel value="b1" control={<Radio />} label="(ii) and (iv)" />
                      <FormControlLabel value="c1" control={<Radio />} label="(ii) only" />
                      <FormControlLabel value="d1" control={<Radio />} label="(iv) only" />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={2}>
                <Box p={1.5}>
                  <FormControl component="fieldset">
                    <Typography variant="h6">3) HCl which in water forms a solution: H+ + __
                      <br />(i) Cl+
                      <br />(ii) H3O+
                      <br />(iii) H2O
                      <br />(iv) Cl-</Typography>
                    <RadioGroup aria-label="q3" name="q3" value={value3} onChange={handleChange3}>
                      <FormControlLabel value="a" control={<Radio />} label="option (i)" />
                      <FormControlLabel value="b" control={<Radio />} label="option (ii)" />
                      <FormControlLabel value="c" control={<Radio />} label="option (iii)" />
                      <FormControlLabel value="d" control={<Radio />} label="option (iv)" />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={2}>
                <Box p={1.5}>
                  <FormControl component="fieldset">
                    <Typography variant="h6">4) The bulb starts glowing when H2SO4 is added to water. </Typography>
                    <RadioGroup aria-label="q4" name="q4" value={value4} onChange={handleChange4}>
                      <FormControlLabel value="True" control={<Radio />} label="True" />
                      <FormControlLabel value="False" control={<Radio />} label="False" />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Paper>
            </Grid>


            <Grid item xs={12}>
              <Paper elevation={2}>
                <Box p={1.5}>
                  <FormControl component="fieldset">
                    <Typography variant="h6">5) Acids contain H+ ion as anion and Cl- ion as cation </Typography>
                    <RadioGroup aria-label="q5" name="q5" value={value5} onChange={handleChange5}>
                      <FormControlLabel value="True" control={<Radio />} label="True" />
                      <FormControlLabel value="False" control={<Radio />} label="False" />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <br />
          <center>
            <Button variant="contained" color="primary" spacing="1">Submit</Button>&nbsp; &nbsp; &nbsp;
            <Button variant="contained" color="primary">Cancel</Button>
          </center>
        </Box>
      </Paper>
    </div>
  );
}
export default SelfEvalComp;