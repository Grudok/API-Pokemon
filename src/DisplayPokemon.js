import React from "react";
import Pokemon from "./Pokemon";

const DisplayPokemon = ({ pokemon }) => {



    return (
        <div>
            {
                pokemon.map((value, index) =>
                   <Pokemon key={index} thisPokemon={value}/>
                )
            }
        </div>
    )
}

export default DisplayPokemon;