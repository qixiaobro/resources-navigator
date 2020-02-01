import React from 'react';
import {GlobalStyled} from './style'
import store from './store'
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Demo from './pages/demo'


function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyled/>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Demo}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
