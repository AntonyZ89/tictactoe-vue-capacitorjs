<template>
  <div>
    <Logo />

    <div
      :class="[
        'mb-9 mt-3 flex h-32 flex-col justify-center gap-y-3 text-2xl font-extrabold text-white md:h-44 md:gap-y-4',
        '[&_>_*]:rounded-xl',
        '[&_>_*]:px-6',
        '[&_>_*]:py-2',
        '[&_>_*]:select-none',
        '[&_>_*]:[--width:_6px_!important]',
        'md:[&_>_*]:py-3',
        'md:[&_>_*]:text-3xl',
      ]"
    >
      <button
        class="clickable border-b-lime-700 bg-lime-400"
        @click="handleBotGame"
      >
        VERSUS BOT
      </button>

      <button
        class="clickable border-b-blue-700 bg-blue-500 [--width:_6px]"
        @click="handlePlayerGame"
      >
        VERSUS PLAYER
      </button>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const game = useGameStore();
const router = useRouter();

function handleBotGame() {
  setTimeout(() => {
    game.mode = "BOT";
    game.reset(false);

    router.push({ name: "/play" });
  }, 300);
}

function handlePlayerGame() {
  setTimeout(() => {
    game.mode = "PLAYER";
    game.reset(false);

    router.push({ name: "/play" });
  }, 300);
}
</script>
