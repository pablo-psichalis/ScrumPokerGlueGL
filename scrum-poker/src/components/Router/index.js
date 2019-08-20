
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from '../../layouts/App'
import Home from '../../views/HomeView'
import Voting from '../../views/VotingView'
import Loading from '../../views/LoadingView'
import Results from '../../views/ResultsView'

import NotFound from '../NotFound'

const Router = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/voting" component={Voting} />
                <Route path="/loading" component={Loading} />
                <Route path="/results" component={Results} />
                <Route component={NotFound} />
            </Switch>
        </App>
    </BrowserRouter>
)

export default Router