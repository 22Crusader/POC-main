import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
    routes: (routes) => routes.concat([{
        name: 'customers',
        path: '/customers',
        component: () => import('@/submodules/customers/pages/index.vue')
    }, {
        name: 'customers-details-id',
        path: '/customers/details/:id',
        component: () => import('@/submodules/customers/pages/details/[id].vue')
    }])
}
