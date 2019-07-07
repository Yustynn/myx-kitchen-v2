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
        name: 'login',
        title: 'Login'
    },
    {
        component: Options,
        path: '/options',
        name: 'options',
        title: 'Options'
    },
    {
        component: Orders,
        path: '/orders',
        name: 'orders',
        title: 'Orders'
    },
    {
        component: Stock,
        path: '/stock',
        name: 'stock',
        title: 'Stock'
    },
    // TESTING ONLY
    {
        component: ComponentPlayground,
        path: '/component-playground',
        name: 'componentPlayground',
        title: 'Component Playground'
    },
]

export default new VueRouter({ routes })