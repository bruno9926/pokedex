import React, { useContext } from 'react';
import './PokedexLayout.scss';
import HomeIcon from '../Icons/home.png';
import { Light } from './components/Light/Light';
import { usePokemon } from '../hooks/usePokemon';
import { useNavigate } from "react-router-dom";
import { PokemonContext } from '../context/PokemonContext';


function PokedexLayout(props) {

    let navigate = useNavigate();
    const {pokemon, setPokemon} = usePokemon();
    const { updateState } = useContext(PokemonContext);

    const goBack = () => {
        setPokemon(null);
        updateState({
            selectedPokemonIndex: 0
        })
        navigate('/home');
    }

    const goStats = () => {
        if(pokemon) {
            navigate('/stats');
        }
    }

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
                    {props.children}
                </div>
                <div className='j-pokedexLayout-button-container'>
                    <button className='j-pokedexLayout-button'
                        onClick={goBack}>BACK</button>
                    <button className='j-pokedexLayout-button'
                        onClick={goStats}>
                    SELECT</button>
                </div>
            </div>
        </div>
    );
}

export { PokedexLayout };