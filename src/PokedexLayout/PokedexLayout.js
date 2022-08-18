import React from 'react';
import './PokedexLayout.css';
import HomeIcon from '../Icons/home.png';
import { Light } from './components/Light/Light';

function PokedexLayout() {

    return (
        <div className='j-pokedexLayout-background'>
            <div className='j-pokedexLayout-left-side'>
                <div className='j-pokedexLayout-rounded-button-container'>
                    <a className='j-pokedexLayout-rounded-home-button' href='iradondesea.com'>
                        <img src={HomeIcon} className='j-home-icon' alt='Home icon'/>
                    </a>
                </div>
                <div className='j-light-content'>
                    <Light/>
                    <Light/>
                </div>
            </div>
            <div className='j-pokedexLayout-bottom'></div>
            <div className='j-pokedexLayout-top'></div>
            <div className='j-pokedexLayout-right-side'></div>
            <div className='j-pokedexLayout-center-screen'>
                <div className='j-pokedexLayout-screen'>
                    
                </div>
                <div className='j-pokedexLayout-button-container'>
                    <button className='j-pokedexLayout-button'>BACK</button>
                    <button className='j-pokedexLayout-button'>SELECT</button>
                </div>
            </div>
        </div>
    );
}

export { PokedexLayout };