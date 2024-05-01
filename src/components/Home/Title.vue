<script setup>
import {Icon} from "@iconify/vue";
</script>

<template>
  <Transition appear enter-from-class="scale-0" appear-active-class="transition-all duration-500 ease-in">
    <hgroup>
      <h1 class="md:text-3xl max-md:text-xl font-bold justify-self-start text-neutral-800 brightness-150">
        <Icon class="inline size-16 text-rose-900" icon="ic:twotone-catching-pokemon"/>
        PokeInfo</h1>
      <p class="text-neutral-800 md:text-xl max-md:text-lg">Welcome to PokeInfo! A Website Were you can explore the world of pokemon!</p>
    </hgroup>
  </Transition>
</template>

<style scoped>

</style>