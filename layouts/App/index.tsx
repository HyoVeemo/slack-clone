import React, { FC } from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';

const Login = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Channel = loadable(() => import('@pages/Channel'));

const Index: FC = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login"></Redirect>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/workspace/channel" component={Channel}></Route>
    </Switch>
  );
};

export default Index;
