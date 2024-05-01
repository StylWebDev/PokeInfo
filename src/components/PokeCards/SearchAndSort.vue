<script setup>

import {Icon} from "@iconify/vue";
import StracturesFlex from "../StracturesFlex.vue";
const emit = defineEmits(['sortBy']);
defineProps({
  asc: {
    type: Boolean,
    required: true,
  }
})
</script>

<template>
  <Transition appear enter-from-class="scale-0" appear-active-class="transition-all duration-500 ease-in" enter-active-class="transition-all duration-500 ease-in">
    <StracturesFlex :row="true" :wrap="true" justify="start" items="start" class="w-[100%]">
      <StracturesFlex :wrap="true" :row="true" justify="center" items="center" class="gap-4">
        <h2 class="text-3xl font-extrabold text-rose-900 brightness-125 max-sm:text-center"><Icon class="inline size-10" icon="ic:sharp-catching-pokemon"/> Pokemons</h2>
        <slot name="input"/>
      </StracturesFlex>
      <div class="max-sm:text-center text-right flex-grow">

        <button class="uppercase" @click="emit('sortBy')">
          <slot/>
          <Transition enter-from-class=" opacity-0" enter-active-class="transition-all duration-300 ease-in" leave-to-class="opacity-0 absolute" leave-active-class="transition-all duration-300 ease-out">
            <Icon v-if="asc" class="inline" icon="mdi:sort-ascending"/>
            <Icon v-else class="inline" icon="mdi:sort-descending"/>
          </Transition>
        </button>

      </div>

    </StracturesFlex>
  </Transition>
</template>

<style scoped>

</style>