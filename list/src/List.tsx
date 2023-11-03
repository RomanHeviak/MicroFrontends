import React from 'react';
import './index.css';

const List = (props: any) => {

    return (
        <div className='content'>
            <div className='mfeName'>Add buttons MFE</div>

            <div className='buttons'>
                <button onClick={props.add}>+1 to list</button>
                <button onClick={props.remove}>-1 from list</button>
            </div>

        </div>
    );
};

export default List;