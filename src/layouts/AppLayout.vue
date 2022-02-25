
<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { markRaw, watch } from '@vue/runtime-core'
import AppLayoutDefault from './AppLayoutDefault.vue'
import { RouteMeta, useRoute } from 'vue-router'
const route = useRoute();
const layout  = markRaw(AppLayoutDefault);

watch(
() => route.meta, 
  async (meta: RouteMeta) => {
  try {
    const component = await import(`@/layouts/${meta.layout}.vue`);
    layout.value = component?.default || AppLayoutDefault;
  } catch(error) {
      layout.value = AppLayoutDefault
  }
}, {
  immediate: true,
});

</script>