<script setup>
import Loading from "../../components/Loading.vue";
import StracturesFlex from "../../components/StracturesFlex.vue";
import PokeStats from "../../components/PokeStats.vue";
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <StracturesFlex :column="true" justify="center" items="center">
    <Suspense>
      <template #default>
        <KeepAlive>
          <PokeStats :name="route.params.name"/>
        </KeepAlive>
      </template>
      <template #fallback>
        <div class="text-darkviolet-50"><Loading/></div>
      </template>
    </Suspense>
  </StracturesFlex>
</template>

<style scoped>

</style>