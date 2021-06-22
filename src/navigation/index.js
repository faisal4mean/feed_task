import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {Feed, CreateFeed} from '../screens';
export const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Feed} />
                <Route exact path='/CreateFeed' component={CreateFeed} />
            </Switch>
        </BrowserRouter>
    );
};
