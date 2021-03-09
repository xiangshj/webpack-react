import React, { Component,Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './pages/404';
import {list} from './routes';
import {routeItem} from './untils/routeMap'
import store from './store/index'
import { Provider } from 'react-redux';
class App extends Component{
  render(){
    return(
      <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        
        <Router>
          <Switch>
          {list.map(route => {
            return routeItem(route)
            })}
  38      <Route component={NotFound} />
          </Switch>
      </Router>
    
    </Suspense>
    </Provider>
    );
  }
}

export default App;