<script setup>

import StracturesFlex from "../StracturesFlex.vue";
import Grid from "../Grid.vue";
import {ref} from "vue";
const pad = ref(`0000`)

defineProps({
  pokeData: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <Grid columns="2" sm-columns="2" md-columns="2" lg-columns="2" xl-columns="4" class="max-[350px]:grid-cols-1 gap-6">
    <TransitionGroup move-class="transition-all duration-700 ease-in" enter-from-class="opacity-0 scale-0" enter-active-class="transition-all duration-700 ease-in" leave-to-class="opacity-0 scale-0"  leave-active-class="transition-all duration-700 ease-in" appear appear-active-class="transition-all duration-700 ease-in">

      <StracturesFlex :column="true" items="center" v-for="(pokemon,index) in pokeData" :key="index" class=" text-darkviolet-50 bg-darkviolet-600 py-4 rounded-md gap-y-2 hover:scale-105 hover:brightness-125 transition-all ease-in duration-200">
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
</template>

<style scoped>

</style>