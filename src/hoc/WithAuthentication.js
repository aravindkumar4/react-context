import React from 'react';

const isAuthenticated = true;

export default function WithAuthentication(Component){
    return function(){
        if(!isAuthenticated){
            return <h1>user is not valid</h1>
        }
        return <Component />
    }
}