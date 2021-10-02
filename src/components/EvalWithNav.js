import React from 'react';

import NavBar from './App';
import TabPanel from './TabPanel';
import SelfEvalComp from './SelfEvaluation';

function Eval(){
	const [value, setValue] = React.useState(2);
	const handleChange = (e, newValue) => {
		setValue(newValue);
	}
	return (
	<div>
		<NavBar isHomePage={false} handleChange={handleChange} val={value}>
			<TabPanel value={value} index={0}>
			</TabPanel>
			<TabPanel value={value} index={1}>
			</TabPanel>
			<TabPanel value={2} index={2}>
				<SelfEvalComp />
			</TabPanel>
		</NavBar>
	</div>
	);
}

export default Eval;