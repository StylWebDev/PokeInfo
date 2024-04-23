import axios from 'axios';

export const pokemonData = () => {
    const getPokeInfo = async (pokemon) => {
        try {
            return await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        } catch (e) {
            return { error: e }
        }
    }

    const getAllPokemonInfo =  async (limit=8) => {
        try {
            return await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        } catch (e) {
            return { error: e }
        }
    }

    const getPokeEvolutions =  async (id) => {
        try {
            return await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
        } catch (e) {
            return { error: e }
        }
    }
    const getWeaknesses =  async (pokemon) => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/type/${pokemon}/`);
            return res.data
        } catch (e) {
            return { error: e }
        }
    }

    return {getPokeInfo,getAllPokemonInfo,getPokeEvolutions,getWeaknesses}
}

