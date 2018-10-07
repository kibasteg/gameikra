import React, { Component } from 'react';
import Test from './Test';
import '../app.less';

class App extends Component {
  render() {
    return (
      <div className="ikra-app">
          <div className="app">
              <div className="app__header">
                  HEADER
              </div>
              <div className="app__container">
                  <Test />
              </div>
              <div className="app__footer">
                  FOOTER
              </div>
          </div>

      </div>
    );
  }
}

export default App;
