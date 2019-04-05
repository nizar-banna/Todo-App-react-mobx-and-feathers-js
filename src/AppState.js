import {observable, computed, action} from 'mobx';
import {client} from './axios'
import React from 'react';
import {toJS} from 'mobx'

export class AppState extends React.Component{
    @observable selected = null;
    @observable items =[];
    @observable key ;
    @observable myValue = {
       name:"",
       d:""
    };
    
    g(){
      return  client.get('/item').then(result => result.data);
    }
    @computed
    get getAllitems() {
       this.g().then(value => this.items.push(...value.data)); 
       return this.items
      }

    @action
    selectedItem(item) {
      this.selected = item;
    }
    @action
    addNewItem(newItem,e){
      this.items.push(newItem);
      toJS(this.myValue);
      this.items.pop();
      client.post('/item', newItem)
    }

    @action
     deleteItem(id){
      this.items.replace(this.items.filter(i => i.id !== id));
      console.log("delete by id", toJS(id))  ;
      client.delete(`/item/ ${id}`)
    }
    @action
    updateItem(newItem){
      client.put(`/item/${newItem.id}`,newItem)      
    }
    @action 
    handlingInput(){
      if(!this.key){  
        this.items.push(this.myValue) ;
        this.myValue.name ="";
          this.myValue.desc ="";
      }
              this.key = true
    }
}
