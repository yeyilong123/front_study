import React, { Component } from 'react'
import Home from './src/page/Home'
import Student from './src/page/Student'

export default class router extends Component {
    render() {
        return (
            <div>
                <App>
                    <Router path='/home' component={Home}></Router>
                    <Router path='/student/list' component={Student}></Router>
                </App>
                
            </div>
        )
    }
}
