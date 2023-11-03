<template>
  <div
    class="grid grid-cols-[repeat(3,_var(--grid-size))] gap-x-2 text-center [&_>_*]:rounded-md [&_>_*]:border-b-[3px] [&_>_*]:py-0.5"
  >
    <div class="border-b-sky-700 bg-sky-400">
      <div class="text-[8px] md:text-[12px]">X (YOU)</div>
      <div class="text-xs font-bold md:text-sm">
        {{ game.scoreboard.X }}
      </div>
    </div>
    <div class="border-b-slate-700 bg-slate-300">
      <div class="text-[8px] md:text-[12px]">TIES</div>
      <div class="text-xs font-bold md:text-sm">
        {{ game.scoreboard.Draw }}
      </div>
    </div>
    <div class="border-b-orange-700 bg-orange-400">
      <div class="text-[8px] md:text-[12px]">O (CPU)</div>
      <div class="text-xs font-bold md:text-sm">
        {{ game.scoreboard.O }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const game = useGameStore();
</script>
