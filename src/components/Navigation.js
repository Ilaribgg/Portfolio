import React, { useState } from 'react';
import { Button, TextField, AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, MenuList, ListItemText, Drawer, List, ListItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';

function Navigation() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true); }
    const handleClose = () =>{setOpen(false); } 

        
        return (
            <div>
<AppBar position='static' style={{ color: '#282c34'}}>
          <Toolbar>
            <IconButton onClick={handleOpen} color='#282c34'><AppsIcon /></IconButton>
            <Typography variant='h6' color='#282c34'>Main page</Typography>

          </Toolbar>

        </AppBar>
<Drawer anchor ='left' open={open} onClick={handleClose}>
		  <List component='nav'>
		  	<ListItem button onClick={handleClose} component={Link} to='/'>
		 	 <ListItemIcon><HomeIcon/></ListItemIcon>
			<ListItemText>About Page</ListItemText>
		  </ListItem>

		  <ListItem button onClick={handleClose} component={Link} to='/socialmedia'>
		 	 <ListItemIcon><HomeIcon/></ListItemIcon>
			<ListItemText>Social Media</ListItemText>
		  </ListItem>

		  	<ListItem button onClick={handleClose} component={Link} to='/github'>
		 	 <ListItemIcon><HomeIcon/></ListItemIcon>
			<ListItemText>Github</ListItemText>
		  </ListItem>
</List>
</Drawer>
      </div>

        );
}

export default Navigation;