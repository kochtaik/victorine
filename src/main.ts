import { createApp } from "vue";
import { initFirebase } from "./firebase/initFirebase";
import App from "./App.vue";
/* Global components */
import BaseButton from "@/components/UI/BaseButton.vue";
import "./registerServiceWorker";
import router from "./router";
import { store, key } from "./store";
import './index.css'

initFirebase();
createApp(App)
  .component("BaseButton", BaseButton)
  .use(store, key)
  .use(router)
  .mount("#app");
