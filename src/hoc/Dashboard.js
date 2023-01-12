import React from 'react';
import WithAuthentication from './WithAuthentication';

function Dashboard(){
    return <div>Hey , i am in Dashboard</div>
}

export default WithAuthentication(Dashboard)