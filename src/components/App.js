import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  linksSty: {
    textDecoration: 'none',
    color: 'white'
  },
}));

function App(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br />
      <AppBar position="static">
        <Tabs
          value={props.val}
          variant="scrollable"
          onChange={props.handleChange}
          aria-label="simple tabs example">
          {
            props.isHomePage && (
              <Tab label="Home" {...a11yProps(0)} />
            )
          }
          {
            !props.isHomePage && (
              <Link to="/" className={classes.linksSty}>
                <Tab label="Home" {...a11yProps(0)} />
              </Link>
            )
          }
          {props.isHomePage && (
            <Tab label="Theory" {...a11yProps(1)} />
          )}
          {props.isHomePage && (
            <Tab label="Procedure" {...a11yProps(2)} />
          )}
          {props.isHomePage && (
            <Tab label="Animation" {...a11yProps(3)} />
          )}


          <Link to="/simulator" className={classes.linksSty}>
            <Tab label="Simulation" {...a11yProps(4)} />
          </Link>
          {
            !props.isHomePage && (
              <Tab label="Evaluation" {...a11yProps(5)} />
            )
          }
          {
            props.isHomePage && (
              <Link to="/evaluation" className={classes.linksSty}>
                <Tab label="Evaluation" {...a11yProps(4)} />
              </Link>
            )
          }
        </Tabs>
      </AppBar>

      {props.children}

    </div>
  );
}

export default App;