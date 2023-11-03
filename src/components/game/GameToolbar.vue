<template>
  <div class="grid grid-cols-[repeat(3,_var(--grid-size))] gap-x-2">
    <div class="flex items-center">
      <GameBoardMark
        :stroke-width="1"
        class="[--mark-size:_16px] md:[--mark-size:_25px]"
        type="X"
      />
      <GameBoardMark
        :stroke-width="1"
        class="[--mark-size:_16px] md:[--mark-size:_25px]"
        type="O"
      />
    </div>

    <div>
      <div
        class="flex select-none items-center justify-center rounded-md border-b-[3px] border-b-slate-900 bg-slate-700 py-0.5 text-white"
      >
        <X
          v-if="game.mark === 'X'"
          class="mark-border mr-0.5 h-3 w-3 md:h-4 md:w-4"
        />
        <Circle v-else class="mark-border mr-1 h-2.5 w-2.5 md:h-3.5 md:w-3.5" />
        <span class="text-[10px] font-bold md:text-sm">TURN</span>
      </div>
    </div>

    <div class="flex items-start justify-end">
      <div
        class="clickable inline-flex items-center justify-center rounded-md border-b-slate-400 bg-slate-300 p-1 text-slate-900 [--width:_3px] md:rounded-lg"
        @click="game.reset()"
      >
        <RotateCw stroke-width="3" class="h-2 w-2 md:h-4 md:w-4" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { X, Circle, RotateCw } from "lucide-vue-next";

const game = useGameStore();
</script>

<style scoped>
.mark-border {
  filter: drop-shadow(0.5px 0px 0px currentColor)
    drop-shadow(-0.5px 0px 0px currentColor)
    drop-shadow(0px -0.5px 0px currentColor)
    drop-shadow(0px 0.5px 0px currentColor);
}
</style>
