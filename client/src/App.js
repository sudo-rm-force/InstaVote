import React, {Component} from 'react';
import Test from './pages/test'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  state = { loading: true, drizzleState: null };

  componentDidMount() {
    const { drizzle } = this.props;

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Test} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
