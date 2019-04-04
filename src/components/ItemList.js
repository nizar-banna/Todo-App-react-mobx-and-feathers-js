import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import history from '../history';
import {observer, inject} from 'mobx-react';
import {AppState} from './AppState';
import { Link  } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '10%',
    maxWidth: 100,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

@inject('appState')
@observer
 class ItemList extends React.Component {
  selectItem() {
    history.push('/' + this.props.item.id);
    this.props.appState.selectedItem(this.props.item);
    console.log("Selected",this.props.item);  
  }
    render(){
      
      return (      
        <ListItem alignItems="flex-start" button onClick={this.selectItem.bind(this)} >
        <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="player.jpg" />
          </ListItemAvatar>
  
          <ListItemText
            primary={this.props.item.name}
            secondary={
              <React.Fragment>
                <Typography component="span"  color="textPrimary">
                </Typography>
                {this.props.item.desc}
              </React.Fragment>
            }
          />
        </ListItem>
    );}
      



 }
export default withStyles(styles)(ItemList);