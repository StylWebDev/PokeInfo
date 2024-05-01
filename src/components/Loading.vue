<script setup>

import {Icon} from "@iconify/vue";
import StracturesFlex from "./StracturesFlex.vue";
import {onMounted, onUnmounted, ref} from "vue";
const i = ref(0);
const intervalId = ref();
onMounted(() => {
  intervalId.value = setInterval(() => {
  i.value++;
},5000);
});

onUnmounted(() => {
  clearInterval(intervalId.value);
})
</script>

<template>
  <stractures-flex :column="true" justify="center" items="center" class="w-screen">
      <StracturesFlex v-if="i<3" :column="true" justify="center" items="center" class="gap-y-8 bg-neutral-100 px-14 py-16 rounded-b-2xl mb-10  w-[70%] max-sm:w-screen" >
        <hgroup class="text-neutral-800 text-center">
          <h2 class="text-2xl font-bold align-top">Loading Data<Icon icon="svg-spinners:3-dots-bounce" class="inline pt-2 size-6"/></h2>
          <p class="text-lg font-semibold">Please Wait!</p>
        </hgroup>
        <div class="animate-pulse border-4 border-neutral-800 rounded-full">
          <Icon class="size-40  text-rose-700 brightness-125 animate-spin opacity-90" icon="ic:sharp-catching-pokemon"/>
        </div>
      </StracturesFlex>
      <StracturesFlex v-else :column="true" justify="center" items="center" class="gap-y-8 bg-neutral-100 px-14 py-16 rounded-b-2xl mb-10  w-[70%] max-sm:w-screen" >
        <h1 class="md:text-3xl max-md:text-xl font-bold text-center text-darkviolet-800 brightness-150">
          <Icon class="inline size-12 text-rose-900" icon="ic:sharp-catching-pokemon"/>
          Opps... looks like something's missing!</h1>
        <img src="../assets/31.svg" alt="hypno_img" class="size-60">
        <p class=" md:text-2xl max-2xl:text-lg font-semibold text-darkviolet-800" >Sorry but we couldn't find the data you were looking for!</p>
        <RouterLink to="/" class="transition-all duration-500 ease-in hover:brightness-150 text-darkviolet-50 bg-darkviolet-600 border-2 border-darkviolet-800 py-0.5 px-2.5 rounded-lg text-base font-semibold">Back to home</RouterLink>
      </StracturesFlex>
  </stractures-flex>

</template>

<style scoped>

</style>