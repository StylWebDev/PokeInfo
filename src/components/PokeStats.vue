<script setup>
import {computed, onMounted, ref} from "vue";
import {pokemonData} from "../composables/pokeapi.js";
import StracturesFlex from "./StracturesFlex.vue";
import all_types from '../assets/types.json'
import PrevNextPokemon from "./PokeStats/PrevNextPokemon.vue";
import NameAndCry from "./PokeStats/NameAndCry.vue";
import GeneralInfo from "./PokeStats/GeneralInfo.vue";
import Stats from "./PokeStats/Stats.vue";
import Evolutions from "./PokeStats/Evolutions.vue";
const {getPokeInfo, getAllPokemonInfo, getPokeEvolutions} = pokemonData();

const props = defineProps({
  name: {
    type: String,
    required: true,
  }
});

const pokeData = ref(await getPokeInfo(props.name));
const pokeEvolution = ref(await getPokeEvolutions(1));
const allPokemon = ref(await getAllPokemonInfo(1024));
const weaknessSet = ref(new Set());

const weaknesses = computed(() => {
  pokeData.value.data.types.forEach((type,index) => {
    all_types[type.type.name].defense.double.forEach((weakness) => {
      if (!all_types[type.type.name].attack.double.includes(weakness)
          && ((pokeData.value.data.types.length>1) ? !all_types[pokeData.value.data.types[(index === 1) ? 0 : 1].type.name].attack.double.includes(weakness) : true)
          && weakness!==pokeData.value.data.types[0].type.name) {

        if ((pokeData.value.data.types.length>1)) {
          if ((all_types[pokeData.value.data.types[index].type.name].defense.double.includes(weakness) && !all_types[pokeData.value.data.types[(index === 1) ? 0 : 1].type.name].defense.half.includes(weakness)) ){
            weaknessSet.value.add(weakness) ;
          }
        }
        else {
          weaknessSet.value.add(weakness) ;
        }
      }
    })
  })
  return weaknessSet.value;
})
const evolutions = ref([])

onMounted( async () => {
  let i = 0
  let count = 1
  while (true) {
    if (pokeEvolution.value.data.chain.species.name === props.name) {
      evolutions.value.push(pokeEvolution.value.data.chain.species.name)
      if (pokeEvolution.value.data.chain.evolves_to.length > 0) {
        if (pokeEvolution.value.data.chain.evolves_to.length >1) {
          for (let j=0; j<pokeEvolution.value.data.chain.evolves_to.length; j++) evolutions.value.push(pokeEvolution.value.data.chain.evolves_to[j].species.name)
        }else evolutions.value.push(pokeEvolution.value.data.chain.evolves_to[0].species.name)
          if (pokeEvolution.value.data.chain.evolves_to[0].evolves_to.length > 0) {
            if (pokeEvolution.value.data.chain.evolves_to[0].evolves_to.length>1) {
              for (let q=0; q<pokeEvolution.value.data.chain.evolves_to[0].evolves_to.length; q++) evolutions.value.push(pokeEvolution.value.data.chain.evolves_to[0].evolves_to[q].species.name);
            }
            else evolutions.value.push(pokeEvolution.value.data.chain.evolves_to[0].evolves_to[0].species.name);
          }
          else break;
      }
      else break
      i++;
    }
    else {
      if (pokeEvolution.value.data.chain.evolves_to.length > 0
          && pokeEvolution.value.data.chain.evolves_to[0].species.name === props.name) {

        if (pokeEvolution.value.data.chain.evolves_to.length >1) {
          for (let j=0; j<pokeEvolution.value.data.chain.evolves_to.length; j++) evolutions.value.push(pokeEvolution.value.data.chain.evolves_to[j].species.name)
        }
        else evolutions.value.push(pokeEvolution.value.data.chain.evolves_to[0].species.name)

        if (pokeEvolution.value.data.chain.evolves_to[0].evolves_to.length > 0) {
          if (pokeEvolution.value.data.chain.evolves_to[0].evolves_to.length>1) {
             for (let q=0; q<pokeEvolution.value.data.chain.evolves_to[0].evolves_to.length; q++) pokeEvolution.value.data.chain.evolves_to[0].evolves_to[q].species.name;
          }
          else evolutions.value.push(pokeEvolution.value.data.chain.evolves_to[0].evolves_to[0].species.name);
        }
        else break;

        i++;
        }
    }

    /*
    if (pokeEvolution.value.data.chain.evolves_to.length > 0 ) {
      if (pokeEvolution.value.data.chain.evolves_to[0].evolves_to.length > 0 && pokeEvolution.value.data.chain.evolves_to[0].evolves_to[0].species.name === allPokemon.value.data.results[allPokemon.value.data.results.findIndex(value => value.name === `${props.name}`)+2].name
          || pokeEvolution.value.data.chain.evolves_to[0].evolves_to.length > 0 && pokeEvolution.value.data.chain.evolves_to[0].evolves_to[0].species.name === allPokemon.value.data.results[allPokemon.value.data.results.findIndex(value => value.name === `${props.name}`)+1].name
          || pokeEvolution.value.data.chain.evolves_to[0].evolves_to.length > 0 && pokeEvolution.value.data.chain.evolves_to[0].evolves_to[0].species.name === props.name ) {
        evolutions.value.push(pokeEvolution.value.data.chain.evolves_to[0].evolves_to[0].species.name)
        i++;
      }
    }*/
   if (i===0) pokeEvolution.value = await getPokeEvolutions(count++);
   else break;
  }
})

</script>

<template>
  <StracturesFlex :column="true" justify="center" items="center" class="gap-y-8 bg-neutral-100 sm:px-14 py-5 rounded-b-2xl mb-10 max-sm:w-screen" >
    <PrevNextPokemon :name="props.name" :all-pokemon="allPokemon"/>

    <StracturesFlex :row="true" items="center"  class="max-lg:gap-y-10  lg:gap-x-10 max-lg:flex-col ">
      <NameAndCry :name="props.name" :poke-data="pokeData"/>

      <StracturesFlex :column="true" justify="center" class="gap-y-3 mx-5">
        <GeneralInfo :weaknesses="weaknesses" :poke-data="pokeData"/>
        <Stats :poke-data="pokeData"/>
      </StracturesFlex>

    </StracturesFlex>
    <Evolutions :name="props.name" :evolutions="evolutions" :all-pokemon="allPokemon"/>

  </StracturesFlex>
</template>

<style scoped>

</style>