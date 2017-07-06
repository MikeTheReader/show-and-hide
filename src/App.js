import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TabOne from './TabOne'
import TabTwo from './TabTwo'
import TabThree from './TabThree'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 'one' };
  }

  changeTab(tab) {
    this.setState({
      ...this.state,
      activeTab: tab
    });
  }

  renderActiveTab() {
    switch (this.state.activeTab) {
      case 'one':
        return <TabOne />
      case 'two':
        return <TabTwo />
      case 'three':
        return <TabThree />
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Show and Hide</h2>
        </div>

        <div className="tabs">
          <input
            onClick={(event) => this.changeTab(event.target.value)}
            type="radio"
            name="tabRadio"
            id="one"
            value="one"
            checked={this.state.activeTab === 'one'} />
          <label className='tab' htmlFor="one">One</label>

          <input
            onClick={(event) => this.changeTab(event.target.value)}
            type="radio"
            name="tabRadio"
            id="two"
            value="two"
            checked={this.state.activeTab === 'two'} />
          <label className='tab' htmlFor="two">Two</label>

          <input
            onClick={(event) => this.changeTab(event.target.value)}
            type="radio"
            name="tabRadio"
            id="three"
            value="three"
            checked={this.state.activeTab === 'three'} />
          <label className='tab' htmlFor="three">Three</label>
        </div>
        <div className="tabContentHolder">
          <div className="tabContent">
            {this.renderActiveTab()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
