import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const AppRouter = ({ component: Component, path, ...props }: any) => {
  const history = createBrowserHistory();
  debugger;
  return (
    <React.Fragment>
      <Route path={path} render={(props) => <Component {...props} />} {...props} />
      <Redirect to={history.location.pathname} />
    </React.Fragment>
  );
};

export default AppRouter;
