<script setup>
import {Icon} from "@iconify/vue";
import StracturesFlex from "../components/StracturesFlex.vue";
import {ref} from "vue";
import Footer from "../components/Footer.vue";

const aboutQuests = ref([
  {question: "What is PokeInfo?", answer: "A web app on which you can find general information about all pokemons."},
  {question: "What information PokeInfo provides about pokemons?", answer: "PokeInfo provides characteristics such as weight, height,type , cries, abilities. It also provides evolutions, stats (such as hp, attack, def etc) and finally weaknesses."},
  {question: "Why i created PokeInfo?", answer: "I created  this website because i wanted to further my skills and knowledge as a web, dev and also because i love the world of pokemon."},
  {question: "Why some of the data is missing?", answer: "If some data is missing (i.e evolutions) is probably because of the PokeAPI i am currently using to fetch the data."},
])

const i = ref(0)
const rem = ref(0)

 setInterval(() => {
    (i.value === 3) ? i.value=0 : i.value+=1;
    (i.value <= 4) ? (i.value === 4) ? rem.value=0 : rem.value=i.value : null;
  },5000);
</script>

<template>
  <StracturesFlex justify="center" items="center">
    <StracturesFlex :column="true" items="center" justify="center" class=" text-center cursor-default fadeIn gap-y-4 bg-neutral-100 max-sm:px-3 sm:px-16 md:px-20 py-5 rounded-b-2xl mb-10
    w-[70%] max-sm:w-screen">

      <Transition appear enter-from-class="opacity-0" appear-active-class="transition-all duration-500 ease-in">
          <h1 class="text-sky-500 md:text-3xl max-md:text-xl font-bold justify-self-start align-middle">
            <Icon class="inline size-16" icon="mdi:pokemon-go"/>
            About PokeInfo</h1>
      </Transition>

        <TransitionGroup move-class="transition-all duration-700 ease-in" enter-from-class="opacity-0 scale-0" enter-active-class="transition-all duration-700 ease-in" leave-to-class="opacity-0 scale-0"  leave-active-class="transition-all duration-700 ease-in" appear appear-active-class="transition-all duration-700 ease-in">
          <hgroup @mouseover="i=5" @mouseout="i=rem" v-for="(about,index) in aboutQuests" :key="index"
                  :class="[(i===index) ? `text-sky-500 scale-105 transition-all duration-1000 ease-in` : `transition-all duration-1000 ease-out`]"
                  class=" break-inside-auto hover:text-sky-500 hover:scale-105 hyphens-auto text-neutral-800 self-start text-start max-lg:self-center max-lg:text-center">
            <h1 class="max-sm:text-lg text-xl font-bold"><Icon class="inline size-4" icon="bi:diamond-fill"/> {{about.question}}</h1>
            <p class="max-sm:text-sm font-semibold">{{about.answer}}</p>
          </hgroup>
        </TransitionGroup>

      <Footer class="mt-6"/>
    </StracturesFlex>
  </StracturesFlex>
</template>

<style scoped>

</style>