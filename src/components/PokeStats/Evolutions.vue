<script setup>
import StracturesFlex from "../StracturesFlex.vue";
import Grid from "../Grid.vue";
defineProps({
  name: {
    type: String,
    required: true,
  },
  allPokemon: {
    type: Object,
    required: true,
  },
  evolutions: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div  class="bg-darkviolet-600 px-10 py-5 rounded-2xl text-white mx-5 ">
    <h5 class="text-sm text-darkviolet-50 font-semibold text-center mb-2">Evolutions</h5>
    <Grid :columns="(evolutions.length > 3) ? `3` : evolutions.length" class=" w-auto gap-x-8">
      <StracturesFlex v-if="evolutions.length > 0" :column="true" items="center" justify="center" class="items-center text-center" v-for="(evolveTo,index) in evolutions" :key="index"
      :class="(index + 1 === evolutions.length && evolutions.length>2 && (index+1)%2===0) ? `col-span-3` : null">
        <h3 class="text-sky-500 pb-2 font-bold">#{{`0000`.substring(0, `0000`.length - (allPokemon.data.results.findIndex((value) => value.name === evolveTo) +1).toString().length ) + (allPokemon.data.results.findIndex((value) => value.name === evolveTo) +1).toString()}}</h3>
        <a :class="(evolveTo!==name) ? `cursor-pointer` : `cursor-default`" :href="(evolveTo!==name) ? `/pokedex/${evolveTo}` : `#`" >
          <img :src="`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${`000`.substring(0, `000`.length - (allPokemon.data.results.findIndex((value) => value.name === evolveTo) +1).toString().length ) + (allPokemon.data.results.findIndex((value) => value.name === evolveTo) +1).toString() }.png`"
               :alt="`${evolveTo}_img`" class="size-16 sm:size-28 lg:size-36 xl:size-40 max-[350px]:size-12 inline sm:border-8 sm:rounded-full border-neutral-200 sm:p-3 hover:border-sky-500 hover:scale-105 transition-all duration-300 ease-in">

        </a>
        <p class="text-xs sm:text-lg font-semibold capitalize hover:text-sky-500 transition-all duration-300 ease-in">{{evolveTo.replace('-',' ')}}</p>
      </StracturesFlex>
      <StracturesFlex v-else :column="true" items="center" justify="center" class="items-center text-center">
        <h3 class="text-sky-500 pb-2 font-bold">#{{`0000`.substring(0, `0000`.length - (allPokemon.data.results.findIndex((value) => value.name === name) +1).toString().length) + (allPokemon.data.results.findIndex((value) => value.name === name) +1).toString()}}</h3>
        <div>
          <img :src="`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${`000`.substring(0, `000`.length - (allPokemon.data.results.findIndex((value) => value.name === name) +1).toString().length) + (allPokemon.data.results.findIndex((value) => value.name === name) +1).toString() }.png`"
               :alt="`${name}_img`" class="size-16 sm:size-28 lg:size-36 xl:size-40 max-[350px]:size-12 inline sm:border-8 sm:rounded-full border-neutral-200 sm:p-3 hover:border-sky-500 hover:scale-105 transition-all duration-300 ease-in">
        </div>
        <p class="text-xs sm:text-lg font-semibold capitalize hover:text-sky-500 transition-all duration-300 ease-in">{{name.replace('-',' ')}}</p>
      </StracturesFlex>
    </Grid>
  </div>
</template>

<style scoped>

</style>