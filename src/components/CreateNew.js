import React, { Component } from "react";
import { observable, action ,computed} from "mobx";
import {observer, inject} from 'mobx-react';
import {AppState} from "./AppState";
import {client} from '../axios'
import {toJS} from 'mobx'

@inject('appState')
@observer
class CreateNew extends React.Component {
 @observable newObj = {
    name:"",
    desc:""
  };
   
  render() {
    return (
      <div className = "create-form">
        <form  onSubmit={this.handleFormSubmit}>
        <label for="fname"> Name</label>
        <input
            type="text"
            value={this.newObj.name}
            onChange={this.handleInputChange}
          />
          <label for="fname">Description</label>
          <input
            type="text"
            value={this.newObj.desc}
            onChange={this.handleInputDescChange}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }

  @action
  handleInputChange = e => {   
      this.newObj.name = e.target.value ;
      this.props.appState.handlingInput()      
      this.props.appState.myValue.name = this.newObj.name;

  };
  @action
  handleInputDescChange = e => {   
      this.newObj.desc = e.target.value ;
      this.props.appState.myValue.desc = this.newObj.desc;
      this.props.appState.handlingInput();

  };


  @action
  handleFormSubmit = e => {
    console.log("fef", this.newObj.name);
    this.props.appState.addNewItem(toJS(this.newObj),e)
     this.props.appState.key = ! this.props.appState.key
      this.newObj.name =""
      this.newObj.desc =""      
     this.props.appState.myValue = toJS(this.props.appState.myValue )
     e.preventDefault(); 
  };
}

export default CreateNew;
