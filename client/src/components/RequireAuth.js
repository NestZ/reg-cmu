import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const RequireAuth = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => sessionStorage.token ?
    (<Component {...props} />) : (<Redirect to={{pathname : '/', state : { from : props.location }}}/>)} />
);

export default RequireAuth;