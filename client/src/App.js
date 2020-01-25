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
          loading:true,
          election:''
      }
      this.toggleLoading = this.toggleLoading.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading:true })
    await loadWeb3();
    const blockchain = await loadBlockChain()
    localStorage.setItem('account',blockchain['accounts'])
    const election = blockchain['election']
    this.setState({ loading:false, election })
  }

  toggleLoading() {
    this.setState({ loading:!this.state.loading });
  }
  
  render() {
    if(this.state.loading)
      return loader()
    else
      return(
          <BrowserRouter>
            <Switch>
              <Route exact path='/' render={(props) => <Landing {...props} loading={ this.toggleLoading } election={this.state.election}/>} />
              <Route exact path='/register' component={ Registration }/>
              <Route exact path='/:id/:route?' render={(props) => <VoterPage {...props} election={this.state.election}/>}/>
            </Switch>
          </BrowserRouter>
      )
  }
}

export default App;
