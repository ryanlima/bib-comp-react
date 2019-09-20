import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TypoGraphy from '@material-ui/core/Typography'
//import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Home, Book, AccountBox} from '@material-ui/icons'
import { Link } from 'react-router-dom'


export default props => (
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
                    {/* <Link to="/posts">Posts</Link> */}
                    Posts <Book/>
                </TypoGraphy>
            </ListItemText>
            <ListItemText inset>
                <TypoGraphy color="inherit" variant="button" >
                    {/* <Link to="/contact">Contact</Link> */}
                    Contact <AccountBox/>
                </TypoGraphy>
            </ListItemText>
        </ListItem>
    </List>
)