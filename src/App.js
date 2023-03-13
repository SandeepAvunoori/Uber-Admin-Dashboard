import { Component } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import DashBoard from './Components/DashBoard';
import Drivers from './Components/Drivers';
import Summary from './Components/Summary';
import TripCreation from './Components/TripCreation';
import './index.css';

class App extends Component{

  render(){
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/drivers" component={Drivers} />
        <Route exact path="/summary" component={Summary} />
        <Route exact path="/trip-creation" component={TripCreation} />
      </Switch>
    </Router>
  );
  }
}

export default App;