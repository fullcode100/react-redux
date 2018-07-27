import React, { Component } from 'react';

import { counter } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Counter from './containers/CounterContainer';

const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
