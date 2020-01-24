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
      loading:true
    }
  }
  
  async componentDidMount() {
    await loadWeb3();
    await loadBlockChain()
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
              <Route exact path='/:id/:route/' component={ AdminPage } />
              <Route exact path='/admin' component={ Register }/>
            </Switch>
          </BrowserRouter>
        </Provider>
      )
  }
}

export default App;
