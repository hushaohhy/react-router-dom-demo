import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import AppRouter from './router/router'
import './services/http'
import './services/httpConfig'
import './common/reset.scss'
import 'normalize.css'

// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// 第二个工具是connect，稍后会作介绍
import {Provider} from 'react-redux'

// 引入创建好的store实例
import store from './store/index'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              {/* 将store作为prop传入，即可使应用中的所有组件使用store */}
              <Provider store={store}>
                  {
                      AppRouter.map((route,key) => {
                          if(route.exact) {
                              // 严格模式返回
                              return(
                                  <Route exact
                                         key={key}
                                         path={route.path}
                                         render={props => (
                                             //主要是为了传递嵌套路由到子组件
                                             //类似于 <User {...props} routes={route.routes} />
                                             <route.component {...props} routes={route.routes} />
                                         )}
                                  />
                              )
                          }else {
                              return(
                                  <Route
                                      key={key}
                                      path={route.path}
                                      render={props => (
                                          //主要是为了传递嵌套路由到子组件
                                          //类似于 <User {...props} routes={route.routes} />
                                          <route.component {...props} routes={route.routes} />
                                      )}
                                  />
                              )
                          }
                      })
                  }
              </Provider>
          </div>
        </Router>
    );
  }
}

export default App;
