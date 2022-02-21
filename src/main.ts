import { createApp } from "vue";
import { initFirebase } from "./firebase/initFirebase";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

initFirebase();

createApp(App).use(store).use(router).mount("#app");
