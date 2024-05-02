<script setup>

import StracturesFlex from "../components/StracturesFlex.vue";
import Grid from "../components/Grid.vue";
import Links from "./Links.vue";
</script>

<template>
  <Grid columns="2" class="w-[100%] text-red-700">
    <StracturesFlex :row="true" items="center" justify="center" class="text-lg max-sm:text-sm" >
      <img src="../assets/mainLogo.svg" alt="Logo" width="50" class="inline brightness-150">
      <StracturesFlex :column="true" justify="center"  class="align-middle text-sm text-center brightness-150"><div>© 2024</div><div>All Rights Reserved</div></StracturesFlex>
    </StracturesFlex>
    <StracturesFlex  class=" max-sm:text-sm  rainbow" :column="true" justify="center" items="center">
      <p class=" inline align-center font-bold ">Find Me on</p>
      <Links/>
    </StracturesFlex>
  </Grid>
</template>

<style scoped>

</style>