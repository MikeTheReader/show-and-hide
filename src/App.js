import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TabOne from './TabOne'
import TabTwo from './TabTwo'
import TabThree from './TabThree'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'one',
            tabs: ['one', 'two', 'three']
        };
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(event) {
        this.setState({
            ...this.state,
            activeTab: event.target.getAttribute('data-tab-name')
        });
    }

    renderActiveTab() {
        switch (this.state.activeTab) {
            case 'one':
                return <TabOne />
            case 'two':
                return <TabTwo />
            default:
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
                    {this.state.tabs.map((tabName, index) => (
                        <div key={index}
                            data-tab-name={tabName}
                            className={this.state.activeTab === tabName ? 'tab active' : 'tab'}
                            onClick={this.changeTab}>{tabName}</div>
                    ))}
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
