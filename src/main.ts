import { createApp } from "vue";
import App from "./App.vue";
// import vue3GMaps from "../src/plugins/gmap-vue3";
import router from "./router";
import { store, key } from "./store";
import ElementPlus from "element-plus";

import "./assets/css/tailwind.css";
import "./assets/css/theme.css";

const app = createApp(App);

app
  .use(store, key)
  .use(router)
  .use(ElementPlus)

  .mount("#app");
