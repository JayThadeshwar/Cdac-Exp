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
import CorrectTick from '../images/correct.png';
import WrongTick from '../images/wro.png';

const useStyles = makeStyles((theme) => ({
  evaluationpaper: {
    display: 'flex',    
    '& > *': {
      backgroundColor: blue[50],
      margin: theme.spacing(2),
    },
  },
  orangecolor: {
    color: red[500],
  },
}));


function SelfEvalComp() {

  const classes = useStyles();
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  const [value4, setValue4] = React.useState('');
  const [value5, setValue5] = React.useState('');
  const [helperText1, setHelperText1] = React.useState('');
  const [helperText2, setHelperText2] = React.useState('');
  const [helperText3, setHelperText3] = React.useState('');
  const [helperText4, setHelperText4] = React.useState('');
  const [helperText5, setHelperText5] = React.useState('');
  const [textcolor, setTextColor] = React.useState();

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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value1 === 'hydrogen') {
      setHelperText1(CorrectTick);
    } else {
      setHelperText1(WrongTick);
      setTextColor('#76ff03');
    }

    if (value2 === 'c1') {
      setHelperText2(CorrectTick);
    } else {
      setHelperText2(WrongTick);
      setTextColor('#76ff03');
    }

    if (value3 === 'd') {
      setHelperText3(CorrectTick);
    } else {
      setHelperText3(WrongTick);
      setTextColor('#76ff03');
    }

    if (value4 === 'True') {
      setHelperText4(CorrectTick);
    } else {
      setHelperText4(WrongTick);
      setTextColor('#76ff03');
    }

    if (value5 === 'False') {
      setHelperText5(CorrectTick);
    } else {
      setHelperText5(WrongTick);
      setTextColor('#4caf50');
    }
  };

  const handleClear = (event) => {
    setValue1('');
    setValue2('');
    setValue3('');
    setValue4('');
    setValue5('');
    setHelperText1('');
    setHelperText2('');
    setHelperText3('');
    setHelperText4('');
    setHelperText5('');
    setTextColor('');
  };

  return (
    <div className={classes.evaluationpaper}>
      <Paper elevation={3}>
        <Box p={1.5}>
          <Typography variant="h4" className={classes.orangecolor} style={{ textAlign: 'center' }}>
            Self Evaluation
          </Typography>
          <Typography variant="h6" style={{ textAlign: 'center', fontWeight: '300'}}>
            It is recommended that you try using simulator to get good understanding of experiment.
          </Typography>
          <br />
          <Grid container spacing={3}>

            <Grid item xs={12}>
              <Paper elevation={2} className={classes.questionpaper}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Box p={1.5}>
                    <FormControl component="fieldset">
                      <Typography variant="h6">1) Acidic solution in water conducts electricity because they produce _________ ions.  </Typography>
                      <RadioGroup aria-label="q1" name="q1" value={value1} onChange={handleChange1}>
                        <FormControlLabel value="barium" control={<Radio />} label="Barium" />
                        <FormControlLabel value="copper" control={<Radio />} label="Copper" />
                        <FormControlLabel value="aluminum" control={<Radio />} label="Aluminum" />
                        <FormControlLabel value="hydrogen" style={{ color: textcolor }} control={<Radio />} label="Hydrogen" />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <div style={{
                    alignSelf: 'center',
                    flex: '3',
                    textAlign: 'center'
                  }}>
                    {helperText1 !== '' && (
                      <img src={helperText1} height='80' width='80' alt='Result tick' />
                    )
                    }
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={2} className={classes.questionpaper}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Box p={1.5}>
                    <FormControl component="fieldset">
                      <Typography variant="h6">2) Which of the following statement(s) is (are) correct?
                        <br />(i) Bulb will not glow because electrolyte is not acidic.
                        <br />(ii) Bulb will glow because HCl is a strong acid and furnishes ions for conduction.
                        <br />(iii) Bulb will not glow because circuit is incomplete.
                        <br />(iv) Bulb will not glow because it depends upon the type of electrolytic solution.
                      </Typography>

                      <RadioGroup aria-label="q2" name="q2" value={value2} onChange={handleChange2}>
                        <FormControlLabel value="a1" control={<Radio />} label="(i) and (iii)" />
                        <FormControlLabel value="b1" control={<Radio />} label="(ii) and (iv)" />
                        <FormControlLabel value="c1" style={{ color: textcolor }} control={<Radio />} label="(ii) only" />
                        <FormControlLabel value="d1" control={<Radio />} label="(iv) only" />
                      </RadioGroup>

                    </FormControl>
                  </Box>
                  <div style={{
                    alignSelf: 'center',
                    flex: '3',
                    textAlign: 'center'
                  }}>
                    {helperText2 !== '' && (
                      <img src={helperText2} height='80' width='80' alt='Result tick' />
                    )
                    }
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={2} className={classes.questionpaper}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Box p={1.5} style={{ flex: '5' }}>
                    <FormControl component="fieldset">
                      <Typography variant="h6">3) HCl which in water forms a solution: H+ + _____
                        <br />(i) Cl+
                        <br />(ii) H3O+
                        <br />(iii) H2O
                        <br />(iv) Cl-</Typography>
                      <RadioGroup aria-label="q3" name="q3" value={value3} onChange={handleChange3}>
                        <FormControlLabel value="a" control={<Radio />} label="option (i)" />
                        <FormControlLabel value="b" control={<Radio />} label="option (ii)" />
                        <FormControlLabel value="c" control={<Radio />} label="option (iii)" />
                        <FormControlLabel value="d" style={{ color: textcolor }} control={<Radio />} label="option (iv)" />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <div style={{
                    alignSelf: 'center',
                    flex: '3',
                    textAlign: 'center'
                  }}>
                    {helperText3 !== '' && (
                      <img src={helperText3} height='80' width='80' alt='Result tick' />
                    )
                    }
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={2} className={classes.questionpaper}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Box p={1.5} style={{ flex: '5' }}>
                    <FormControl component="fieldset">
                      <Typography variant="h6">4) The bulb starts glowing when H2SO4 is added to water.   </Typography>
                      <RadioGroup aria-label="q4" name="q4" value={value4} onChange={handleChange4}>
                        <FormControlLabel value="True" style={{ color: textcolor }} control={<Radio />} label="True" />
                        <FormControlLabel value="False" control={<Radio />} label="False" />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <div style={{
                    alignSelf: 'center',
                    flex: '3',
                    textAlign: 'center'
                  }}>
                    {helperText4 !== '' && (
                      <img src={helperText4} height='80' width='80' alt='Result tick' />
                    )
                    }
                  </div>
                </div>
              </Paper>
            </Grid>


            <Grid item xs={12}>
              <Paper elevation={2} className={classes.questionpaper}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Box p={1.5} style={{ flex: '5' }}>
                    <FormControl component="fieldset">
                      <Typography variant="h6">5) Acids contain H+ ion as anion and Cl- ion as cation.</Typography>
                      <RadioGroup aria-label="q5" name="q5" value={value5} onChange={handleChange5}>
                        <FormControlLabel value="True" control={<Radio />} label="True" />
                        <FormControlLabel value="False" style={{ color: textcolor }} control={<Radio />} label="False" />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <div style={{
                    alignSelf: 'center',
                    flex: '3',
                    textAlign: 'center'
                  }}>
                    {helperText5 !== '' && (
                      <img src={helperText5} height='80' width='80' alt='Result tick' />
                    )
                    }
                  </div>
                </div>
              </Paper>
            </Grid>

          </Grid>
          <br />
          <Grid container spacing={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleClear}>
                Reset quiz
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
}

export default SelfEvalComp;