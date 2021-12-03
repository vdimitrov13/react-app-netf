import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';
import { IsUserRedirect, ProtectedRoot } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App(){
  const user = useAuthListener();

  return (
    <Router>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
        <Signin/>
      </IsUserRedirect>
      
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
        <Signup/>
      </IsUserRedirect>
      
      <ProtectedRoot user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoot>

      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
        <Home/>
      </IsUserRedirect>
    </Router>
  );
}