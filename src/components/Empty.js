import * as React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Empty extends Component{
  render() {
    return <div className='empty'>
    Select a contact from the list or <Link to='/new'>create a new one</Link>.    </div>;
  }
}