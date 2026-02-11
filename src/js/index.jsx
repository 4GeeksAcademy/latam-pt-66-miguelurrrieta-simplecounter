import React, { useState, useEffect } from 'react';

function ContadorSimple() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const four = Math.floor(seconds / 1000) % 10;
    const three = Math.floor(seconds / 100) % 10;
    const two = Math.floor(seconds / 10) % 10;
    const one = seconds % 10;

    return (
        <div className='bigCounter'>
            <div className='calendar'>
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className='four'>{four}</div>
            <div className='three'>{three}</div>
            <div className='two'>{two}</div>
            <div className='one'>{one}</div>
        </div>
    );
}

export default ContadorSimple;