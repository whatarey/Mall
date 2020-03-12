
import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('views/home/home');
const Help = () => import('views/help/help');

Vue.use(VueRouter)
const routes = [
    {
        path: '/home',
        component: Home
    }, 
    {
        path: '/help',
        component: Help
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'


})
export default router

//导出, 然后去 main.js 注册