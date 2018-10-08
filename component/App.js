import React, { Component } from 'react';
import Test from './Test';
import '../app.less';

class App extends Component {
  render() {
    return (
      <div className="ikra-app">
          <div className="app__container">
              <Test />
          </div>
      </div>
    );
  }
}

export default App;
