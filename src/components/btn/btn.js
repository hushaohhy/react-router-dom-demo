import React, { Component } from 'react';
import './btn.scss'

export default class BtnCommon extends Component{
    constructor(props) {
        super(props)

    }
    componentWillMount() {

    }

    render() {
        return (
            <div className="btn-common">
              <button>这是btn组件</button>
            </div>
        )
    }
}