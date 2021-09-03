import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import TheoryComp from './Theory.js';
import ProcedureComp from './Procedure.js';
import SimulationComp from './Simulation';
import AboutComp from './About.js';
import SelfEvalComp from './SelfEvaluation.js';
import RefComp from './References.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <br />
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Theory" {...a11yProps(1)} />
          <Tab label="Procedure" {...a11yProps(2)} />
          <Tab label="Animation" {...a11yProps(3)} />
          <Tab label="Simulation" {...a11yProps(4)} />
          <Tab label="Self Evaluation" {...a11yProps(5)} />
          <Tab label="References" {...a11yProps(6)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <AboutComp />
        <TheoryComp />
        <ProcedureComp />
        <SimulationComp />
        <SelfEvalComp />
        <RefComp />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <TheoryComp />
        <ProcedureComp />
        <SimulationComp />
        <SelfEvalComp />
        <RefComp />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <ProcedureComp />
        <SimulationComp />
        <SelfEvalComp />
        <RefComp />
      </TabPanel>

      <TabPanel value={value} index={3}>
        Animation here
      </TabPanel>

      <TabPanel value={value} index={4}>
        <SimulationComp />
        <SelfEvalComp />
        <RefComp />
      </TabPanel>

      <TabPanel value={value} index={5}>
        <SelfEvalComp />
        <RefComp />
      </TabPanel>

      <TabPanel value={value} index={6}>
        <RefComp />
      </TabPanel>

    </div>
  );
}

export default App;