<template>
  <X
    :stroke-width="strokeWidth"
    class="mark-border h-[var(--internal-mark-size)] w-[var(--internal-mark-size)] text-sky-400"
    v-if="type === 'X'"
  />
  <Circle
    :stroke-width="strokeWidth"
    class="mark-border h-[calc(var(--internal-mark-size)_-_6px)] w-[calc(var(--internal-mark-size)_-_6px)] text-orange-400"
    v-else-if="type === 'O'"
  />
</template>

<script setup lang="ts">
import type { Mark } from "@/types";
import { X, Circle } from "lucide-vue-next";

interface Props {
  strokeWidth?: number;
  size?: number;
  type: Mark | null;
}

const props = withDefaults(defineProps<Props>(), {
  strokeWidth: 4,
});

const sizePx = computed(() => (props.size ? `${props.size}px` : undefined));
</script>

<style scoped>
.mark-border {
  --internal-mark-size: var(--mark-size, v-bind(sizePx));
}
</style>
