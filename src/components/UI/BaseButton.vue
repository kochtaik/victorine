<template>
  <button
    :class="[sizeClasses, variant]"
    class="rounded-sm transition-colors"
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
const variant = computed(() => props.disabled ? `${props.variant} disabled`: props.variant)
const sizeClasses = computed(() => {
  const sizeMap = {
    sm: 'w-24 h-5 leading-5',
    md: 'w-32 h-10 leading-6',
    lg: 'w-48 h-12 leading-6',
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