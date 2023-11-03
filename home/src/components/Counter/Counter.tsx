import React, { useState } from 'react';
import Header from 'header/Header';
import List from 'list/List';

const Counter = () => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(prev => prev + 1);
    }

    const remove = () => {
        setCount(prev => prev - 1);
    }

    return (
        <div style={{'display' : 'flex', 'justifyContent' : 'space-between'}}>
            <Header count={count} />
            <List add={add} remove={remove}/>
        </div>
    );
};

export default Counter;