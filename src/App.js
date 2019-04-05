import React, { Component } from 'react';
import ItemPage from './components/Item-list-page';
import {observer, inject} from 'mobx-react';
import {withRouter } from 'react-router'

@inject('appState')
  @observer
 class App extends Component {
  render() {
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
