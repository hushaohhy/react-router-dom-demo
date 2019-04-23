import React, { Component } from 'react';
import Study from './study'

export default class Page1 extends Component{
    constructor(props) {
        super(props)
        this.state={
            btnText:'goPage2'
        }
    }
    goRouter(url) {
        this.props.history.push({pathname:url,state:{'day':'所传参数'}})
    }
    changeButton(text) {
        console.log(this)
        this.setState({
            btnText:text
        })
    }
    render() {
        return (
            <div>
                <h1>这是page1页面组件</h1>
                <button onClick={this.goRouter.bind(this,'/page2')}>{this.state.btnText}</button>
                <div>
                    这是study的组件
                    <hr/>
                    <Study pageId="123456" buttonCallback={this.changeButton.bind(this)}/>
                </div>
            </div>
        )
    }
}