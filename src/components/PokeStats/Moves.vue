<script setup>
import StracturesFlex from "../StracturesFlex.vue";
defineProps({
  pokeData: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <StracturesFlex class="max-sm:flex-col sm:flex-row sm:bg-darkviolet-400 items-start capitalize rounded w-[85%] max-sm:gap-y-6">
    <table class="max-sm:w-[100%] sm:w-[80%] bg-darkviolet-600 text-white rounded sm:rounded-tl-md">
      <thead >
      <tr>
        <th class=" bg-darkviolet-100 rounded-t pr-3">Level</th>
        <th class="px-2">Move</th>
      </tr>
      </thead>
      <tbody class="bg-darkviolet-400 sm:rounded-b-md text-center rounded-b">
      <tr v-for="(val,index) in pokeData.data.moves.filter(val => val[`version_group_details`][0][`level_learned_at`]>0).sort((a,b) => (a[`version_group_details`][0][`level_learned_at`] - b[`version_group_details`][0][`level_learned_at`]))"
          :key="index">
        <td class=" bg-darkviolet-500 ">{{val["version_group_details"][0]["level_learned_at"]}}</td>
        <td class="px-2">{{val.move.name.replace('-',' ')}} </td>
      </tr>
      </tbody>
    </table>

    <table width="100%" class="bg-darkviolet-600 text-white sm:rounded-tr-md sm:rounded-br text-center sm:border-l-2 max-sm:border-0 rounded">
      <thead class="sm:rounded-tr-md">
      <tr>
        <th class="bg-fuchsia-950 sm:rounded-tr-md rounded-t">Moves learnt by TM</th>
      </tr>
      </thead>
      <tbody class="bg-fuchsia-800 grid grid-cols-2 justify-items-center  sm:rounded-br-md text-center font-semibold rounded-b">
      <tr v-for="(val,index) in pokeData.data.moves.filter(val => val[`version_group_details`][0][`level_learned_at`]===0)" :key="index" :class="((index+1)%2===0) ? `bg-fuchsia-700 w-[100%]` : `bg-transparent`">
        <td class="p-1 text-center w-96">{{val.move.name.replace('-',' ')}} </td>
      </tr>
      </tbody>
    </table>

  </StracturesFlex>
</template>

<style scoped>

</style>