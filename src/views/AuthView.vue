<template>
  <main>
    <component :is="component"></component>
    <h2>This is authentication page</h2>
  </main>
</template>

<script lang="ts" setup>
import SignUp from "@/components/auth/SignUp.vue";
import SignIn from "@/components/auth/SignIn.vue";
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const route = useRoute();
const componentsMap = {
  'signup': SignUp,
  'signin': SignIn,
};

const component = computed(
  () => componentsMap[route.params.action as keyof typeof componentsMap]
);
</script>