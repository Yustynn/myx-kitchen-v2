import VueRouter from 'vue-router'

import {
    Login,
    Options,
    Orders,
    Stock
} from './views'

const routes = [
    {
        component: Login,
        path: '/'
    },
    {
        component: Options,
        path: '/options'
    },
    {
        component: Orders,
        path: '/orders'
    },
    {
        component: Stock,
        path: '/stock'
    },
]

export default new VueRouter({ routes })