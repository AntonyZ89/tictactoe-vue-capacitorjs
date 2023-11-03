<template>
  <div
    class="flex items-center justify-center rounded-md border-b-slate-900 bg-slate-700 transition-all [--width:_4px] md:rounded-lg md:[--width:_6px]"
    :class="{
      clickable: !type,
      'border-b-[2px]': type,
    }"
    @click="!type && game.markPlayer(props.index - 1)"
  >
    <GameBoardMark class="md:[--mark-size:_50px]" :type="type" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  index: number;
}

const props = defineProps<Props>();
const game = useGameStore();

const type = computed(() => game.board[props.index - 1]);
</script>
