import React, { createContext, useState } from "react";

const PokemonContext = createContext();
const hola = "d";

const initialState = {
    isFetching: false,
    pokemonList: []
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