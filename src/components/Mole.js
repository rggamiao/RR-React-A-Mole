import React, { useEffect } from 'react';
import moleImg from '../mole.png';

const Mole = (props) => {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000);
        let timer = setTimeout(() => {
            props.toggle(false);
        }, randSeconds);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <img style={{ width: '30vw', cursor: 'pointer' }} src={moleImg} alt="Mole" onClick={props.handleClick} />
        </div>
    );
};

export default Mole;
