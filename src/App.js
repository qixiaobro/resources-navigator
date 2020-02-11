/*
 * @Author: Do not edit
 * @Date: 2020-02-10 08:51:27
 * @LastEditors  : zxd
 * @LastEditTime : 2020-02-11 11:10:27
 * @FilePath: \resources-navigator\src\App.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import {GlobalStyled} from './style'
import store from './store'
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Header from './common/header'
import Resources from './pages/Resources'
import GithubPage from './pages/GithubPage'
// import Demo from './pages/demo'


function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyled/>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='/' exact component={Resources}></Route>
            <Route path='/github' exact component={GithubPage}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
