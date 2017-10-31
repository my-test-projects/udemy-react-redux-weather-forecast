import React, { Component } from 'react';
import SearchBar from './../../Search/containers/SearchBarContainer';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className='container'>
          <div className="page-header">
            <h3>Weather Forecast</h3>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <SearchBar />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
