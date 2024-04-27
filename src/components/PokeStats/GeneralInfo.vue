<script setup>

import {Icon} from "@iconify/vue";
import StracturesFlex from "../StracturesFlex.vue";
import Grid from "../Grid.vue";
import {ref} from "vue";

const pokeType = ref({
  normal: "bg-lime-200", fire: "bg-orange-500", water: "bg-blue-500", grass: "bg-green-500", flying: "bg-indigo-400", fighting: "bg-orange-800",
  poison: "bg-purple-600", electric: "bg-yellow-300", ground: "bg-amber-400", rock: "bg-yellow-700", psychic: "bg-pink-700",
  ice: "bg-cyan-300", bug: "bg-lime-500", ghost: "bg-indigo-700", steel: "bg-gray-300", dragon: "bg-violet-800", dark: "bg-purple-900", fairy:"bg-pink-300"
})

defineProps({
  pokeData: {
    type: Object,
    required: true
  },
  weaknesses: {
    type: Set,
    required: true
  }
})



</script>

<template>
  <div class="bg-darkviolet-600 px-10 py-5 rounded-2xl text-white">
    <h3 class="text-sm text-darkviolet-50 font-semibold max-sm:text-center">General Info</h3>
    <StracturesFlex :row="true" class="gap-x-4 text-xs  capitalize">
      <Grid rows="3" columns="1" sm-rows="3" sm-columns="2" class="sm:grid-flow-col  max-sm:justify-items-center justify-items-start items-center max-sm:gap-y-3 w-[100%] max-sm:text-center">
        <div >
          <h4 class="font-semibold text-lg">Height</h4>
          <p class="text-lg ">{{ pokeData.data.height }} Cm</p>
        </div>
        <div>
          <h4 class="font-semibold text-lg">Weight</h4>
          <p class="text-lg ">{{ pokeData.data.weight }} Kg</p></div>
        <div>
          <h4 class="font-semibold text-lg">Gender</h4>
          <div ><Icon class="inline size-8 text-cyan-600" icon="material-symbols:male" /><Icon class="inline size-8 text-rose-500" icon="material-symbols:female"/></div></div>
        <div>
          <h4 class="font-semibold text-lg ">Type</h4>
          <StracturesFlex :row="true" justify="start" items="center" class="gap-x-1">
            <p  v-for="(types,index) in pokeData.data.types" :key="index" :class="pokeType[types.type.name]" class="text-lg px-3 rounded-md font-semibold">
              {{types.type.name}}
            </p>
          </StracturesFlex>
        </div>
        <div>
          <h4 class="font-semibold text-lg ">Abilities</h4>
          <StracturesFlex :row="true"  class="max-sm:justify-center gap-x-1 text-start max-sm:text-center">
            <p class="text-lg text-sky-400 rounded-md capitalize font-semibold">
              {{pokeData.data.abilities[0].ability.name}}
            </p>
          </StracturesFlex>
        </div>
        <div>
          <h4 class="font-semibold text-lg ">Weaknesses</h4>
          <Grid :columns="(weaknesses.size === 1) ? 1 : 2" class="gap-1">
            <div  v-for="(types,ind) in weaknesses" :key="ind"  :class="pokeType[types]" class="text-lg px-3 rounded-md font-semibold text-center">
              {{types}}
            </div>
          </Grid>
        </div>
      </Grid>
    </StracturesFlex>
  </div>
</template>

<style scoped>

</style>