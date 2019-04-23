// 该组件是菜鸟教程上的学习内容
import React, { Component } from 'react';

export default class Study extends Component{
    constructor(props) {
        // 组件的建立首先调用该部分
        super(props)
        // 在constructor中是唯一可以直接对state进行设置值的，其它位置只能使用this.setState()
        this.state = {
            arr1:['apple','orange','pear'],// 测试jsx中直接展开数组
            listArr:[
                'list1',
                'list2',
                'list3',
                'list4',
                'list5',
            ],// 测试react中渲染列表
            inputVal:'输入内容后面对应更新',// 测试input的内容
        }
    }
    componentWillMount() {
        // 准备加载组件
    }

    render() {
        // return中的语法就是jsx语法
        return (
            <div className="study" style={styles.study}>
                <p>在花括号中使用表达式{`1+1=${1+1}`}</p>
                <hr/>
                <div>
                    这是注释代码
                    {/*code*/}
                </div>
                <div>
                    这是测试数组的内容：{this.state.arr1}
                </div>
                <div>
                    获得父组件传来的参数：{this.props.pageId}
                </div>
                <div>
                    点击按钮后更改父组件的内容：<button onClick={this.changeFathterComponent.bind(this,'变化后的内容',this.props.buttonCallback)}>更改父组件中button的内容</button>
                </div>
                <div>
                    react中的列表：
                    <ul>
                        {
                            this.state.listArr.map((item,index)=>{
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    react中的表单;
                    <input type="text" value={this.state.inputVal} onChange={this.inputChange.bind(this)}/>
                    {this.state.inputVal}
                </div>
                <div>
                    react中的refs：
                    <input type="text" ref="testInput" defaultValue={`123456456`}/>
                </div>
            </div>
        )
    }
    componentDidMount() {
        // 挂载完组件后执行该部分
        console.log(this.refs.testInput.value)
    }

    changeFathterComponent(text,fun) {
        fun(text)
    }

    // input变化时候调用的方法
    inputChange(event) {
        // console.log(event.target.value)
        this.setState({
            inputVal:event.target.value
        })
    }
}

const styles = {
    study:{
        border:'1px red solid',
        fontSize:'30px',
        color:'#f00'
    }
}