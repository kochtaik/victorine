
<template>
  <div>
    <BaseHeader />
    <slot />
    <BaseFooter/>
  </div>
</template>

<script lang="ts" setup>
import BaseHeader from "@/components/UI/BaseHeader.vue";
import BaseFooter from "@/components/UI/BaseFooter.vue";
</script>