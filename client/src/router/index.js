import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home
	},
	{
		path: "/about",
		name: "about",
		component: () => import("../views/About.vue")
	},
	{
		path: "/register",
		name: "register",
		component: () => import("../components/Register.vue")
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../components/Login.vue")
	},
	{
		path: "/songs",
		name: "songs",
		component: () => import("../components/Songs.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
