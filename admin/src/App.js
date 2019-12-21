import React, {Component} from 'react';
import AdminPage from './pages/adminpage'
import Landing from './pages/landing'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import { loadWeb3, loadBlockChain } from './web3/web3-config'

class App extends Component {
  
  async componentWillMount() {
    await loadWeb3();
    await loadBlockChain()
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ Landing } />
            <Route exact path='/:id/:route/' component={ AdminPage } />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
