import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import PokemonInfo from "../views/Pokedex/PokemonInfo.vue";
import About from "../views/About.vue";
import Error from "../views/Error.vue";
import Pokedex from "../views/Pokedex/Pokedex.vue";
import PokeOverview from "../views/Pokedex/PokeOverview.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/pokedex",
        name: "Pokedex",
        component: Pokedex,
        children: [
            {
                path: "",
                name: "PokemonInfo",
                component: PokemonInfo,
            },
            {
                path: ":name",
                name: "PokemonOverview",
                component: PokeOverview,
            }
        ]
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/home",
        redirect: "/",
    },
    {
        path: "/info",
        redirect: "/about",
    },
    {
        path: "/:catchAll(.*)*",
        name: "Error",
        component: Error,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;