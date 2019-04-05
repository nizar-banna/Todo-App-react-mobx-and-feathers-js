import React, { Component } from "react";
import { observable, action } from "mobx";
import {observer, inject} from 'mobx-react';
import history from '../history';
import Empty from './Empty';

@inject('appState')
@observer
class EditItem extends Component {
    @observable editObj = this.props.appState.selected;
   
  quit() {
    // if (this.props.isNew) {
    // //   return browserHistory.push('/');
    // }
    history.push('/' + this.props.appState.selected.id);
    const old = this.props.appState.items.find(q => q.id === this.editObj.id);    
     this.editObj.name =old.name ;
     this.editObj.desc =old.desc ;  
  }

  save() {
    console.log(this);
    history.push('/' + this.props.appState.selected.id);
    const old = this.props.appState.items.find(q => q.id === this.editObj.id);
    old.name = this.editObj.name;
    old.desc = this.editObj.desc;    
    this.props.appState.updateItem(this.editObj)
  }

  @action
  handleInputChange = e => {   
      this.editObj.name = e.target.value ;
  };
  @action
  handleInputDescChange = e => {   
      this.editObj.desc = e.target.value ;
  };

  render() {
    var item =this.props.appState.selected;
    console.log("i",item);
    
  if (!item) {
    return <Empty/>
  }

    return (
        <div className="details">
        <header>
              <div className="title">
            <h1 className="name">{item.name}</h1>
          </div>
        </header>
        <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input placeholder="name" value={this.editObj.name} onChange={this.handleInputChange}/>
            </td>
          </tr>
          <tr>
            <td>Description</td>
            <td>
              <input placeholder="desc" value={this.editObj.desc} onChange={this.handleInputDescChange}/>
            </td>
          </tr>
        </tbody>
      </table>
      <footer>
      <div className="left">
      </div>
      <div className="right">
        <button onClick={this.quit.bind(this)}>Cancel</button>
        <button type="submit" onClick={this.save.bind(this)}>Save</button>
      </div>
    </footer>
      </div>
    )
  }
}


export default EditItem;
