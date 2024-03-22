import "./assets/style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faLinkedin, faDiscord, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane} from '@fortawesome/free-regular-svg-icons'
import VueSmoothScroll from 'vue3-smooth-scroll'

library.add(fas, faInstagram, faLinkedin, faDiscord, faGithub, faPaperPlane);

const app = createApp(App);
app.use(VueSmoothScroll)
app.provide('smoothScroll', VueSmoothScroll)
app.use(createPinia());
app.use(router);
app.component('fa', FontAwesomeIcon);
app.mount("#app");
