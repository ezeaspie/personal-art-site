import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteError from './Error';
import Page from './Page';


class Reader extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/reader' component={RouteError} />
                    <Route path='/reader/:series/:volume/:page' component={Page} />
                </Switch>
            </div>
        );
    }
}


export default Reader;