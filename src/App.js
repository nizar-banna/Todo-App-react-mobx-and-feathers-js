import React, { Component } from 'react';
import {Router, Route ,hashHistory,Link } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import { Container } from 'semantic-ui-react';
import Empty from './components/Empty';
import ItemPage from './components/Item-list-page';
import ItemDetails from './components/ItemDetails';
import {observable, computed, action, useStrict} from 'mobx';
import {observer, inject} from 'mobx-react';
import {client} from './axios'
import {AppState} from './components/AppState'
import {withRouter } from 'react-router'
import history from './history';

  @inject('appState')
  @observer
 class App extends React.Component {    
      // g(){
      //   return      
      // } 
      // setItem(value){
      //   // this.props.appState.items.push(...value.data);
      // }
      componentDidMount() {
        // fetch the project Item, once it retrieves resolve the promsie and update the state. 
        // this.g().then(value => this.setItem(value));   
        // return this.props.appState.items;
        // console.log("hiii",this.props.appState.getAllItems); 
      }
 
  render(
  ) {
    return (   
   
    <div className="container">
    <header className="main-header"></header>
    <main>
      <aside>
        {this.props.appState.selectedItem}
      <ItemPage />
      </aside>
      {this.props.children  }
             </main>
  </div>


    );
    
  } 
  
}

export default withRouter(App);
