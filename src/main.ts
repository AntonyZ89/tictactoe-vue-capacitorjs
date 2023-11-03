import { createApp } from "vue";
import "@/assets/index.css";
import "./style.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router/auto";
import { createPinia } from "pinia";

const router = createRouter({
  history: createWebHistory(),
});

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
