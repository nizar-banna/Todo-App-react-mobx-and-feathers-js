import React from 'react';
import ItemList from './ItemList'
import {observer, inject} from 'mobx-react';
import { toJS,isObservable } from 'mobx';
import List from '@material-ui/core/List';

@inject('appState')   
@observer
 class ItemPage extends React.Component{

     itemsResult() {
        var items = this.props.appState.getAllitems;
        if (!items.length) return [1];
       return toJS(items).map(i => <ItemList item={toJS(i)}/> );

    }
        
    componentDidMount(){
        console.log("page",isObservable(this.props.appState.items))
        console.log("page toJS",toJS(this.props.appState.getAllitems))           
    }
  
    render() {
        return (
            <List style={{maxHeight: '100%', overflow: 'auto'}}>      
            {this.itemsResult()}
            </List>
        )

    }
}
export default ItemPage;