import {Component} from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import { Switch, Route,Router } from 'react-router';
// import { BrowserRouter  } from 'react-router-dom';
import history from './history';
import Empty from './components/Empty';
import App from './App';
  import {AppState} from './components/AppState';
import ItemDetails from './components/ItemDetails';
import CreateNew from './components/CreateNew';
import EditItem from './components/EditItem';




const appState =  new AppState();

// const customHistory = createBrowserHistory(); 
// this is the default behavior
function getConfirmation(message, callback) {
  const allowTransition = window.confirm(message);
  callback(allowTransition);
}
const supportsHistory = 'pushState' in window.history

ReactDOM.render(
  <Provider appState={appState}>
      <Router  history={history}>
        <App>
        <Switch>
          <Route exact path="/" component={Empty} />
          <Route exact path="/new" component={CreateNew} />
          <Route exact path="/:itemId" component={ItemDetails} />
          <Route exact path="/:itemId/edit" component={EditItem} />

        </Switch>
        </App>
        
    </Router>
   </Provider>
  ,
  document.getElementById('root'));