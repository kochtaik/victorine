<template>
  <div class="flex justify-center items-center h-full">
    <div class="container mx-4 p-4 shadow-lg rounded-sm max-w-xl">
      <component :is="component"></component>
    </div>
  </div>
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