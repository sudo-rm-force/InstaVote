import React, {Component} from 'react';
import VoterPage from './pages/voterpage';
import Registration from './pages/registration';
import Landing from './pages/landing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {loadWeb3, loadBlockChain} from './web3/web3-config'
import loader from './components/common/loader'
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          loading:true
      }
  }

  async componentDidMount() {
    this.setState({ loading:true })
    await loadWeb3();
    await loadBlockChain()
    this.setState({ loading:false })
  }
  
  render() {
    if(this.state.loading)
      return loader()
    else
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
