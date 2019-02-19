import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Function = resolve => require(['@/views/Function'], resolve)
const Qq = resolve => require(['@/views/Qq'], resolve)
const OfficialAccount = resolve => require(['@/views/OfficialAccount'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/functions',
        component: Function
    },
    {
        path: '/qq',
        component: Qq
    },
    {
        path: '/officialAccount',
        component: OfficialAccount
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
