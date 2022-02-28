import { createApp } from "vue";
import App from "./App.vue";
/* Global components */
import BaseButton from "@/components/UI/BaseButton.vue";
import BaseInput from "@/components/UI/BaseInput.vue";
import BaseSpinner from "@/components/UI/BaseSpinner.vue";

/* Ecosystem components */
import "./registerServiceWorker";
import router from "./router";
import { store, key } from "./store";
import './index.css';

/* Third-party libraries */
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

store.dispatch('initializeFirebase').then(() => {
  createApp(App)
    .component("BaseButton", BaseButton)
    .component("BaseInput", BaseInput)
    .component("BaseSpinner", BaseSpinner)
    .use(store, key)
    .use(router)
    .use(Toast)
    .mount("#app");
});
