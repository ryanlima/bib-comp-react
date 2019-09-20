import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { Home, Book, AccountBox} from '@material-ui/icons'
import { Link } from 'react-router-dom'

import NavBar from './navbar'

export default props => (
    <div>
        <AppBar color="primary" position="static">
        <Toolbar>
            <TypoGraphy variant="h5" color="inherit" > My Header </TypoGraphy>
            <List component="nav" >
                <ListItem component="div">
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="button" >
                            <Link to="/">Home</Link>
                            <Home/>
                        </TypoGraphy>
                    </ListItemText>
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="button" >
                            <Link to="/posts">Posts</Link>
                            Posts <Book/>
                        </TypoGraphy>
                    </ListItemText>
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="button" >
                            <Link to="/contact">Contact</Link>
                            Contact <AccountBox/>
                        </TypoGraphy>
                    </ListItemText>
                </ListItem>
            </List>
        </Toolbar>
        </AppBar>
    </div>

)
