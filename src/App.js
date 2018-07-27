import React, { Component } from 'react';

import { counter } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(counter);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

        </div>
      </Provider>
    );
  }
}

export default App;
