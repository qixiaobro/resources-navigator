import React from 'react';
import 'antd/dist/antd.css';
import {GlobalStyled} from './style'
import store from './store'
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Header from './common/header'
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
            <Route path='/' exact component={GithubPage}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
