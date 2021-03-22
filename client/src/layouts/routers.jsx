import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageRender from './PageRender'

export default function routers() {
    return (
        <Router>
            <Switch>
                <Route exact path="/:page" component={ PageRender } />
                <Route exact path="/:page/:id" component={ PageRender } />
            </Switch>
        </Router>
    )
}
