import React from 'react';
import './App.css';
import HomePage from './components/HomePage'
import Animal from './components/AnimalPage';
import Restaurant from './components/RestaurantPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.png';
import Navbar from './components/navigation/Navbar';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="App">
        <Router>
          <header>
            <Navbar logo={logo}/>
          </header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/animals" component={Animal} />
            <Route path="/resturants" component={Restaurant} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
/**
 * 
            <Route path="/animals" component={Animal} />
            <Route path="/restuarants" component={Restaurant} />
 */