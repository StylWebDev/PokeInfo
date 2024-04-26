<script setup>

import {Icon} from "@iconify/vue";
import StracturesFlex from "../components/StracturesFlex.vue";
import {onMounted, ref} from "vue";
import Footer from "../components/Footer.vue";

const aboutQuests = ref([
  {question: "What is PokeInfo?", answer: "A web app on which you can find general information about all pokemons."},
  {question: "What information PokeInfo provides about pokemons?", answer: "PokeInfo provides characteristics such as weight, height,type , cries, abilities. It also provides evolutions, stats (such as hp, attack, def etc) and finally weaknesses."},
  {question: "Why i created PokeInfo?", answer: "I created  this website because i wanted to further my skills and knowledge as a web, dev and also because i love the world of pokemon."},

])
const i = ref(0)

onMounted(()=> {
  setInterval(() => {
    (i.value === 2) ? i.value=0 : i.value+=1;
  },5000)
})
</script>

<template>
  <StracturesFlex justify="center" items="center">
    <StracturesFlex :column="true" items="center" justify="center" class=" text-center cursor-default fadeIn gap-y-4 bg-neutral-100 max-sm:px-3 sm:px-16 md:px-20 py-5 rounded-b-2xl mb-10
    w-[70%] max-[400px]:w-screen">

      <Transition appear enter-from-class="opacity-0" appear-active-class="transition-all duration-500 ease-in">
          <h1 class="text-sky-500 md:text-3xl max-md:text-xl font-bold justify-self-start align-middle">
            <Icon class="inline size-16" icon="mdi:pokemon-go"/>
            About PokeInfo</h1>

      </Transition>
        <TransitionGroup move-class="transition-all duration-700 ease-in" enter-from-class="opacity-0 scale-0" enter-active-class="transition-all duration-700 ease-in" leave-to-class="opacity-0 scale-0"  leave-active-class="transition-all duration-700 ease-in" appear appear-active-class="transition-all duration-700 ease-in">
          <hgroup v-for="(about,index) in aboutQuests" :key="index"
                  :class="[(i===index) ? `text-sky-500 scale-105 transition-all duration-1000 ease-in` : `transition-all duration-1000 ease-out`]"
                  class=" break-inside-auto hyphens-auto text-neutral-800 self-start text-start max-lg:self-center max-lg:text-center">
            <h1 class="text-xl font-bold"><Icon class="inline size-4" icon="bi:diamond-fill"/> {{about.question}}</h1>
            <p class="font-semibold">{{about.answer}}</p>
          </hgroup>
        </TransitionGroup>

      <Footer class="mt-6"/>
    </StracturesFlex>
  </StracturesFlex>
</template>

<style scoped>

</style>