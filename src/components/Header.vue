<script setup>
import {Icon} from "@iconify/vue";
import {reactive} from "vue";
import StracturesFlex from "./StracturesFlex.vue";

const navbar = reactive([
  {name: "Home", link: "/", icon:  `arcticons:pokemon-unite`, bgHoverColor: `hover:bg-emerald-600 hover:text-white`, bgColor: `bg-emerald-600 text-white`},
  {name: "Pokédex", link: "/pokedex", icon: `ic:sharp-catching-pokemon`, bgHoverColor: `hover:bg-orange-600  hover:text-white`, bgColor: `bg-orange-600 text-white`},
  {name: "About", link: "/about", icon: `tabler:info-square-rounded-filled`, bgHoverColor: `hover:bg-sky-500 hover:text-white`, bgColor: `bg-sky-500 text-white`}
])
</script>

<template>
  <div>
    <StracturesFlex :column="true" justify="center" items="center">
      <RouterLink to="/" class="text-rose-900 text-center text-3xl font-bold bg-neutral-300 hover:text-rose-600  w-[100%] py-3 transition duration-500 ease-in" >
        <Icon icon="ic:twotone-catching-pokemon" class="inline size-12"/>
        PokeInfo
      </RouterLink>

      <StracturesFlex :row="true" justify="center" items="center" class="text-neutral-700">
        <RouterLink :to="links.link"
                    v-for="(links,index) in navbar"
                    :key="index"
                    class="text-center pt-2.5 transition-all duration-300 ease-in group/bern"
                    :class="links.bgHoverColor"
                    :active-class="links.bgColor"
        >
          <Icon class="inline-block size-8 group-hover/bern:scale-125 transition duration-100 ease-in" :icon="links.icon"/>
          <p class="mt-1.5">{{links.name}}</p>
          <div class="h-2 mt-2.5 max-[291px]:px-10 max-[340px]:px-12 max-sm:px-14 sm:px-16 xl:px-20  w-[100%]" :class="links.bgColor" />
        </RouterLink>
      </StracturesFlex>
    </StracturesFlex>
  </div>
</template>

<style scoped>

</style>