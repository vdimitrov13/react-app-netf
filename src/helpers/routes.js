import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({user, loggedInPath, children, ...restParams}){
    return(
        <Route 
            {...restParams}
            render={() => {
                if(!user){
                    return children;
                }

                if(user){
                    return (
                    <Redirect
                        to={{
                            pathname: loggedInPath,
                        }}
                    />
                )}

            return null;
            }}
        />
    );
}

export function ProtectedRoot({user, children, ...restParams}) {
    return(
        <Route
            {...restParams}
            render={({location}) => {
                if(user){
                    return children;
                }

                if(!user){
                    return(
                        <Redirect
                            to={{
                                pathname: 'signin',
                                state: {from: location },
                            }}
                        />
                    );
                }
                return null;
            }}
        />
    )
}