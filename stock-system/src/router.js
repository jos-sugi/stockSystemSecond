import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";

Vue.use(Router);

const routes = [
    {
        path: "/",
        component: Home,
        name: "Home",
        meta: { title: "Home", description: "ホーム画面" },
    },
    {
        path: "/users",
        name: "Users",
        component: Users,
        meta: { title: "User", description: "ユーザー画面" },
    },
];

const router = new Router({
    mode: "history",
    routes,
});

export default router;
