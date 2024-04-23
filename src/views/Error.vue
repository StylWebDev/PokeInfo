<script setup>

import {Icon} from "@iconify/vue";
import StracturesFlex from "../components/StracturesFlex.vue";
</script>

<template>
  <StracturesFlex justify="center" items="center">
    <StracturesFlex :column="true" items="center" justify="center" class=" text-center cursor-default fadeIn gap-y-2 bg-neutral-100 max-sm:px-3 sm:px-16 md:px-20 py-5 rounded-b-2xl mb-10 w-auto">
      <h1 class="md:text-3xl max-md:text-xl font-bold justify-self-start text-darkviolet-800 brightness-150">
        <Icon class="inline size-12 text-rose-900" icon="ic:sharp-catching-pokemon"/>
        404 Page Not Found!</h1>
      <img src="../assets/31.svg" alt="hypno_img" class="size-60">
      <p class=" md:text-2xl max-2xl:text-lg font-semibold text-darkviolet-800" >Sorry but we couldn't find the page you were looking for!</p>
      <RouterLink to="/" class="transition-all duration-500 ease-in hover:brightness-150 text-darkviolet-50 bg-darkviolet-600 border-2 border-darkviolet-800 py-0.5 px-2.5 rounded-lg text-base font-semibold">Back to home</RouterLink>
    </StracturesFlex>
  </StracturesFlex>

</template>

<style scoped>

</style>