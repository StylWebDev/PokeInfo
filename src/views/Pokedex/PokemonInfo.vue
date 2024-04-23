<script setup>
import PokeCards from "../../components/PokeCards.vue";
import StracturesFlex from "../../components/StracturesFlex.vue";
import Loading from "../../components/Loading.vue";

</script>

<template>
  <StracturesFlex :column="true" justify="center" items="center">
      <Suspense>
        <template #default>
          <KeepAlive>
            <PokeCards />
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