import React, {Component} from 'react';
import VoterPage from './pages/voterpage'
import Registration from './pages/registration'
import Landing from './pages/landing'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ Landing } />
            <Route exact path='/register' component={ Registration } />
            <Route exact path='/:id/:route' component={ VoterPage } />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
