import React, { FC } from 'react';
import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';
import SWRDevtools from '@jjordy/swr-devtools';

const Login = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const WorkSpace = loadable(() => import('@layouts/Workspace'));

const Index: FC = () => {
  return (
    <SWRDevtools>
      <Switch>
        <Redirect exact path="/" to="/login"></Redirect>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/workspace/:workspace" component={WorkSpace}></Route>
      </Switch>
    </SWRDevtools>
  );
};

export default Index;
