import VueRouter from 'vue-router'

import {
    ComponentPlayground,
    Login,
    Options,
    Orders,
    Stock
} from '@/views'

import routesConfig from './routesConfig'

const {
    COMPONENT_PLAYGROUND,
    LOGIN,
    OPTIONS,
    ORDERS,
    STOCK
} = routesConfig;

export const routes = [
    {
        component: Login,
        ...LOGIN
    },
    {
        component: Options,
        ...OPTIONS
    },
    {
        component: Orders,
        ...ORDERS
    },
    {
        component: Stock,
        ...STOCK
    },
    // TESTING ONLY
    {
        component: ComponentPlayground,
        ...COMPONENT_PLAYGROUND
    },
]

export default new VueRouter({ routes })