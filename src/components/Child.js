import React from 'react';

export default function Child({title, onclick}){
    
    return (
        <>
            <div>{title}</div>
            <button onClick={onclick}>Click IT</button>
        </>
    )
}