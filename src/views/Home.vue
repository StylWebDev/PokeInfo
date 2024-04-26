<script setup>

import {Icon} from "@iconify/vue";
import StracturesFlex from "../components/StracturesFlex.vue";
import {pokemonData} from "../composables/pokeapi.js";
import {onMounted, ref} from "vue";
import Grid from "../components/Grid.vue";
const pokeData = ref(null)
const {getAllPokemonInfo} = pokemonData()
onMounted(async () => {
  pokeData.value = await getAllPokemonInfo(1024);
})
const nums = ref([Math.ceil(Math.random() * 1024),Math.ceil(Math.random() * 1024) ,Math.ceil(Math.random() * 1024)])
</script>

<template>
  <StracturesFlex justify="center" items="center">
    <StracturesFlex :column="true" items="center" justify="center" class=" text-center cursor-default fadeIn gap-y-4 bg-neutral-100 max-sm:px-3 sm:px-16 md:px-20 py-5 rounded-b-2xl mb-10
    w-[70%] max-[400px]:w-screen">

      <Transition appear enter-from-class="opacity-0" appear-active-class="transition-all duration-500 ease-in">
        <hgroup>
          <h1 class="md:text-3xl max-md:text-xl font-bold justify-self-start text-neutral-800 brightness-150">
            <Icon class="inline size-16 text-rose-900" icon="ic:twotone-catching-pokemon"/>
            PokeInfo</h1>
          <p class="text-neutral-800 md:text-xl max-md:text-lg">Welcome to PokeInfo! A Website Were you can explore the world of pokemon!</p>
        </hgroup>
      </Transition>

      <Transition appear enter-from-class="scale-0 opacity-0" appear-active-class="transition-all duration-500 ease-in">
        <StracturesFlex :column="true" justify="center" items="center" class="gap-y-6 z-50">
          <RouterLink to="/pokedex"
                      class=" font-bold text-neutral-800 hover:text-white relative overflow-hidden bg-orange-600 max-[300px]:w-screen sm:w-[400px] md:w-[475px] lg:w-[600px] xl:w-[800px] 2xl:w-[900px] min-[500px]:w-[300px] min-[400px]:w-[275px] min-[300px]:w-[275px] py-7 rounded-xl
                    hover:scale-110 hover:shadow-full hover:shadow-orange-400 transition-all duration-300 ease-in ">
            <Icon class="absolute max-xl:size-20 xl:size-24 -left-8 -top-7 z-10 -rotate-45" icon="ic:baseline-catching-pokemon"/> Pokédex
            <Icon class="absolute size-24 -right-7 top-7 z-10 rotate-6" icon="arcticons:pokemon-sleep"/>
          </RouterLink>
          <RouterLink to="/About"
                      class="font-bold text-neutral-800 hover:text-white  relative overflow-hidden bg-sky-500 max-[300px]:w-screen sm:w-[400px] md:w-[475px] lg:w-[600px] xl:w-[800px] 2xl:w-[900px] min-[500px]:w-[300px] min-[400px]:w-[275px] min-[300px]:w-[275px] py-7 rounded-xl
                     hover:scale-110 hover:shadow-full hover:shadow-sky-400 transition-all duration-300 ease-in ">
            <Icon class="absolute max-xl:size-20 xl:size-24 -left-7 -top-2 z-10 " icon="clarity:help-info-solid"/>
            About
            <Icon class="absolute size-24 -right-10 top-1 z-10 rotate-12" icon="mdi:pokemon-go"/>
          </RouterLink>
        </StracturesFlex>
      </Transition>

      <StracturesFlex :column="true" items="center" justify="center" class="gap-y-4">
        <p class="text-lg text-neutral-700 font-bold">Featured Pokemons</p>
        <Grid v-if="pokeData!=null" sm-columns="2" md-columns="2" xl-columns="3" columns="2" class="gap-4 max-[350px]:grid-cols-1">
          <TransitionGroup appear enter-from-class="scale-0 opacity-0" appear-active-class="transition-all duration-500 ease-in">
            <StracturesFlex :column="true" items="center" v-for="(num,index) in nums" :key="index" :class="(index===2) ? `max-[350px]:cols-span-1 min-[350px]:col-span-2 xl:col-span-1` : null"  class="text-darkviolet-50 bg-darkviolet-600 px-4 py-4 rounded-md gap-y-1 hover:scale-105 hover:brightness-125 transition-all ease-in duration-200">
              <RouterLink :to="`/pokedex/${pokeData.data.results[num].name}`" class=" p-1 max-sm:mx-0 text-center">
                <div>
                  <img :src="`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${`000`.substring(0, `000`.length - (num+1).toString().length) + (num+1).toString() }.png`" :alt="pokeData.data.results[num].name+`_img`"
                       class="max-[350px]:size-32 max-sm:size-24 max-sm:inline size-36 rounded-lg " />
                </div>
                <p class="capitalize  font-bold text-lg">{{ pokeData.data.results[num].name }}</p>
              </RouterLink>
            </StracturesFlex>
          </TransitionGroup>
        </Grid>
      </StracturesFlex>

    </StracturesFlex>
  </StracturesFlex>

</template>

<style scoped>

</style>