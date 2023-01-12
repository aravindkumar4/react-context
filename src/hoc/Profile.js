import React from 'react';
import WithAuthentication from './WithAuthentication';

function Profile(){
    return <div>profile logged in ...</div>
}

export default WithAuthentication(Profile)