import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <menu>
          <Menu.Item>菜单项</Menu.Item>
            <SubMenu title="子菜单">
            <Menu.Item>子菜单项</Menu.Item>
            </SubMenu>
        </menu>
      </div>
    );
  }
}

export default App;
