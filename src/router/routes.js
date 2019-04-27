import Vue from 'vue'
import Router from 'vue-router'

// COMPONENTES 
import Login from '../components/login.vue'
import Items from '../components/Items.vue'

//VISTAS
import Products from '../views/Products'
import Cart from '../views/Cart'


Vue.use(Router)
const router = new Router({
	routes: [
		{
			path: '/',
			name: 'login',
			component: Login
		},
		{
			path: '/items',
			name: 'items',
			component: Items
    },
    {
			path: '/products',
			name: 'products',
			component: Products
    },
    {
			path: '/cart',
			name: 'cart',
			component: Cart
		}
	]
})

export default router