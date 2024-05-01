<script setup>
import StracturesFlex from "./StracturesFlex.vue";
import {computed, ref, watch} from "vue";
import {pokemonData} from "../composables/pokeapi.js";
import PokeBoxes from "./PokeCards/PokeBoxes.vue";
import SearchAndSort from "./PokeCards/SearchAndSort.vue";

const {getAllPokemonInfo} = pokemonData()

const limit = ref(8)
const pokeData = ref((await getAllPokemonInfo(1024)).data.results);
const search = ref('')
const asc = ref(true)

const filteredPokeData = computed( () => {
  return  (search.value!=='')
      ? (asc.value)
          ? pokeData.value.filter((value) => value.name.toLowerCase().includes(search.value.toLowerCase()))
          : pokeData.value.filter((value) => value.name.toLowerCase().includes(search.value.toLowerCase())).reverse()
      : (asc.value)
          ? pokeData.value.filter((value,index) => index<limit.value)
          : pokeData.value.filter((value,index) => index<limit.value).reverse()
})


</script>

<template>
  <StracturesFlex :column="true" justify="center" items="center" class="gap-y-8 bg-neutral-100 px-14 py-5 rounded-b-2xl mb-10" >
  <SearchAndSort @sortBy="asc=!asc" :asc="asc">
    <template #input><input class="block max-sm:flex-grow text-violet-200 font-light rounded-lg w-1/2 p-1 px-2 outline-0 bg-darkviolet-600 shadow-full shadow-darkviolet-200 focus:shadow-darkviolet-50 transition-all ease-in duration-500"  type="text" v-model.trim="search" placeholder="Search..." /></template>
    {{(asc) ? `ASC` : `DESC`}}
  </SearchAndSort>
    <PokeBoxes :pokeData="filteredPokeData"/>
    <div v-if="search===''">
      <button @click="limit+=8" class="transition-all duration-500 ease-in hover:brightness-150 text-darkviolet-50 bg-darkviolet-600 border-2 border-darkviolet-800 py-0.5 px-2.5 rounded-lg text-base font-semibold">Load More Pokemon</button>
    </div>
  </StracturesFlex>
</template>
<style scoped>

</style>