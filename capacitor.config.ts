import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.vue_poc.app",
  appName: "capacitor-vue-poc",
  webDir: "dist",
  android: {
    path: "capacitor/android",
  },
  /*
    NOTE: Debug only

  server: {
    url: "http://192.168.1.8:3000",
    androidScheme: 'https',
    cleartext: true,
  },
  */
};

export default config;
