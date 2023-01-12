import React from 'react';
import Dashboard from './hoc/Dashboard';
import Profile from './hoc/Profile';
function Hoc() {
    return (
        <div className='App'>
            Higher order component
            <Profile />
            <Dashboard /> 
        </div>
    )
}
export default Hoc;