<script setup>
import {Icon} from "@iconify/vue";
import StracturesFlex from "../StracturesFlex.vue";
</script>

<template>
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
</template>

<style scoped>

</style>