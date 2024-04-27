<script setup>

import {Icon} from "@iconify/vue";
import StracturesFlex from "../StracturesFlex.vue";
defineProps({
  allPokemon: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <StracturesFlex justify="around" items="start" class="w-[100%] gap-x-4">

    <a :href="(allPokemon.data.results.findIndex(value => value.name === `${name}`) > 0) ?
         `/pokedex/${ allPokemon.data.results[allPokemon.data.results.findIndex(value => value.name === `${name}`)-1].name}`
         : `/pokedex/${allPokemon.data.results[allPokemon.data.results.length-1].name}` "
       class="bg-darkviolet-400 hover:bg-sky-500 w-[100%] py-3 transition duration-300  ease-in rounded-md capitalize text-white align-middle font-semibold text-center"
    >
      <Icon class="inline size-6 rotate-180" icon="material-symbols:expand-circle-right-rounded"/>
      {{(allPokemon.data.results.findIndex(value => value.name === `${name}`) > 0) ?
        allPokemon.data.results[allPokemon.data.results.findIndex(value => value.name === `${name}`)-1].name.replace("-"," ")
        : allPokemon.data.results[allPokemon.data.results.length-1].name.replace("-"," ")

      }}</a>

    <a :href="(allPokemon.data.results.findIndex(value => value.name === `${name}`) < 1023) ?
         `/pokedex/${ allPokemon.data.results[allPokemon.data.results.findIndex(value => value.name === `${name}`)+1].name}`
         : `/pokedex/${allPokemon.data.results[0].name}` "
       class="bg-darkviolet-400 hover:bg-sky-500 w-[100%] py-3 transition duration-300  ease-in rounded-md capitalize text-white align-middle font-semibold text-center">

      {{(allPokemon.data.results.findIndex(value => value.name === `${name}`) < 1023) ?
        allPokemon.data.results[allPokemon.data.results.findIndex(value => value.name === `${name}`)+1].name.replace("-"," ")
        : allPokemon.data.results[0].name.replace("-"," ")}}
      <Icon class="inline size-6" icon="material-symbols:expand-circle-right-rounded"/>
    </a>

  </StracturesFlex>
</template>

<style scoped>

</style>