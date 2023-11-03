<template>
  <div
    class="fixed inset-0 flex select-none flex-col items-center justify-center bg-slate-700/60"
  >
    <div class="flex w-full flex-col items-center bg-slate-600 py-4 md:py-8">
      <div class="text-center text-xs font-bold text-white md:text-lg">
        <div v-if="game.winner === 'X'">
          {{ game.mode === "BOT" ? "YOU" : "PLAYER 1" }} WON!
        </div>

        <div v-else-if="game.winner === 'O'">
          {{ game.mode === "BOT" ? "BOT" : "PLAYER 2" }} WON!
        </div>
      </div>
      <div
        class="mb-2 text-xl font-extrabold md:text-4xl"
        :class="{
          'text-sky-400': game.winner === 'X',
          'text-orange-400': game.winner === 'O',
          'text-white': ['Draw', 'None'].some(
            (status) => status === game.winner,
          ),
        }"
      >
        <span v-if="game.winner === 'None'">WELCOME!</span>
        <span v-else-if="game.winner === 'Draw'">DRAW!</span>
        <span
          v-else
          class="flex items-center"
          :class="{
            'gap-x-1': game.winner === 'X',
            'gap-x-2': game.winner === 'O',
          }"
        >
          <GameBoardMark :size="40" :type="game.winner" />
          TAKES THE ROUND!
        </span>
      </div>
      <div
        :class="[
          'select-none space-x-3 text-xs font-extrabold text-white md:text-lg',
          '[&_>_*]:rounded-md',
          '[&_>_*]:px-3',
          '[&_>_*]:py-1',
          '[&_>_*]:[--width:_3px]',
          'md:[&_>_*]:rounded-lg',
          'md:[&_>_*]:px-6',
        ]"
      >
        <button
          class="clickable border-b-red-700 bg-red-500"
          @click="handleExit"
        >
          QUIT
        </button>

        <button
          class="clickable border-b-green-700 bg-green-500"
          @click="handleNewGame"
        >
          {{ game.winner === "None" ? "NEW GAME" : "NEXT ROUND" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const game = useGameStore();
const router = useRouter();

function handleNewGame() {
  setTimeout(game.reset, 300);
}

function handleExit() {
  setTimeout(() => {
    router.push({ name: "/" });
  }, 300);
}
</script>
