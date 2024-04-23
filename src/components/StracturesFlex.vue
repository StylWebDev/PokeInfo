<script setup lang="ts">
defineProps<{
  row?: boolean;
  column?: boolean;
  wrap?: boolean;
  link?: boolean;
  header?: boolean;
  footer?: boolean;
  nav?: boolean;
  button?: boolean;
  items?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
}>();
</script>

<template>
  <a v-if="typeof $attrs.link === 'string'" class="flex lg:flex"
     :class="{'flex-row': row, 'flex-col': column, 'flex-wrap': wrap, 'justify-start': justify === 'start', 'justify-center': justify === 'center', 'justify-end': justify === 'end', 'justify-between': justify === 'between', 'justify-around': justify === 'around', 'justify-evenly': justify === 'evenly', 'items-start': items === 'start', 'items-center': items === 'center', 'items-end': items === 'end' }">
    <slot/>
  </a>
  <nav v-else-if="typeof $attrs.nav === 'string'" class="flex lg:flex"
       :class="{'flex-row': row, 'flex-col': column, 'flex-wrap': wrap, 'justify-start': justify === 'start', 'justify-center': justify === 'center', 'justify-end': justify === 'end', 'justify-between': justify === 'between', 'justify-around': justify === 'around', 'justify-evenly': justify === 'evenly', 'items-start': items === 'start', 'items-center': items === 'center', 'items-end': items === 'end' }">
    <slot/>
  </nav>
  <header v-else-if="header" class="flex lg:flex"
          :class="{'flex-row': row, 'flex-col': column, 'flex-wrap': wrap, 'justify-start': justify === 'start', 'justify-center': justify === 'center', 'justify-end': justify === 'end', 'justify-between': justify === 'between', 'justify-around': justify === 'around', 'justify-evenly': justify === 'evenly', 'items-start': items === 'start', 'items-center': items === 'center', 'items-end': items === 'end' }">
    <slot/>
  </header>
  <footer v-else-if="typeof $attrs.footer === 'string'" class="flex lg:flex"
          :class="{'flex-row': row, 'flex-col': column, 'flex-wrap': wrap, 'justify-start': justify === 'start', 'justify-center': justify === 'center', 'justify-end': justify === 'end', 'justify-between': justify === 'between', 'justify-around': justify === 'around', 'justify-evenly': justify === 'evenly', 'items-start': items === 'start', 'items-center': items === 'center', 'items-end': items === 'end' }">
    <slot/>
  </footer>
  <button v-else-if="typeof $attrs.button === 'string'" class="flex lg:flex"
          :class="{'flex-row': row, 'flex-col': column, 'flex-wrap': wrap, 'justify-start': justify === 'start', 'justify-center': justify === 'center', 'justify-end': justify === 'end', 'justify-between': justify === 'between', 'justify-around': justify === 'around', 'justify-evenly': justify === 'evenly', 'items-start': items === 'start', 'items-center': items === 'center', 'items-end': items === 'end' }">
    <slot/>
  </button>
  <ul v-else-if="typeof $attrs.list === 'string'" class="flex lg:flex"
      :class="{'flex-row': row, 'flex-col': column, 'flex-wrap': wrap, 'justify-start': justify === 'start', 'justify-center': justify === 'center', 'justify-end': justify === 'end', 'justify-between': justify === 'between', 'justify-around': justify === 'around', 'justify-evenly': justify === 'evenly', 'items-start': items === 'start', 'items-center': items === 'center', 'items-end': items === 'end' }">
    <slot/>
  </ul>
  <li v-else-if="typeof $attrs.litem === 'string'" class="flex lg:flex"
      :class="{'flex-row': row, 'flex-col': column, 'flex-wrap': wrap, 'justify-start': justify === 'start', 'justify-center': justify === 'center', 'justify-end': justify === 'end', 'justify-between': justify === 'between', 'justify-around': justify === 'around', 'justify-evenly': justify === 'evenly', 'items-start': items === 'start', 'items-center': items === 'center', 'items-end': items === 'end' }">
    <slot/>
  </li>
  <div v-else class="flex lg:flex"
       :class="{'flex-row': row, 'flex-col': column, 'flex-wrap': wrap, 'justify-start': justify === 'start', 'justify-center': justify === 'center', 'justify-end': justify === 'end', 'justify-between': justify === 'between', 'justify-around': justify === 'around', 'justify-evenly': justify === 'evenly', 'items-start': items === 'start', 'items-center': items === 'center', 'items-end': items === 'end' }">
    <slot/>
  </div>
</template>