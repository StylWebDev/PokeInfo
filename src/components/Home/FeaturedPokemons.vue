<script setup>
import StracturesFlex from "../StracturesFlex.vue";
import Grid from "../Grid.vue";
import {pokemonData} from "../../composables/pokeapi.js";
import {onMounted, ref} from "vue";
const {getAllPokemonInfo} = pokemonData()

const pokeData = ref(null)
onMounted(async () => {
  pokeData.value = await getAllPokemonInfo(1024);
})

const nums = ref([Math.ceil(Math.random() * 1024),Math.ceil(Math.random() * 1024) ,Math.ceil(Math.random() * 1024)])
</script>

<template>
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
</template>

<style scoped>

</style>