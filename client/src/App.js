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
  // state = { loading: true, drizzleState: null };

  // componentDidMount() {
  //   const { drizzle } = this.props;

  //   // subscribe to changes in the store
  //   this.unsubscribe = drizzle.store.subscribe(() => {

  //     // every time the store updates, grab the state from drizzle
  //     const drizzleState = drizzle.store.getState();

  //     // check to see if it's ready, if so, update local component state
  //     if (drizzleState.drizzleStatus.initialized) {
  //       this.setState({ loading: false, drizzleState });
  //     }
  //   });
  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

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
