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
        title: 'login'
    },
    {
        component: Options,
        path: '/options',
        title: 'options'
    },
    {
        component: Orders,
        path: '/orders',
        title: 'orders'
    },
    {
        component: Stock,
        path: '/stock',
        title: 'stock'
    },
    // TESTING ONLY
    {
        component: ComponentPlayground,
        path: '/component-playground',
        title: 'Component Playground'
    },
]

export default new VueRouter({ routes })