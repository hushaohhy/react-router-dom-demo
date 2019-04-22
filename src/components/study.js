// 该组件是菜鸟教程上的学习内容
import React, { Component } from 'react';

export default class Study extends Component{
    constructor(props) {
        // 组件的建立首先调用该部分
        super(props)
        // 在constructor中是唯一可以直接对state进行设置值的，其它位置只能使用this.setState()
        this.state = {

        }
    }
    componentWillMount() {
        // 准备加载组件
    }

    render() {
        // return中的语法就是jsx语法
        return (
            <div className="study">
                <p>在花括号中使用表达式{`1+1=${1+1}`}</p>
            </div>
        )
    }
    componentDidMount() {
        // 挂载完组件后执行该部分
    }
}