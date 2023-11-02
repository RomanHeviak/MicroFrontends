import React, { useEffect, useState } from 'react';
import './index.css'

const Header = (props: any) => {
    
    return (
        <div className='wrapper'>
            <div className='mfeName'>Header MFE</div>

            <div className='items'>
                Items added: {props.count}
            </div>
           
        </div>
    );
};

export default Header;