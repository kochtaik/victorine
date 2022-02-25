<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script lang="ts" setup>
// eslint-disable-next-line-
import AppLayout from "@/layouts/AppLayout.vue";
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main {
  height: 100%;
}
</style>
