import React, {Component} from 'react';
import VoterPage from './pages/voterpage';
import Registration from './pages/registration';
import Landing from './pages/landing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {loadWeb3, loadBlockChain} from './web3/web3-config'
import './App.css';

class App extends Component {

  async componentWillMount() {
    await loadWeb3();
    await loadBlockChain()
  }
  
  render() {
    return(
        <BrowserRouter>
          <Switch>
            <Route exact path='/'  component={ Landing }/>
            <Route exact path='/register' component={ Registration }/>
            <Route exact path='/:id/:route' component={ VoterPage }/>
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App;
