<template>
  <div class="mx-auto w-52 space-y-8">
    <div
      class="mx-auto w-40 select-none text-3xl font-extrabold md:w-48 md:text-5xl"
      :class="[
        '[&_>_*]:px-4',
        '[&_>_*_>_span]:transition-all',
        '[&_>_*_>_span]:inline-block',
        '[&_>_*_>_span:hover]:scale-110',
        'md:[&_>_*]:px-0',
      ]"
    >
      <div class="text-red-400">
        <span>TIC</span>
      </div>
      <div class="-my-5 text-center text-white">
        <span>TAC</span>
      </div>
      <div class="text-right text-orange-400">
        <span>TOE</span>
      </div>
    </div>
  </div>
</template>
