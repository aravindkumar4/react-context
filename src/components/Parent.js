import React, { useState } from 'react';
import Child from './Child';
import PassComponent from './PassComponent';

export default function Parent(){
    const [name, setName] = useState('react')
    const onclick = () => {
        setName('React Js');
    }
    return (
        <PassComponent>
            <Child title={name} onclick={onclick}/>
        </PassComponent> 
    )
}