import React from 'react'
import { Router, Route, Redirect} from 'react-router'

import Posts from './posts'
import Contact from './contact'

export default props => (
    <Router>
        <Route path='/' exact component={Posts}/>
        <Route path='/contact' component={Contact}/>
        <Redirect from='*' to='/' />
    </Router>
)