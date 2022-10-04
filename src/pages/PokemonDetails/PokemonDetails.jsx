import React from 'react';
import { Pokeview } from '../../Pokeview/Pokeview';
import StatBar from './components/StatBar';
import { usePokemon } from '../../hooks/usePokemon';
import './PokemonDetails.scss';

const PokemonDetails = () => {

    const { pokemon } = usePokemon();

    return (
        <>
            {  
                pokemon ? 
                <>
                    <Pokeview />
                    <div className='o-pokemon-details-parent-container'>
                        <h4 className='o-pokemon-details-type-title'>Stats</h4>
                        <div className='o-pokemon-details-stats-container'>
                            {pokemon.stats.map((stat, index) => (
                                <StatBar key={'stat ' + index} name={stat.statName} value={stat.value} fill={stat.value} />
                            ))}
                        </div>
                    </div>
                </>
                : <> No pokemon Selected </>
            }
        </>
    )
}

export default PokemonDetails