# Vue 3 + Vite + CapacitorJS

<p align="center">
   <img src="./public/vite.svg" alt="Vite" width="100" height="100" />
   <img src="./src/assets/vue.svg" alt="Vue" width="100" height="100" />
   <img src="./src/assets/capacitor-js.svg" alt="CapacitorJS" width="100" height="100" />
</p>

## Getting Started

**Obs.**: I'm using [bun](https://bun.sh/) but you can use any package manager you like.

```bash
bun install
bun run dev
```

## Running on device

Sync & copy the config of CapacitorJS to Android folder:

```bash
bun run build
bunx cap sync
bunx cap copy
```

Now open the `capacitor/android` folder with **Android Studio** and **build** the app.

## Running on device with Live Reload (Dev only)

1. Start the server with `bun run dev:host` (the `:host` is important!).
2. Uncomment "server" property on `capacitor.config.ts`.
3. `bunx cap copy`
4. Open the `capacitor/android` folder with Android Studio.
5. Build the app selecting your device on Android Studio.
6. Done :)

**Obs. 1**: Don't forget to comment "server" property on `capacitor.config.ts` before create a release.

**Obs. 2**: Run `bunx cap copy` after change `capacitor.config.ts`

# Vite Template

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
