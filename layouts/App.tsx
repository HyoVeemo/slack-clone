import React, {FC} from 'react';
import loadable from '@loadable/component';
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from '@pages/Login';
import SignUp from '@pages/SignUp';


const App:FC = () => {
    return (

    <Switch>
        <Redirect exact path="/" to="/login"></Redirect>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={SignUp}></Route>
    </Switch>
    )
}

export default App

