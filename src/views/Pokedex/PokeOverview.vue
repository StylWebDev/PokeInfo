<script setup>
import Loading from "../../components/Loading.vue";
import StracturesFlex from "../../components/StracturesFlex.vue";
import PokeStats from "../../components/PokeStats.vue";
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <StracturesFlex :column="true" justify="center" items="center">
    <Transition appear enter-from-class="-translate-y-full opacity-0" enter-active-class="transition-all duration-1000 ease-in" appear-active-class="transition-all duration-1000 ease-in">
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
    </Transition>
  </StracturesFlex>
</template>

<style scoped>

</style>