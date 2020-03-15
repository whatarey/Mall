
import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('views/home/home');
const Help = () => import('views/help/help');
const Cart = () => import('views/cart/cart');
const Category = () => import('views/category/category');
const Profile = () => import('views/profile/profile');
const Initialization_config = () => import('views/help/project_module/Initialization_config');
const Navbar_config = () => import('views/help/project_module/navbar');
const Request_config=()=>import('views/help/project_module/request_page');

/*  use */
Vue.use(VueRouter)
const routes = [
    {
        path:'',
        redirect:'home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/cart',
        component: Cart,
        meta: {
            title: '购物车'
        }
    },
    {
        path: '/category',
        component: Category,
        meta: {
            title: '分类'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '我的'
        }
    },
    {
        path: '/help',
        component: Help,
        meta: {
            title: '帮助页面'
        },
        children: [
            {
                path:'',
                redirect:'config'
            },
            {
                path: "config",
                component: Initialization_config,
                meta: {
                    title: "帮助页面--项目初始化有关配置"
                }
            },
            {
              path: "navbar",
              component: Navbar_config
              , meta: {
                title: "navbar"
              }
            },
            {
                path:'request',
                component:Request_config,
                meta:{
                    title:"网络请求封装"
                }
            }
        ]
    }
]
/*  创建 */
const router = new VueRouter({
    routes,
    mode: 'history'


})
export default router

//导出, 然后去 main.js 注册