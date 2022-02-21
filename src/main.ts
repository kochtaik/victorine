import { createApp } from "vue";
import { initFirebase } from "./firebase/initFirebase";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import './index.css'

initFirebase();
createApp(App).use(store).use(router).mount("#app");
