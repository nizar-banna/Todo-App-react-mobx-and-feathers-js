import * as React from 'react';
import {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {withRouter } from 'react-router'
import {Link} from 'react-router-dom'
import Empty from './Empty';


@inject('appState')
    @observer
 class ItemDetails extends Component {
  onButtonClick(id) {
    // e.stopPropagation();
    this.props.appState.deleteItem(id)
    alert('Confirmation Delete Request');
  }
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
            <TableRow label="name" value={item.name} />
            <TableRow label="desc" value={item.desc} />
          </tbody>
        </table>
        <footer>
          <div className="left">
            <Link to="/new" >Create New</Link>
          </div>
          <div className="right">
            <button  id ="delete_btn" onClick={() => this.onButtonClick(item.id)} >Delete</button>
            <Link to={item.id + '/edit'} >Edit</Link>
          </div>    
        </footer>
      </div>
    )
  }
}

  
function TableRow({label, value}) {
  if (!value) {
    return <tr></tr>;
  }
  return <tr>
            <td>{label}</td>
            <td>{value}</td>
          </tr>
}

ItemDetails.defaultProps={
    item:{id: 1, name: "test", desc: "some info"}
}
export default withRouter (ItemDetails);

