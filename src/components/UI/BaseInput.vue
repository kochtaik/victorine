<template>
  <input 
    class="border pl-3 transition-colors rounded-sm h-11"
    :type="type" 
    :class="inputClass"
    :placeholder="placeholder"
    :disabled="disabled"
  >
</template>

<script lang="ts" setup>
import { computed, PropType } from "@vue/runtime-core";
type InputTypes = "text | password | email";
type InputVariants = "base | error | success | disabled";

const props = defineProps({
  variant: {
    type: String as PropType<InputVariants>,
    default() {
      return "base";
    }
  },
  type: {
    type: String as PropType<InputTypes>,
    default() {
      return "text";
    }
  },
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  }
})

const inputClass = computed(() => {
  return props.disabled ? "disabled" : props.variant;
})
</script>


<style lang="scss" scoped>
.base {
  @apply border-border placeholder-border focus:border-base outline-0;
}

.error {
  @apply border-error placeholder-border  focus:border-error outline-0;
}

.success {
  @apply border-success placeholder-border  focus:border-success outline-0;
}

.disabled {
  @apply  border-disabled placeholder-border bg-disabled focus:border-disabled outline-0;
}
</style>


