<template>
  <div class="mx-auto w-52 space-y-1 text-center text-xs">
    <div class="font-bold text-white">Made with</div>

    <div class="space-y-3">
      <div class="space-x-4 [&_>_*]:inline-block">
        <a href="https://vuejs.org/">
          <img src="./../assets/vue.svg" :width="25" />
        </a>
        <a href="https://vitejs.dev/">
          <img src="/vite.svg" :width="25" />
        </a>
        <a href="https://capacitorjs.com/">
          <img src="./../assets/capacitor-js.svg" :width="25" />
        </a>
      </div>

      <a
        href="https://github.com/AntonyZ89"
        class="inline-flex items-center gap-x-2 font-bold text-white"
      >
        by
        <div
          class="flex h-6 w-6 items-center justify-center rounded-full border border-slate-400 bg-slate-900"
        >
          <Github :stroke-width="2" fill="currentColor" :size="16" />
        </div>
        Antony
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Github } from "lucide-vue-next";
</script>
