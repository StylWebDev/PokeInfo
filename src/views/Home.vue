<script setup>
import StracturesFlex from "../components/StracturesFlex.vue";
import Title from "../components/Home/Title.vue";
import Sections from "../components/Home/Sections.vue";
import FeaturedPokemons from "../components/Home/FeaturedPokemons.vue";
</script>

<template>
  <StracturesFlex justify="center" items="center">
    <StracturesFlex :column="true" items="center" justify="center" class=" text-center cursor-default fadeIn gap-y-4 bg-neutral-100 max-sm:px-3 sm:px-16 md:px-20 py-5 rounded-b-2xl mb-10 w-[70%] max-sm:w-screen">
      <Title/>
      <Sections/>
      <FeaturedPokemons/>
    </StracturesFlex>
  </StracturesFlex>
</template>

<style scoped>

</style>