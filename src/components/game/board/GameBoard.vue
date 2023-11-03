<template>
  <div
    class="grid grid-cols-[repeat(3,_var(--grid-size))] grid-rows-[repeat(3,_var(--grid-size))] gap-2"
  >
    <GameBoardItem v-for="i in 9" :key="i" :index="i" />
  </div>
</template>
