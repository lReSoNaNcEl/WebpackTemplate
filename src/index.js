import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "./components/App";
import routes from '@/settings/routes'
import config from '@/settings/config'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes,
    mode: config.vueRouterMode,
    hash: false
})

const vw = new Vue({
    el: "#app",
    router
})