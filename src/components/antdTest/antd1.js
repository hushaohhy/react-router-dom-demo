import React, { Component } from 'react';
import {Button} from 'antd'
// import 'antd/dist/antd.css'

export default class Antd1 extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h1>这是测试antd这个Ui框架的页面</h1>
                <Button type="primary">这是按钮</Button>
            </div>
        )
    }
}