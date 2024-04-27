<script setup>
import {ref} from "vue";

const pad = ref(`0000`)
defineProps({
  pokeData: {
    type: Object,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="text-center">
    <h2 class="capitalize text-xl text-netral-800 font-semibold mb-4">{{name.replace("-"," ")}}
      <span class="inline font-normal text-lg text-neutral-600">#{{pad.substring(0, pad.length - pokeData.data.id.toString().length) + pokeData.data.id.toString()}}</span>
    </h2>
    <img  :src="`https://img.pokemondb.net/artwork/avif/${name}.avif`" :alt="name+`_img`" class=" max-[350px]:size-[40] max-sm:size-60 max-sm:inline size-80 rounded-xl" />
    <audio controls>
      <source :src="pokeData.data.cries.latest" type="audio/ogg"/>
    </audio>
  </div>
</template>

<style scoped>

</style>