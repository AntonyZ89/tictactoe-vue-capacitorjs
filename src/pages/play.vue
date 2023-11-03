<template>
  <div class="space-y-6">
    <Logo />

    <div
      class="flex flex-col items-center space-y-1.5 [--grid-size:_50px] md:[--grid-size:_80px]"
    >
      <GameToolbar />
      <GameBoard />
      <GameResult />
    </div>

    <Footer />

    <GameEnd v-if="game.winner" />
  </div>
</template>

<script setup lang="ts">
const game = useGameStore();
</script>
