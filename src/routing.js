import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/Home';
import Container from './components/Container';
import SelfEvaluation from './components/SelfEvaluation'

function Routing(){
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/simulator' component={Container} />
                <Route path='/evaluation' component={SelfEvaluation} />
            </Switch>
        </Router>
    );
}

export default Routing;