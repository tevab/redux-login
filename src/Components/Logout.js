import React from 'react';
import './Logout.css';

function Logout() {
    return (
        <div>
            <h1>
                Welcome <span className='user__name'>Teva</span>
                <button className='logout__button'>Logout</button>
            </h1>
        </div>
    );
}

export default Logout;
