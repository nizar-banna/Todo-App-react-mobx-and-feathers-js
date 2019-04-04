import React from 'react';
import ItemList from './ItemList'
import {observer, inject} from 'mobx-react';
import {AppState} from './AppState';
import { toJS,isObservable } from 'mobx';

@inject('appState')   
@observer
 class ItemPage extends React.Component{

     itemsResult() {
        var items = this.props.appState.getAllitems;
        var result = [];
        if (!items.length) return [1];
       return toJS(items).map(i => <ItemList item={toJS(i)}/> );
       console.log("page toJS")           
       
    }
        
    componentDidMount(){
        console.log("page",isObservable(this.props.appState.items))
        console.log("page toJS",toJS(this.props.appState.getAllitems))           
    }
  
    render() {
        return (
           this.itemsResult()
        )  

    }
}
export default ItemPage;