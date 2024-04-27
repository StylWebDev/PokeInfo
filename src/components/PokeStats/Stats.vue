<script setup>
import StracturesFlex from "../StracturesFlex.vue";

defineProps({
  pokeData: {
    type: Object,
    required: true
  },
})
</script>

<template>
  <div class="bg-darkviolet-600 px-10 py-5 rounded-2xl text-white">
    <h3 class="text-sm text-darkviolet-50 font-semibold max-sm:text-center">Stats</h3>
    <StracturesFlex :row="true" justify="around" items="center" class="max-sm:flex-col gap-x-4 max-sm:text-base text-xs text-center">
      <StracturesFlex v-for="(stats,index) in pokeData.data.stats" :key="index" :column="true" justify="center" items="center" class="gap-y-2">
        <h4 class="capitalize text-center w-12 max-sm:w-auto">{{ stats.stat.name.replace("-"," ") }} <span class="max-sm:inline hidden text-yellow-400">{{stats.base_stat}}</span></h4>
        <div class="max-sm:w-[180px] max-[300px]:w-[120px] max-sm:h-[20px] sm:h-[200px] sm:w-[40px] border sm:rotate-180 bg-white rounded-lg">
          <Transition
              enter-from-class="h-0" enter-active-class="transition-all duration-500 ease-in"
              appear appear-class="h-0" appear-active-class="transition-all duration-500 ease-in"
          >
            <div class="max-sm:h-[100%] sm:w-[100%] bg-sky-500 rounded-lg" :style="(windowHeight<640) ? {width: `${stats.base_stat/1.8}%`} : {height: `${stats.base_stat/1.8}%`}"/>
          </Transition>
        </div>
        <p class="sm:inline hidden text-yellow-400">{{stats.base_stat}}</p>
      </StracturesFlex>
    </StracturesFlex>
  </div>
</template>

<style scoped>

</style>