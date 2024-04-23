<script setup>
import {computed, onMounted, onUnmounted, ref} from "vue";
import {pokemonData} from "../composables/pokeapi.js";
import {Icon} from "@iconify/vue";
import StracturesFlex from "./StracturesFlex.vue";
import Grid from "./Grid.vue";
import all_types from '../assets/types.json'

const {getPokeInfo, getAllPokemonInfo, getPokeEvolutions} = pokemonData();

const props = defineProps({
  name: {
    type: String,
    required: true,
  }
})

const pokeData = ref(await getPokeInfo(props.name));
const pokeEvolution = ref(await getPokeEvolutions(1));
const allPokemon = ref(await getAllPokemonInfo(1024));
const pad = ref(`0000`)

const pokeType = ref({
  normal: "bg-lime-200", fire: "bg-orange-500", water: "bg-blue-500", grass: "bg-green-500", flying: "bg-indigo-400", fighting: "bg-orange-800",
  poison: "bg-purple-600", electric: "bg-yellow-300", ground: "bg-amber-400", rock: "bg-yellow-700", psychic: "bg-pink-700",
  ice: "bg-cyan-300", bug: "bg-lime-500", ghost: "bg-indigo-700", steel: "bg-gray-300", dragon: "bg-violet-800", dark: "bg-purple-900", fairy:"bg-pink-300"
})


const windowHeight = ref(window.innerWidth);

onMounted(() => {
  window.addEventListener('resize', onResize);
});

onUnmounted(() =>{
  window.removeEventListener('resize',onResize);
});

const onResize = () => {windowHeight.value = window.innerWidth};
const test = ref(new Set())

const bern = computed(() => {
  pokeData.value.data.types.forEach((type,index) => {
    all_types[type.type.name].defense.double.forEach((weakness) => {
      if (!all_types[type.type.name].attack.double.includes(weakness)
          && ((pokeData.value.data.types.length>1) ? !all_types[pokeData.value.data.types[(index === 1) ? 0 : 1].type.name].attack.double.includes(weakness) : true)
          && weakness!==pokeData.value.data.types[0].type.name) {

        if ((pokeData.value.data.types.length>1)) {
          if ((all_types[pokeData.value.data.types[index].type.name].defense.double.includes(weakness) && !all_types[pokeData.value.data.types[(index === 1) ? 0 : 1].type.name].defense.half.includes(weakness)) ){
            test.value.add(weakness) ;
          }
        }
        else {
          test.value.add(weakness) ;
        }
      }
    })
  })
  return test.value;
})
const evolutions = ref([])

onMounted( async () => {
  let i = 0
  let count = 1
  while (true) {
    if (pokeEvolution.value.data.chain.species.name.includes(props.name)) {
      evolutions.value.push(pokeEvolution.value.data.chain.species.name)
      i++;
    }
    if ( pokeEvolution.value.data.chain.evolves_to.length > 0) {
      if ( pokeEvolution.value.data.chain.evolves_to[0].species.name.includes(allPokemon.value.data.results[allPokemon.value.data.results.findIndex(value => value.name === `${props.name}`)+1].name)
          || pokeEvolution.value.data.chain.evolves_to[0].species.name.includes(props.name) ) {
        evolutions.value.push(pokeEvolution.value.data.chain.evolves_to[0].species.name)
        i++;}
    }
    if (pokeEvolution.value.data.chain.evolves_to.length > 0 ) {
      if (pokeEvolution.value.data.chain.evolves_to[0].evolves_to.length > 0 && pokeEvolution.value.data.chain.evolves_to[0].evolves_to[0].species.name.includes(allPokemon.value.data.results[allPokemon.value.data.results.findIndex(value => value.name === `${props.name}`)+2].name)
          || pokeEvolution.value.data.chain.evolves_to[0].evolves_to.length > 0 && pokeEvolution.value.data.chain.evolves_to[0].evolves_to[0].species.name.includes(allPokemon.value.data.results[allPokemon.value.data.results.findIndex(value => value.name === `${props.name}`)+1].name)
          || pokeEvolution.value.data.chain.evolves_to[0].evolves_to.length > 0 && pokeEvolution.value.data.chain.evolves_to[0].evolves_to[0].species.name.includes(props.name) ) {
        evolutions.value.push(pokeEvolution.value.data.chain.evolves_to[0].evolves_to[0].species.name)
        i++;
      }
    }
   if (i==0) pokeEvolution.value = await getPokeEvolutions(count++);
   else break;
  }
})

</script>

<template>
  <StracturesFlex :column="true" justify="center" items="center" class="gap-y-8 bg-neutral-100 sm:px-14 py-5 rounded-b-2xl mb-10 " >

    <StracturesFlex justify="around" items="start" class="w-[100%] gap-x-4">

        <a :href="(allPokemon.data.results.findIndex(value => value.name === `${props.name}`) > 0) ?
         `/pokedex/${ allPokemon.data.results[allPokemon.data.results.findIndex(value => value.name === `${props.name}`)-1].name}`
         : `/pokedex/${allPokemon.data.results[allPokemon.data.results.length-1].name}` "
        class="bg-darkviolet-400 hover:bg-sky-500 w-[100%] py-3 transition duration-300  ease-in rounded-md capitalize text-white align-middle font-semibold text-center"
        >
          <Icon class="inline size-6 rotate-180" icon="material-symbols:expand-circle-right-rounded"/>
          {{(allPokemon.data.results.findIndex(value => value.name === `${props.name}`) > 0) ?
             allPokemon.data.results[allPokemon.data.results.findIndex(value => value.name === `${props.name}`)-1].name.replace("-"," ")
            : allPokemon.data.results[allPokemon.data.results.length-1].name.replace("-"," ")

          }}</a>

        <a :href="(allPokemon.data.results.findIndex(value => value.name === `${props.name}`) < 1023) ?
         `/pokedex/${ allPokemon.data.results[allPokemon.data.results.findIndex(value => value.name === `${props.name}`)+1].name}`
         : `/pokedex/${allPokemon.data.results[0].name}` "
           class="bg-darkviolet-400 hover:bg-sky-500 w-[100%] py-3 transition duration-300  ease-in rounded-md capitalize text-white align-middle font-semibold text-center">

          {{(allPokemon.data.results.findIndex(value => value.name === `${props.name}`) < 1023) ?
            allPokemon.data.results[allPokemon.data.results.findIndex(value => value.name === `${props.name}`)+1].name.replace("-"," ")
            : allPokemon.data.results[0].name.replace("-"," ")}}
        <Icon class="inline size-6" icon="material-symbols:expand-circle-right-rounded"/>
        </a>

    </StracturesFlex>


    <StracturesFlex :row="true" items="center"  class="max-lg:gap-y-10  lg:gap-x-10 max-lg:flex-col ">
        <div class="text-center">
          <h2 class="capitalize text-xl text-netral-800 font-semibold mb-4">{{props.name.replace("-"," ")}}
            <span class="inline font-normal text-lg text-neutral-600">#{{pad.substring(0, pad.length - pokeData.data.id.toString().length) + pokeData.data.id.toString()}}</span>
          </h2>
          <img  :src="`https://img.pokemondb.net/artwork/avif/${props.name}.avif`" :alt="props.name+`_img`" class=" max-[350px]:size-[40] max-sm:size-60 max-sm:inline size-80 rounded-xl" />
          <audio controls>
            <source :src="pokeData.data.cries.latest" type="audio/ogg"/>
          </audio>
        </div>

        <StracturesFlex :column="true" justify="center" class="gap-y-3 mx-5">
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
                  <Grid columns="2" class="gap-1">
                    <div  v-for="(types,ind) in bern" :key="ind"  :class="pokeType[types]" class="text-lg px-3 rounded-md font-semibold text-center">
                      {{types}}
                    </div>
                  </Grid>
                </div>
              </Grid>
            </StracturesFlex>
          </div>

          <div class="bg-darkviolet-600 px-10 py-5 rounded-2xl text-white">
            <h3 class="text-sm text-darkviolet-50 font-semibold max-sm:text-center">Stats</h3>
            <StracturesFlex :row="true" justify="around" items="center" class="max-sm:flex-col gap-x-4 max-sm:text-base text-xs text-center">
              <StracturesFlex v-for="(stats,index) in pokeData.data.stats" :key="index" :column="true" justify="center" items="center" class="gap-y-2">
                <h4 class="capitalize text-center w-12 max-sm:w-auto">{{ stats.stat.name.replace("-"," ") }} <span class="max-sm:inline hidden text-yellow-400">{{stats.base_stat}}</span></h4>
                <div class="max-sm:w-[180px] max-[300px]:w-[120px] max-sm:h-[20px] sm:h-[200px] sm:w-[40px] border sm:rotate-180 bg-white rounded-lg">
                  <Transition
                  enter-from-class="h-0" enter-active-class="transition-all duration-500 ease-in"
                  appear appear-class="h-0" appear-active-class="transition-all duration-500 ease-in"
                  >
                    <div class="max-sm:h-[100%] sm:w-[100%] bg-sky-500 rounded-lg" :style="(windowHeight<640) ? {width: `${stats.base_stat/1.8}%`} : {height: `${stats.base_stat/1.8}%`}"/>
                  </Transition>
                </div>
                <p class="sm:inline hidden text-yellow-400">{{stats.base_stat}}</p>
              </StracturesFlex>
            </StracturesFlex>
          </div>
        </StracturesFlex>
    </StracturesFlex>

    <div v-if="evolutions.length > 0"  class="bg-darkviolet-600 px-10 py-5 rounded-2xl text-white mx-5 ">
      <h5 class="text-sm text-darkviolet-50 font-semibold text-center mb-2">Evolutions</h5>
      <Grid :columns="evolutions.length" class=" w-auto gap-x-8">
          <StracturesFlex :column="true" items="center" justify="center" class="items-center text-center" v-for="(evolveTo,index) in evolutions" :key="index">
            <a :href="`/pokedex/${evolveTo}`"  >
              <img :src="`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${`000`.substring(0, `000`.length - (pokeData.data.id+index).toString().length) + (pokeData.data.id + index).toString() }.png`"
                   :alt="`${evolveTo}_img`" class="size-16 sm:size-28 lg:size-36 xl:size-40 max-[350px]:size-12 inline sm:border-8 sm:rounded-full border-neutral-200 sm:p-3 hover:border-sky-500 transition-all duration-300 ease-in">

            </a>
            <p class="text-xs sm:text-lg font-semibold capitalize hover:text-sky-500 transition-all duration-300 ease-in">{{evolveTo.replace('-',' ')}}</p>
          </StracturesFlex>
      </Grid>
    </div>

  </StracturesFlex>
</template>

<style scoped>

</style>