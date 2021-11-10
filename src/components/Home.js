import React from 'react';
import Grid from '@material-ui/core/Grid';

import NavBar from './App';
import TabPanel from './TabPanel';
import AboutComp from './About';
import TheoryComp from './Theory';
import ProcedureComp from './Procedure';

function HomePage() {
    const [value, setValue] = React.useState(0);
    const handleChange = (newValue) => {
        setValue(newValue);
    }

    return (
        <NavBar isHomePage={true} handleChange={(e, v) => handleChange(v)} val={value}>
            <TabPanel value={value} index={0}>
                <AboutComp />
            </TabPanel>

            <TabPanel value={value} index={1}>
                <TheoryComp />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <ProcedureComp />
            </TabPanel>

            <TabPanel value={value} index={3}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={10} lg={9}>
                        <iframe
                            width="100%"
                            height="500px"
                            src="https://www.youtube.com/embed/Ikin3sBPU34"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </Grid>
                </Grid>
            </TabPanel>

            <TabPanel value={value} index={4}>
            </TabPanel>
        </NavBar>
    );
}

export default HomePage;