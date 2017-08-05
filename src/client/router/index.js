import Vue from 'vue'
import Router from 'vue-router'
//import database from '@/components/database'
//import canvas from '@/components/canvas'
//import products from '@/components/products'
//import detail from '@/components/the-product'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/index/database',
            name: 'database',
            component: resolve => require(['./../components/database.vue'], resolve)
        },
        {
            path: '/index',
            name: 'index',
            component: resolve => require(['./../components/index.vue'], resolve),
            redirect: '/index/main'
        },
        {
            path: '/index/main',
            name: 'canvas',
            component: resolve => require(['./../components/canvas.vue'], resolve)
        },
        { path: '/', redirect: '/index/main' },
        {
            path: '/index/products',
            name: 'products',
            component: resolve => require(['./../components/products.vue'], resolve),
            children: [
                { path: '/detail', component: resolve => require(['./../components/the-product.vue'], resolve) }
            ]
        },
        {
            path: '/admin',
            name: 'admin',
            component: resolve => require(['./../components/admin/admin.vue'], resolve)
        }
    ]
})