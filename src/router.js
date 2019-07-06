import VueRouter from 'vue-router'

import {
    ComponentPlayground,
    Login,
    Options,
    Orders,
    Stock
} from './views'

export const routes = [
    {
        component: Login,
        path: '/',
        title: 'Login'
    },
    {
        component: Options,
        path: '/options',
        title: 'Options'
    },
    {
        component: Orders,
        path: '/orders',
        title: 'Orders'
    },
    {
        component: Stock,
        path: '/stock',
        title: 'Stock'
    },
    // TESTING ONLY
    {
        component: ComponentPlayground,
        path: '/component-playground',
        title: 'Component Playground'
    },
]

export default new VueRouter({ routes })