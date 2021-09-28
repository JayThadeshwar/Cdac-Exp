import React from 'react';
import NavBar from './App';
import TabPanel from './TabPanel';
import AboutComp from './About';
import TheoryComp from './Theory';
import ProcedureComp from './Procedure';

function HomePage() {
    const [value, setValue] = React.useState(0);
    const handleChange = (newValue) => {
        console.info("in")
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
                <iframe
                    width="900"
                    height="500"
                    src="https://www.youtube.com/embed/Ikin3sBPU34"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </TabPanel>

            <TabPanel value={value} index={4}>
            </TabPanel>
        </NavBar>
    );
}

export default HomePage;