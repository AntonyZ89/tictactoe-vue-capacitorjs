<script setup lang="ts">
import layouts from "@/layouts";

const route = useRoute();

const layout = computed(() => layouts[route.meta.layout || "main"]);
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
