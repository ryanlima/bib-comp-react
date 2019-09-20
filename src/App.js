// import React, { Component} from 'react';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'

import './App.css'

import Posts from './posts';
import Contact from './contact';
import Main from './Main/main';
import Notfound from './notfound';

// // import AppBar from '@material-ui/core/AppBar'
// // import Toolbar from '@material-ui/core/Toolbar'
 import TypoGraphy from '@material-ui/core/Typography'
// // import List from '@material-ui/core/List'
// // import ListItem from '@material-ui/core/ListItem'
// // import ListItemText from '@material-ui/core/ListItemText'


// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
 import { Home, Book, AccountBox} from '@material-ui/icons'


// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default class App extends Component {
  
//   render(){
//     const classes = useStyles();

//     return (
//       <Router>
//         <div>
//             <AppBar color="primary" position="static">
//                 <Toolbar>
//                   <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//                     <MenuIcon />
//                   </IconButton>
//                   <Typography variant="h6" className={classes.title}>
//                    News
//                   </Typography>
//                   <Button color="inherit">Login</Button>


//                     {/* <TypoGraphy variant="h5" color="inherit" > My Header </TypoGraphy>
//                     <List component="nav" >
//                         <ListItem component="div">
//                             <ListItemText inset>
//                                 <TypoGraphy color="inherit" variant="button" >
//                                     <Link className="menu-item" to="/">
//                                       Home<Home/>
//                                       </Link>
//                                 </TypoGraphy>
//                             </ListItemText>
//                             <ListItemText inset>
//                                 <TypoGraphy color="inherit" variant="button" >
//                                     <Link className="menu-item" to="/posts">
//                                       Posts <Book/>
//                                     </Link>
//                                 </TypoGraphy>
//                             </ListItemText>
//                             <ListItemText inset>
//                                 <TypoGraphy color="inherit" variant="button" >
//                                     <Link className="menu-item" to="/contact">
//                                       Contact <AccountBox/>
//                                     </Link>
//                                 </TypoGraphy>
//                             </ListItemText>
//                         </ListItem>
//                     </List> */}
//                 </Toolbar>
//             </AppBar>
//             <Switch>
//               <Route exact path="/" component={Main} />
//               <Route path="/posts" component={Posts} />
//               <Route path="/contact" component={Contact} />
//               <Route component={Notfound}/>
//             </Switch>
//         </div>
//       </Router>
//     )
//   }
// }
// // export default props => (
// //   <div>
// //     <h1>App component</h1>
// //   </div>
// // )



// // import React, { Component} from 'react';
// // import AppBar from '@material-ui/core/AppBar'
// // import Toolbar from '@material-ui/core/Toolbar'
// // import TypoGraghy from '@material-ui/core/Typography'

// // import NavBar from './navbar'
// // import Posts from './posts'

// // class App extends Component{
// //   render(){
// //     return (
// //       <div>
// //         <AppBar color="primary" position="static">
      

// //           <Toolbar>

// //             <TypoGraghy variant="title" color="inherit" > My Jaynara</TypoGraghy>
// //             <NavBar/>

// //           </Toolbar>
// //         </AppBar>
// //         <Posts/>
        
// //       </div>
// //     )
// //   }
// // }


// // export default App;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function MenuAppBar() {
//   const classes = useStyles();
//   const [auth, setAuth] = React.useState(true);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   function handleChange(event) {
//     setAuth(event.target.checked);
//   }

//   function handleMenu(event) {
//     setAnchorEl(event.currentTarget);
//   }

//   function handleClose() {
//     setAnchorEl(null);
//   }

//   return (
//     <div className={classes.root}>
//       <FormGroup>
//         <FormControlLabel
//           control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
//           label={auth ? 'Logout' : 'Login'}
//         />
//       </FormGroup>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             Photos
//           </Typography>
//           {auth && (
//             <div>
//               <IconButton
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={open}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleClose}>Logout</MenuItem>
//               </Menu>
//             </div>
//           )}
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Logout from './Login/logout'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Bib Comp
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link className="menu-item" to="/">
              <ListItem button>
                <ListItemIcon><Home/></ListItemIcon>
                <ListItemText >
                    <TypoGraphy color="inherit" variant="button" >
                      Home
                    </TypoGraphy>
                </ListItemText>
              </ListItem>
            </Link>
            <Link className="menu-item" to="/posts">
              <ListItem button>
                <ListItemIcon><Book/></ListItemIcon>
                <ListItemText >
                    <TypoGraphy color="inherit" variant="button" >
                      Posts
                    </TypoGraphy>
                </ListItemText>
              </ListItem>
            </Link>
            <Link className="menu-item" to="/contact">
              <ListItem button>
                  <ListItemIcon><AccountBox/></ListItemIcon>  
                  <ListItemText >
                      <TypoGraphy color="inherit" variant="button" >
                        Contact
                      </TypoGraphy>
                  </ListItemText>
              </ListItem>
            </Link>
          </List>
          <Divider/>
          <List>
            <Link className="menu-item" to="/logout">
              <ListItem button>
                <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                <ListItemText >
                    <TypoGraphy color="inherit" variant="button" >
                      Logout
                    </TypoGraphy>
                </ListItemText>
              </ListItem> 
            </Link>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/posts" component={Posts} />
            <Route path="/contact" component={Contact} />
            <Route path="/logout" component={Logout} />
            <Route component={Notfound}/>
          </Switch>
        </main>
      </Router>
    </div>
  );
}