<script setup>
import StracturesFlex from "./StracturesFlex.vue";
import Grid from "./Grid.vue";
import {computed, ref, watch} from "vue";
import {pokemonData} from "../composables/pokeapi.js";
import {Icon} from "@iconify/vue";

const {getAllPokemonInfo} = pokemonData()

const limit = ref(8)
const pokeData = ref((await getAllPokemonInfo(limit.value)).data.results);
const pad = ref(`0000`)
const search = ref('')
const asc = ref(true)

watch(limit, async (newVal) => {
  pokeData.value = (asc.value) ? (await getAllPokemonInfo(newVal)).data.results : (await getAllPokemonInfo(newVal)).data.results.reverse();
})

watch(asc, (newVal) => {
  pokeData.value = pokeData.value.reverse();
})

const filteredPokeData = computed( () => {
  return  pokeData.value.filter((value) => value.name.toLowerCase().includes(search.value.toLowerCase()));
})


</script>

<template>
  <StracturesFlex :column="true" justify="center" items="center" class="gap-y-8 bg-neutral-100 px-14 py-5 rounded-b-2xl mb-10" >
    <StracturesFlex :row="true" :wrap="true" justify="start" items="start" class="w-[100%]">
      <StracturesFlex :wrap="true" :row="true" justify="center" items="center" class="gap-4">
        <h2 class="text-3xl font-extrabold text-rose-900 brightness-125 max-sm:text-center"><Icon class="inline size-10" icon="ic:sharp-catching-pokemon"/> Pokemons</h2>
        <input class="block max-sm:flex-grow text-violet-200 font-light rounded-lg w-1/2 p-1 px-2 outline-0 bg-darkviolet-600 shadow-full shadow-darkviolet-200 focus:shadow-darkviolet-50 transition-all ease-in duration-500"  type="text" v-model.trim="search" placeholder="Search..." />
      </StracturesFlex>
      <div class="max-sm:text-center text-right flex-grow">

          <button class="uppercase" @click="asc=!asc">{{(asc) ? `ASC` : `DESC`}}
            <Transition enter-from-class=" opacity-0" enter-active-class="transition-all duration-500 ease-in" leave-to-class=" opacity-0" leave-active-class="transition-all duration-500 absolute ease-out">
              <Icon v-if="asc" class="inline" icon="mdi:sort-ascending"/>
              <Icon v-else class="inline" icon="mdi:sort-descending"/>
            </Transition>
          </button>

      </div>
    </StracturesFlex>

    <Grid columns="2" sm-columns="2" md-columns="2" lg-columns="2" xl-columns="4" class="max-[350px]:grid-cols-1 gap-6">
      <TransitionGroup move-class="transition-all duration-700 ease-in" enter-from-class="opacity-0 scale-0" enter-active-class="transition-all duration-700 ease-in" leave-to-class="opacity-0 scale-0"  leave-active-class="transition-all duration-700 ease-in" appear appear-active-class="transition-all duration-700 ease-in">

        <StracturesFlex :column="true" items="center" v-for="(pokemon,index) in filteredPokeData" :key="index" class=" text-darkviolet-50 bg-darkviolet-600 py-4 rounded-md gap-y-2 hover:scale-105 hover:brightness-125 transition-all ease-in duration-200">
          <RouterLink :to="`/pokedex/${pokemon.name}`" class="mx-4 p-1 max-sm:mx-0 text-center">
            <div>
              <img :src="`https://img.pokemondb.net/artwork/avif/${pokemon.name}.avif`" :alt="pokemon.name+`_img`" class="max-[350px]:size-32 max-sm:size-24 max-sm:inline size-52 rounded-lg" />
              <h3 class="text-xs mt-0.5">PokeID: #{{pad.substring(0, pad.length - (index+1).toString().length) + (index+1).toString()}}</h3>
            </div>
            <p class="capitalize text-white  font-bold text-lg">{{ pokemon.name }}</p>
          </RouterLink>
        </StracturesFlex>
      </TransitionGroup>
    </Grid>
    <div>
      <button @click="limit+=8" class="transition-all duration-500 ease-in hover:brightness-150 text-darkviolet-50 bg-darkviolet-600 border-2 border-darkviolet-800 py-0.5 px-2.5 rounded-lg text-base font-semibold">Load More Pokemon</button>
    </div>
  </StracturesFlex>
</template>
<style scoped>

</style>