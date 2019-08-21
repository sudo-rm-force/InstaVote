import React, {Component} from 'react';
import VoterPage from './pages/voterpage'
import Registration from './pages/registration'
import Landing from './pages/landing'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login:false,
      voter_id:0,
      name:'',
      constituency_id:''
    }
  }
  
  render() {
    return(
        <BrowserRouter>
          <Switch>
            <Route exact path='/'  component={ Landing }/>
            <Route exact path='/register' component={ Registration } state={this.state}/>
            <Route exact path='/:id/:route' component={ VoterPage }/>
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App;
