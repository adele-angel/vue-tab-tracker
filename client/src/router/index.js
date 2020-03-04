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
		component: () => import("../components/Songs/Songs.vue")
	},
	{
		path: "/songs/create",
		name: "create-song",
		component: () => import("../components/CreateSong.vue")
	},
	{
		path: "/songs/:songId",
		name: "song",
		component: () => import("../components/ViewSong/ViewSong.vue")
	},
	{
		path: "/songs/:songId/edit",
		name: "update-song",
		component: () => import("../components/UpdateSong.vue")
	},
	{
		path: "*",
		redirect: "songs"
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
