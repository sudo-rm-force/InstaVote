import React, {Component} from 'react';
import AdminPage from './pages/adminpage'
import Landing from './pages/landing'
import Register from './pages/register'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import loader from './components/common/loader';
import { loadWeb3, loadBlockChain } from './web3/web3-config'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading:true,
      election: ''
    }
  }
  
  async componentDidMount() {
    await loadWeb3();
    const blockchain = await loadBlockChain()
    localStorage.setItem('admin-account',blockchain['accounts'])
    this.setState({ election:blockchain['election'] })
    this.setState({ loading:false })
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    if(this.state.loading)
      return loader()
    else
      return(
        <Provider store={ store }>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={ Landing } />
              <Route exact path='/:id/:route/' render = {(props) => <AdminPage {...props} election={ this.state.election } />} />
              <Route exact path='/admin' render = {(props) => <Register {...props} election={ this.state.election } />} />
            </Switch>
          </BrowserRouter>
        </Provider>
      )
  }
}

export default App;
