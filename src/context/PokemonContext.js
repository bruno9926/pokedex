import React, { createContext, useState } from "react";

const PokemonContext = createContext();

const initialState = {
    isFetching: false,
    pokemonMap: {},
    selectedPokemonIndex: null
};

const AppProvider = ({children}) => {
    const [state, setState] = useState(initialState);

    const updateState = (value) => {
        setState((prevState)=>({
            ...prevState,
            ...value
        }));
    };

    return <PokemonContext.Provider value={{state, updateState}}>{children}</PokemonContext.Provider>
};

export default AppProvider;
export {PokemonContext};