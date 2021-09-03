import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>

                <div className='container'>
                    <Switch>
                        <Route exact path="/about" component={ AboutScreen }/>
                        <Route exact path="/login" component={ LoginScreen }/>
                        <Route exact path="/" component={ HomeScreen }/>

                        {/* <Route  component={ HomeScreen }/> 404 */}
                        <Redirect to="/" /> {/*404/*/}
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
