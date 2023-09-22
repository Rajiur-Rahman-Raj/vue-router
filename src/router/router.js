import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Post from "../components/Post.vue";
import User from "../components/User.vue";

const routes = [
    {
        path: "/",
        component: HelloWorld
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    },
    {
        path: "/post/:id",
        name: "post",
        component: Post
    },
    {
        path: "/user/:id?",
        name: "user",
        component: User
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
