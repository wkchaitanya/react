import { createBrowserHistory } from 'history';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import AppRouter from './App.router';
import './App.scss';
import HeaderContainer from './components/component-header/component-header-container';
import { routes } from './routes/routes';

const App = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <div className='App'>
        <Suspense fallback='Cargando...'>
          <Router>
            <Switch>
              {routes.map((route) => (
                <AppRouter key={route.path} path={route.path} component={route.component} />
              ))}
            </Switch>
          </Router>
        </Suspense>
      </div>
    </React.Fragment>
  );
};

export default withRouter(App);
