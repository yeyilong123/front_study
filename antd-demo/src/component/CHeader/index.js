import React, { Component } from 'react';
import { Row } from 'antd'
import formatDate from './../../utils/formatDate'

export default class cHeader extends Component {
    constructor(params){
        super(params);
        this.state = {
            time: ''
        }
    }

    componentWillMount(){
        setInterval(() => {
            let now = new Date();
            let time = formatDate(now);
            console.log(time)
            this.setState({
                time
            })
        }, 1000);
    }

    render() {
        return (
            <div>
                <Row>
                    <span>欢迎xxx</span>
                    <a>退出</a>
                </Row>
                <Row>
                    {this.state.time}
                </Row>
            </div>

        )
    }
}