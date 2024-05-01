<script setup>
import PokeCards from "../../components/PokeCards.vue";
import StracturesFlex from "../../components/StracturesFlex.vue";
import Loading from "../../components/Loading.vue";

</script>

<template>
  <StracturesFlex :column="true" justify="center" items="center">
    <Transition appear enter-from-class="-translate-y-full opacity-0" enter-active-class="transition-all duration-1000 ease-in" appear-active-class="transition-all duration-1000 ease-in">
      <Suspense>
          <template #default>
            <PokeCards />
          </template>
          <template #fallback>
            <div class="text-darkviolet-50 "><Loading/></div>
          </template>
      </Suspense>
    </Transition>
  </StracturesFlex>
</template>

<style>

</style>