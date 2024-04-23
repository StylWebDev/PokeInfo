<script setup>

import {Icon} from "@iconify/vue";
import StracturesFlex from "./StracturesFlex.vue";
</script>

<template>
  <StracturesFlex :column="true" justify="center" items="center" class="gap-y-8 bg-neutral-100 px-14 py-5 rounded-b-2xl mb-10" >
    <StracturesFlex :row="true" :wrap="true" justify="start" items="start" class="w-[100%]">
      <StracturesFlex :wrap="true" :row="true" justify="center" items="center" class="gap-4">
        <h2 class="text-3xl font-extrabold text-rose-900 brightness-125 max-sm:text-center"><Icon class="inline size-10" icon="ic:sharp-catching-pokemon"/> Pokemons</h2>
        <input class="block max-sm:flex-grow text-violet-200 font-light rounded-lg w-1/2 p-1 px-2 outline-0 bg-darkviolet-600 shadow-full shadow-darkviolet-200 focus:shadow-darkviolet-50 transition-all ease-in duration-500"  type="text" v-model.trim="search" placeholder="Search..." />
      </StracturesFlex>
      <div class="max-sm:text-center text-right flex-grow">

        <button class="uppercase" @click="asc=!asc">{{(asc) ? `ASC` : `DESC`}}
          <Transition enter-from-class="scale-0 opacity-0" enter-active-class="transition-all duration-500 ease-in" leave-to-class="scale-0 opacity-0" leave-active-class="transition-all duration-500 absolute ease-out">
            <Icon v-if="asc" class="inline" icon="mdi:sort-ascending"/>
            <Icon v-else class="inline" icon="mdi:sort-descending"/>
          </Transition>
        </button>

      </div>
    </StracturesFlex>
    <Icon class="size-40 text-darkviolet-600" icon="svg-spinners:180-ring-with-bg"/>
  </StracturesFlex>
</template>

<style scoped>

</style>