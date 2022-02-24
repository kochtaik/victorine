<template>
  <button
    :class="[sizeClasses, variantClasses]"
    class="inline-flex justify-between items-center rounded-sm transition-colors"
    :disabled="disabled"
    >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, PropType } from "@vue/runtime-core"
  type ButtonVariants = "base" | "outlined" | "text";
  type ButtonSizes = "sm" | "md" | "lg";

  const props = defineProps({
    size: {
      type: String as PropType<ButtonSizes>,
      default() {
        return "md";
      },
    },
    variant: {
      type: String as PropType<ButtonVariants>,
      default() {
        return "base";
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  });

/* 'Disable' is seen as modifier of button variants */
/* TODO: add 'circle' variant */
const variantClasses = computed(() => props.disabled ? `${props.variant} disabled`: props.variant)
const sizeClasses = computed(() => {
  const sizeMap = {
    sm: 'text-sm px-2 py-2',
    md: 'text-md px-3 py-3',
    lg: 'text-xl px-4 py-4',
  };

  return sizeMap[props.size];
});
</script>

<style lang="scss" scoped>
.base {
  @apply bg-base text-white hover:bg-baseLight active:bg-baseDark;

  &.disabled {
    @apply bg-disabled hover:bg-disabled active:bg-disabled;
  }
}

.outlined {
  @apply bg-transparent text-base border border-base hover:border-baseLight active:border-baseDark;

  &.disabled {
    @apply text-disabled border-disabled hover:border-disabled active:border-disabled;
  }
}

.text {
  @apply bg-transparent text-base hover:text-baseLight active:text-baseDark;

  &.disabled {
    @apply text-disabled hover:text-disabled active:text-disabled;
  }
}
</style>