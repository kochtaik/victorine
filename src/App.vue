<template>
  <BaseHeader/>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
  <BaseFooter/>
</template>

<script lang="ts" setup>
import BaseHeader from "@/components/UI/BaseHeader.vue";
import BaseFooter from "@/components/UI/BaseFooter.vue";
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
