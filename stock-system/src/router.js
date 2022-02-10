import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";

Vue.use(Router);

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/users",
        component: Users,
    },
];

const router = new Router({
    mode: "history",
    routes,
});

export default router;
