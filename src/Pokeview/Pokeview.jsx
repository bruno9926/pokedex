import React from 'react';
import './Pokeview.scss';
import pokemon from '../Icons/Eevee.png';
import Type from './components/Type';

const Pokeview = () => {

    return (
        <div className='j-pokeview-welcome'>
            <div className='j-pokeview-container'>
                <img alt='Selected Pokemon' src={pokemon}></img>
                <div className='j-pokeview-type-container'>
                    <Type type='bug'/>
                    <Type type='rock'/>
                </div>
            </div>
        </div>
    );
}

export {Pokeview};