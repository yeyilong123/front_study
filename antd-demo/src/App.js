import React from 'react';
import { Row, Col } from 'antd';
import './App.css';
import NavLeft from './component/NavLeft'
import CHeader from './component/CHeader'
import CFooter from './component/CFooter'

function App(props){
    return (
      <div className="App">
        <Row>
          <Col span={4}>
            <NavLeft></NavLeft>
          </Col>
          <Col span={20}>
            <CHeader></CHeader>
            {props.children}
            <CFooter></CFooter>
          </Col>
        </Row>

      </div>
    );
}

export default App;
