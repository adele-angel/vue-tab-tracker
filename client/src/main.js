import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { sync } from "vuex-router-sync";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import vuetify from "./plugins/vuetify";
Vue.use(Vuetify);

import VueYouTubeEmbed from "vue-youtube-embed";
Vue.use(VueYouTubeEmbed);

import Panel from "@/components/globals/Panel";
// global module
Vue.component("Panel", Panel);

sync(store, router);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount("#app");
