import React, { Component } from 'react';

import TestRedux from './TestRedux'

export default class Page2 extends Component{
    constructor(props) {
        super(props)
        console.log(this.props.location.state.day)
    }
    componentWillMount() {
        // console.log(global.$)
        global.$.get({
            url:'https://free-api.heweather.net/s6/weather/now?parameters',
            success(res) {
                console.log('成功',res)
            },
            error(error) {
                console.log('错误',error)
            }
        })
    }

    render() {
        return (
            <div>
                <h1>这是page2页面组件{this.props.location.state.day}</h1>
                <TestRedux></TestRedux>
            </div>
        )
    }
}